'use client'

import { Container } from '@/shared/components/Container';
import { SliderCryptocurrency } from '@/shared/components/SliderCryptocurrency';
import { BaseBox } from '@/shared/components/Boxes/BaseBox';
import Image from 'next/image';
import clsx from 'clsx';

// Icons
import NFTIcon from '@/shared/assets/icons/NFT.svg';
import BlockIcon from '@/shared/assets/icons/Block.svg';
import UploadIcon from '@/shared/assets/icons/Upload.svg';
import CommentIcon from '@/shared/assets/icons/Comment.svg';
import LikeIcon from '@/shared/assets/icons/Like.svg';

const items = [
  'Services', 'Bitcoin', 'Ordinals', 'Runes', 'Ethereum'
]

const cryptocurrencys = [
  { title: 'Ethereum', code: 'ETH', value: 3158.83, rate: 1.4 },
  { title: 'HEX', code: 'HEX', value: 0.997698, rate: 0.38 },
  { title: 'Tether', code: 'TET', value: 0.99843, rate: 0.04 },
]

const Home = () => {
  return (
    <Container>
      <div className='flex w-full items-center gap-2 mb-[32px]'>
        {items.map((item, index) => (
          <button key={index + item} className='rounded-[12px] px-4 py-[9px] bg-[#111111]/70'>
            {item}
          </button>
        ))}
      </div>

      <SliderCryptocurrency items={cryptocurrencys} />

      <div className='flex flex-col w-full gap-[117px] mt-[78px]'>
        <BaseBox title='Top services'>
          <div className='grid grid-cols-1 gap-[27px] md:grid-cols-3'>
            {Array.from({ length: 9 }).map((item, index) => (
                <div key={index} className='flex gap-4'>
                    <div className='w-[74px] h-[74px] bg-[#474747] rounded-md'/>
                    <div className='flex-1 flex flex-col gap-1'>
                        <span className='font-bold text-[24px]'>Title</span>
                        <span>Lorem ipsum dolor sit</span>
                        <span className='text-[12px]'>10000 items · 5337 collectors</span>
                        <div className='flex items-center gap-2 text-[12px] text-[#AFAFAF] font-medium'>
                            <span>Type</span>
                            <span>Ecosystem</span>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </BaseBox>
        
        <BaseBox title='Latest airdrops'>
          <div className='grid grid-cols-1 gap-[27px] md:grid-cols-3'>
            {Array.from({ length: 9 }).map((item, index) => (
                <div key={index} className='flex gap-4'>
                    <div className='w-[74px] h-[74px] bg-[#474747] rounded-md'/>
                    <div className='flex-1 flex flex-col gap-1'>
                        <span className='font-bold text-[24px]'>Title</span>
                        <span>Lorem ipsum dolor sit</span>
                        <span className='text-[12px]'>10000 items · 5337 collectors</span>
                        <div className='flex items-center gap-2 text-[12px] text-[#AFAFAF] font-medium'>
                            <span>Type</span>
                            <span>Ecosystem</span>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </BaseBox>
        
        <BaseBox title='Top collections'>
          <div className='grid grid-cols-6 gap-[56px]'>
            {Array.from({ length: 5 }).map((item, index) => (
                <div key={index} className={clsx('w-full flex flex-col justify-between h-[372px] rounded-[20px] bg-[#474747] p-[24px]', {
                  'col-span-3': index < 2,
                  'col-span-2': index >= 2
                })}>
                  <div className='w-full flex items-center gap-2'>
                    <span className='rounded-[4px] px-[8px] py-[1px] bg-[#E28800]'>BTC</span>
                    <span className='rounded-[4px] px-[8px] py-[1px] bg-[#676879]'>NFT</span>
                  </div>
                  <div className='w-full flex flex-col gap-4'>
                    <div className='w-[94px] h-[94px] rounded-[8px] bg-black'></div>
                    <div className='text-[24px] font-bold'>BoredApeYachtClub</div>
                  </div>
                </div>
            ))}
          </div>
        </BaseBox>

        <BaseBox title='What’s hot'>
          <SliderCryptocurrency items={cryptocurrencys} />
        </BaseBox>

        <BaseBox title='Trending [title]'>
          <div className='grid grid-cols-1 gap-[27px] md:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: 3 }).map((item, index) => (
                <div key={index} className='w-[372px] h-[372px] rounded-[20px] bg-[#474747]'>

                </div>
            ))}
          </div>
        </BaseBox>
        
        <BaseBox title='Newest tokens'>
          <div className='grid grid-cols-1 gap-[27px] md:grid-cols-3'>
            {Array.from({ length: 9 }).map((item, index) => (
                <div key={index} className='flex gap-4'>
                    <div className='w-[74px] h-[74px] bg-[#474747] rounded-md'/>
                    <div className='flex-1 flex flex-col gap-1'>
                        <span className='font-bold text-[24px]'>Title</span>
                        <span>Lorem ipsum dolor sit</span>
                        <span className='text-[12px]'>10000 items · 5337 collectors</span>
                        <div className='flex items-center gap-2 text-[12px] text-[#AFAFAF] font-medium'>
                            <span>Type</span>
                            <span>Ecosystem</span>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </BaseBox>

        <BaseBox title='Cool NFTs'>
          <div className='grid grid-cols-1 gap-[27px] md:grid-cols-4'>
            {[1, 2, 3, 4].map((item, index) => (
                <div key={index} className='p-4 border border-[#4B4E69] flex flex-col gap-4 rounded-[20px]'>
                  <div className='w-full aspect-[1] bg-[#222222] rounded-[12px]'/>
                  <div className='w-full flex items-center justify-between'>
                    <span className='flex items-center gap-[8px]'>
                      <Image src={NFTIcon} width={20} height={20} alt='NFT icon' />
                      <span className='text-[14px] font-mono'>Fireblocks</span>
                    </span>
                    <span className='flex items-center gap-[24px]'>
                      <Image src={BlockIcon} width={16} height={16} alt='Block icon' />
                      <Image src={UploadIcon} width={11} height={11} alt='Upload icon' />
                    </span>
                  </div>
                  <div className='text-[22px] font-bold'>Title of NFT #1572</div>
                  <div className='flex w-full flex-col gap-[2px]'>
                    <div className='text-[18px] font-semibold'>
                      <span className='text-white/50'>Sold for</span> 342ETH · $14.00
                    </div>
                    <div className='text-[12px] text-[#A1A1A1]'>
                      From #eth_address to #eth_address on #mktplace
                    </div>
                  </div>
                  <div className='flex w-full flex-wrap items-center justify-between'>
                    <div className='flex items-center gap-5'>
                      {Array.from({ length: 2 }).map((item, index) => (
                        <div key={index} className='relative w-[32px] aspect-[1] rounded-full bg-cyan-400'>
                          <div className='w-[18px] aspect-[1] rounded-full absolute -right-[10px] bottom-0 bg-violet-500'>

                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='flex items-center gap-2 font-medium text-[12px]'>
                      <span className='flex items-center gap-[8px] px-[12px] py-[7px] rounded-[8px] bg-[#474747]'>
                        <Image src={CommentIcon} width={16} height={16} alt='Comment icon' />
                        6
                      </span>
                      <span className='flex items-center gap-[8px] px-[12px] py-[7px] rounded-[8px] bg-[#474747]'>
                        <Image src={LikeIcon} width={16} height={16} alt='Like icon' />
                        14
                      </span>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </BaseBox>

        <BaseBox title='Wallet providers'>
          <div className='grid grid-cols-1 gap-[27px] md:grid-cols-3'>
            {Array.from({ length: 9 }).map((item, index) => (
                <div key={index} className='flex gap-4'>
                    <div className='w-[74px] h-[74px] bg-[#474747] rounded-md'/>
                    <div className='flex-1 flex flex-col gap-1'>
                        <span className='font-bold text-[24px]'>Title</span>
                        <span>Lorem ipsum dolor sit</span>
                        <span className='text-[12px]'>10000 items · 5337 collectors</span>
                        <div className='flex items-center gap-2 text-[12px] text-[#AFAFAF] font-medium'>
                            <span>Type</span>
                            <span>Ecosystem</span>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </BaseBox>
      </div>
    </Container>
  );
}

export default Home;
