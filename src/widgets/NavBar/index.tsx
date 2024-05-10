'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';

type TTabs = 'Services' | 'Bitcoin' | 'Ordinals' | 'Runes' | 'Ethereum' | 'default'

export interface ITab {
    name: TTabs;
    gradient: string;
} 

const items: ITab[] = [
    { name: 'Services', gradient: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(99,39,131,1) 35%, rgba(28,34,102,1) 100%)' },
    { name: 'Bitcoin', gradient: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(142,70,20,1) 35%, rgba(40,18,66,1) 100%)' },
    { name: 'Ordinals', gradient: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(142,70,20,1) 35%, rgba(40,18,66,1) 100%)' },
    { name: 'Runes', gradient: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(142,70,20,1) 35%, rgba(40,18,66,1) 100%)' },
    { name: 'Ethereum', gradient: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(142,70,20,1) 35%, rgba(40,18,66,1) 100%)' },
]

interface Props {
    activeTab: ITab;
    onClick: (item: ITab) => void;
}

export const NavBar = ({ onClick, activeTab }: Props) => {
    return (
        <div className='flex w-full items-center gap-2 mb-[32px] md:pl-5'>
            <div className='flex w-full md:hidden'>
                <Swiper
                    spaceBetween={8}
                    slidesPerView={'auto'}
                    className='!w-full !pl-5'
                >
                    {items.map((tab, index) => (
                        <SwiperSlide key={index} className='!w-fit'>
                            <button 
                                key={index + tab.name} 
                                className={clsx('rounded-[12px] px-4 py-[9px] bg-[#111111]/70', {
                                    'bg-white text-black': activeTab.name === tab.name
                                })}
                                onClick={() => onClick(tab)}
                            >
                                {tab.name}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='hidden w-full items-center gap-2 md:flex'>
                {items.map((tab, index) => (
                    <button 
                        key={index + tab.name} 
                        className={clsx('rounded-[12px] px-4 py-[9px] bg-[#111111]/70', {
                            'bg-white text-black': activeTab.name === tab.name
                        })}
                        onClick={() => onClick(tab)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
        </div>
    )
}