'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

// Icons
import { MdKeyboardArrowDown } from "react-icons/md";
import UserIcon from '@/shared/assets/icons/User.svg';

interface Props {
    isLoggedIn: boolean;
}

export const Avatar = ({ isLoggedIn }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleManuOpen = () => {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <div 
            className='w-fit flex items-center gap-[8px] cursor-pointer relative' 
            onClick={handleManuOpen}
        >
            <div className={clsx('flex items-center justify-center w-[48px] h-[48px] text-[18px] rounded-full overflow-hidden bg-gradient-to-br', {
                'from-[#502861] to-[#1D0E23]': !isLoggedIn,
                'from-[#6158BF] to-[#72A2CE]': isLoggedIn,
            })}>
                {isLoggedIn ? (
                    <>R</>
                ) : (
                    <Image src={UserIcon} width={20} height={20} alt='User icon'/>
                )}
            </div>
            <MdKeyboardArrowDown className='w-5 h-5'/>
            {isMenuOpen && (
                <div className='w-fit min-w-[164px] h-fit absolute right-0 -bottom-[100%] p-[8px] bg-white text-black rounded-[8px] translate-y-[80%]'>
                    {!isLoggedIn ? (<>
                        <div className='p-[8px]'>Sign up</div>
                        <div className='p-[8px]'>Log in</div>
                    </>) : (<>
                        <div className='p-[8px]'>Profile</div>
                    </>)}
                </div>
            )}
        </div>
    )
}