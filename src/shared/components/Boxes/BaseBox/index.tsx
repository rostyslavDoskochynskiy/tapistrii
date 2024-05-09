'use client'
import React, { useState } from 'react';
import { Button } from '@/shared/Button';
import clsx from 'clsx';

interface Props {
    title: string;
    children: React.ReactNode;
}

type IBaseBoxTabs = '24HR' | 'All Time'

export const BaseBox = ({ title, children }: Props) => {
    const [activeTab, setActiveTab] = useState<IBaseBoxTabs>('24HR');

    return (
        <div className='flex w-full flex-col gap-[57px]'>
            <div className='flex items-center justify-between px-5'>
                <span className='text-[32px] font-bold'>{title}</span>
                <div className='w-fit flex items-center gap-2'>
                    <Button 
                        variant='filled' 
                        className={clsx('text-white !bg-[#111111]/70 !px-4 !py-2', {
                            '!text-[#323338] !bg-white': activeTab === '24HR',
                        })}
                        onClick={() => setActiveTab('24HR')}
                    >
                        24 hr
                    </Button>
                    <Button 
                        variant='filled' 
                        className={clsx('text-white !bg-[#111111]/70 !px-4 !py-2 capitalize', {
                            '!text-[#323338] !bg-white': activeTab === 'All Time',
                        })}
                        onClick={() => setActiveTab('All Time')}
                    >
                        All Time
                    </Button>
                </div>
            </div>
            {children}
        </div>
    )
}