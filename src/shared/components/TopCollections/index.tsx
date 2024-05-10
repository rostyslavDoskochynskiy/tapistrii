import { BaseBox } from '@/shared/components/Boxes';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';

const data = [
  { title: 'BoredApeYachtClub', background: '/assets/images/nft_bg_1.jpg', image: '/assets/images/nft_img_1.png', tabs: ['BTC', 'NFT']},
  { title: 'PudgyPenguins', background: '/assets/images/nft_bg_2.jpg', image: '/assets/images/nft_img_2.png', tabs: ['Ethereum', 'NFT']},
  { title: 'CryptoPunks', background: '/assets/images/trending_1.jpg', image: '/assets/images/nft_img_3.png', tabs: ['Category', 'Category']},
  { title: 'Doodles', background: '/assets/images/trending_2.jpg', image: '/assets/images/nft_img_4.png', tabs: ['Category', 'Category']},
  { title: 'Persona', background: '/assets/images/trending_3.jpg', image: '/assets/images/nft_img_5.png', tabs: ['Category', 'Category']},
]

export const TopCollections = () => {
  return (
      <BaseBox title='Top collections'>
        <div className='block w-full md:hidden'>
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            className='w-full !px-5'
          >
            {data.map((item, index) => (
              <SwiperSlide key={index + item.title}>
                <div 
                  className='w-full flex flex-col justify-between h-[260px] rounded-[20px] bg-[#474747] p-[24px] overflow-hidden bg-cover'
                  style={{ backgroundImage: `url(${item.background})` }}
                >
                  <div className='w-full flex items-center gap-2'>
                    {item.tabs.map((tab, index) => (
                      <span key={index + tab} className={clsx('rounded-[4px] px-[8px] py-[1px] bg-[#676879]', {
                        '!bg-[#E28800]': index === 0
                      })}>
                        {tab}
                      </span>
                    ))}
                  </div>
                  <div className='w-full flex flex-col gap-4'>
                    <div 
                      className='w-[94px] h-[94px] rounded-[8px] bg-black bg-cover'
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className='w-full break-words text-[24px] font-bold whitespace-normal'>
                      BoredApeYachtClub
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='hidden md:grid grid-cols-2 gap-[56px] lg:grid-cols-6 px-5'>
          {data.map((item, index) => (
              <div 
                key={index + item.title} 
                className={clsx('w-full flex flex-col justify-between h-[372px] rounded-[20px] bg-[#474747] p-[24px] overflow-hidden bg-cover', {
                  'col-span-1 lg:col-span-3': index < 2,
                  'col-span-1 lg:col-span-2': index >= 2
                })}
                style={{ backgroundImage: `url(${item.background})` }}
              >
                <div className='w-full flex items-center gap-2'>
                  {item.tabs.map((tab, index) => (
                    <span key={index + tab} className={clsx('rounded-[4px] px-[8px] py-[1px] bg-[#676879]', {
                      '!bg-[#E28800]': index === 0
                    })}>
                      {tab}
                    </span>
                  ))}
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <div 
                    className='w-[94px] h-[94px] rounded-[8px] bg-black bg-cover'
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className='text-[24px] font-bold whitespace-normal'>
                    BoredApeYachtClub
                  </div>
                </div>
              </div>
          ))}
        </div>
      </BaseBox>
  )
}