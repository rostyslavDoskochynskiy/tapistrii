'use client'

import { useState } from 'react';
import { Container } from '@/shared/components/Container';
import { SliderCryptocurrency } from '@/shared/components/SliderCryptocurrency';
import { BaseBox } from '@/shared/components/Boxes';
import { Header } from '@/widgets/Header';
import { NavBar } from '@/widgets/NavBar';
import { BackgroundGradient } from '@/shared/components/BackgroundGradient';
import { TopServices } from '@/shared/components/TopServices';
import { LatestAirdrops } from '@/shared/components/LatestAirdrops';
import { TopCollections } from '@/shared/components/TopCollections';
import { NewestTokens } from '@/shared/components/NewestTokens';
import { CoolNfts } from '@/shared/components/CoolNfts';
import { WalletProviders } from '@/shared/components/WalletProviders';
import { Services } from '@/widgets/Services';

// Interfaces
import { ITab } from '@/widgets/NavBar';

const cryptocurrencys = [
  { title: 'Ethereum', code: 'ETH', value: 3158.83, rate: 1.4 },
  { title: 'HEX', code: 'HEX', value: 0.997698, rate: 0.38 },
  { title: 'Tether', code: 'TET', value: 0.99843, rate: 0.04 },
]

const Home = () => {
  const [activeTab, setActiveTab] = useState<ITab>({
    name: 'default', 
    gradient: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(142,70,20,1) 35%, rgba(40,18,66,1) 100%)'
  })

  const handleChangeTab = (tab: ITab) => {
    setActiveTab(tab)
  }

  return (
    <div className='relative'>
      <Header/>
      <BackgroundGradient gradient={activeTab?.gradient}/>

      <Container>
        <NavBar onClick={handleChangeTab} activeTab={activeTab}/>

        <div className='flex flex-col w-full gap-[117px]'>
          {activeTab.name === 'default' && (<>
            <SliderCryptocurrency items={cryptocurrencys} />
            <TopServices/>
            <LatestAirdrops/>
            <TopCollections/>
  
            <BaseBox title='What’s hot'>
              <SliderCryptocurrency items={cryptocurrencys} />
            </BaseBox>
  
            <div className='hidden lg:block'>
              <BaseBox title='Trending [title]'>
                <div className='grid grid-cols-1 gap-[27px] md:grid-cols-2 lg:grid-cols-3'>
                  {Array.from({ length: 3 }).map((item, index) => (
                      <div 
                        key={index} 
                        className='w-[372px] h-[372px] rounded-[20px] bg-cover' 
                        style={{ backgroundImage: `url("/assets/images/trending_${index + 1}.jpg")` }}
                      >
    
                      </div>
                  ))}
                </div>
              </BaseBox>
            </div>
            
            <NewestTokens/>
            <CoolNfts/>
            <WalletProviders/>
          </>)}

          {activeTab.name === 'Services' && <Services/>}
        </div>
      </Container>
    </div>
  );
}

export default Home;
