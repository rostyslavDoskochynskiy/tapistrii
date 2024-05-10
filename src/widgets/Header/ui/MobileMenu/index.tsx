'use client'

import React, { useState } from 'react';
import { Modal } from '@/shared/Modals/Modal';
import { Logo } from '@/shared/components/Logo';

// Icons
import { TfiClose } from "react-icons/tfi";

const pages = [
    'FAQs', 'Notifications', 'Chats', 'Messages', 'Settings', 'Profile'
]

export const MobileMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    const handleMobileMenuTrigger = () => {
        setIsMobileMenuOpen(prev => !prev)
    }

    const handleCloseMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (<>
        <div className='flex flex-col justify-between w-[20px] h-[15px] cursor-pointer md:hidden' onClick={handleMobileMenuTrigger}>
            <span className='block h-[1px] bg-white'/>
            <span className='block h-[1px] bg-white'/>
        </div>
        <Modal isOpen={isMobileMenuOpen} className='md:hidden'>
            <div className='w-full h-[100vh] bg-black px-5 py-[50px]'>
                <div className='flex w-full items-center justify-between'>
                    <Logo/>
                    <span onClick={handleCloseMobileMenu} className='cursor-pointer'>
                        <TfiClose className='w-[30px] h-[30px] text-white'/>
                    </span>
                </div>
                <div className='w-full flex flex-col gap-5 mt-[50px]'>
                    {pages.map((page, index) => (
                        <button key={index + page} className='w-full text-[24px] text-left'>
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </Modal>
    </>)
}