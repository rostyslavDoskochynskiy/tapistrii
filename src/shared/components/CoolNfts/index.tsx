import { BaseBox } from '@/shared/components/Boxes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Nft } from '@/entities/Nft/ui';

export const CoolNfts = () => {
    return (
        <BaseBox title='Cool NFTs'>
          <div className='block md:hidden'>
            <Swiper
              spaceBetween={20}
              slidesPerView={1.1}
              className='w-full !px-5'
            >
              {Array.from({ length: 4 }).map((item, index) => (
                <SwiperSlide key={index}>
                  <Nft/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='hidden md:block'>
            <div className='grid grid-cols-1 gap-[27px] md:grid-cols-4 px-5'>
              {Array.from({ length: 4 }).map((item, index) => (
                <Nft key={index}/>
              ))}
            </div>
          </div>
        </BaseBox>
    )
}