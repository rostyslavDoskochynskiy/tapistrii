import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BaseTitle } from '@/shared/Typography/BaseTitle';
import clsx from 'clsx';

// Icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
    title: string;
    children?: React.ReactNode;
}

export const SliderBox = ({ title, children }: Props) => {
    const [swiperOptions, setSwiperOptions] = useState({
        isFirstSlide: true,
        isLastSlide: false
    });

    const swiperRef = useRef(null) as any;

    const handleSlideChange = () => {
        setSwiperOptions({
            isFirstSlide: swiperRef.current.swiper.isBeginning,
            isLastSlide: swiperRef.current.swiper.isEnd,
        })
    }

    const handlePrevSlide = () => {
        swiperRef.current.swiper.slidePrev()
    }

    const handleNextSlide = () => {
        swiperRef.current.swiper.slideNext();
    }

    return (
        <div className='w-full flex flex-col gap-[27px]'>
            <div className='w-full flex items-center justify-between px-5'>
                <BaseTitle text={title}/>
                <div className='w-fit flex items-center gap-[8px]'>
                    <button 
                        className={clsx('p-[14px] border border-white text-white rounded-[16px]', {
                            '!border-[#C5C7D0]/40 !text-[#C5C7D0]/40': swiperOptions.isFirstSlide
                        })} 
                        onClick={handlePrevSlide}
                    >
                        <IoIosArrowBack className='w-[20px] h-[20px]'/>
                    </button>
                    <button 
                        className={clsx('p-[14px] border border-white text-white rounded-[16px]', {
                            '!border-[#C5C7D0]/40 !text-[#C5C7D0]/40': swiperOptions.isLastSlide
                        })} 
                        onClick={handleNextSlide}
                    >
                        <IoIosArrowForward className='w-[20px] h-[20px]'/>
                    </button>
                </div>
            </div>
            <div>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={20}
                    slidesPerView={4}
                    onSlideChange={handleSlideChange}
                    className='w-full !px-5'
                >
                    {Array.from({ length: 6 }).map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-full flex flex-col gap-4'>
                                <div className='w-full aspect-[1] rounded-md border border-[#474747]'/>
                                <div className='flex w-full flex-col gap-[4px]'>
                                    <span className='font-bold text-[22px]'>Title</span>
                                    <span className='text-[#A1A1A1] text-[14px]'>
                                        Insert two line description for what this tile is highlighting. After two lines it would truncate so...
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}