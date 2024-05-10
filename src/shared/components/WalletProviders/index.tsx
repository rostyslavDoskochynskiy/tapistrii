import { BaseBox } from '@/shared/components/Boxes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { chunkArray } from '@/utils/array';

export const WalletProviders = () => {
    return (
        <BaseBox title='Wallet providers'>
            <div className='block md:hidden'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.1}
                    className='w-full !px-5'
                >
                    {chunkArray(Array.from({ length: 9 }), 3).map((block, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex w-full flex-col'>
                                {block.map((item: any, index: number) => (
                                    <div key={index} className='w-full flex gap-[16px]'>
                                        <div className='w-[74px] h-[74px] bg-[#474747] rounded-md'/>
                                        <div className='flex-1 flex flex-col gap-1'>
                                            <span className='font-bold text-[24px]'>Title</span>
                                            <span>Lorem ipsum dolor sit</span>
                                            <span className='text-[12px]'>10000 items · 5337 collectors</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='hidden grid-cols-1 gap-[27px] md:grid-cols-3 md:grid px-5'>
                {Array.from({ length: 9 }).map((item, index) => (
                    <div key={index} className='flex gap-4'>
                        <div className='w-[74px] h-[74px] bg-[#474747] rounded-md'/>
                        <div className='flex-1 flex flex-col gap-1'>
                            <span className='font-bold text-[24px]'>Title</span>
                            <span>Lorem ipsum dolor sit</span>
                            <span className='text-[12px]'>10000 items · 5337 collectors</span>
                        </div>
                    </div>
                ))}
            </div>
        </BaseBox>
    )
}