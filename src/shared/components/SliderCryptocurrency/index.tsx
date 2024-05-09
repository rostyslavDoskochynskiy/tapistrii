import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/shared/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import clsx from 'clsx';

import 'swiper/css';

// Icons
import DownloadIcon from '@/shared/assets/icons/Download.svg';

// Images
import EthereumBackground from '@/shared/assets/images/CurrencySliderBackground.png';

export interface CryptoCurrency {
    title: string;
    code: string;
    value: number;
    rate: number;
}

interface Props {
    items: CryptoCurrency[];
}

export const SliderCryptocurrency = ({ items }: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const swiperRef = useRef(null) as any;

    const handleSlideChange = (swiper: SwiperType) => {
        setCurrentSlide(swiper.activeIndex);
    };

    const handleNavigationClick = (index: number) => {
        if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    return (
        <div className="w-full flex flex-col gap-4 px-5">
            <div className="p-[24px] rounded-[12px] md:p-[80px] overflow-hidden relative">
                <Image 
                    src={EthereumBackground} width={100} 
                    height={100} 
                    alt='Ethereum image' 
                    className='absolute left-0 top-0 w-full h-full -z-[1] object-fill'
                    
                />
                <Swiper
                    ref={swiperRef}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={handleSlideChange}
                >
                    {items.map((currency, index) => (
                        <SwiperSlide key={index + currency.value}>
                            <div className="flex flex-col gap-[20px]">
                                <div className='w-[94px] h-[94px] rounded-full bg-white'></div>
                                <div className='flex flex-col'>
                                    <div className='text-[44px] font-bold'>
                                        {currency.title} <span className='text-[#757575]'>&#183; {currency.code}</span>
                                    </div>
                                    <div className='flex items-center gap-5 text-[24px] font-bold'>
                                        ${currency.value}
                                        <span className='flex items-center gap-[12px] text-[#DF6A70]'>
                                            <Image src={DownloadIcon} width={32} height={32} alt='Download icon'/>
                                            {currency.rate}%
                                        </span>
                                    </div>
                                </div>
                                <Button variant='default' className='mt-[14px]'>LEARN MORE</Button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='w-full flex items-center justify-center gap-2'>
                {items.map((item, index) => (
                    <span 
                        key={index + item.code} 
                        className={clsx('w-[44px] h-[6px] rounded-[20px] bg-white/30 cursor-pointer', {
                            '!bg-white': currentSlide === index
                        })}
                        onClick={() => handleNavigationClick(index)}
                    />
                ))}
            </div>
        </div>
    )
}