'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@/shared/components/Container';
import { Logo } from '@/shared/components/Logo';
import { NavList } from './ui/NavList';
import { Button } from '@/shared/Button';
import { Avatar } from './ui/Avatar';
import { MobileMenu } from './ui/MobileMenu';
import clsx from 'clsx';

export const Header = () => {
    const [active, setActive] = useState<boolean>(false)

    const header = useRef(null)
    const isLoggedIn = false

    const handleResize = () => {
        if (window.scrollY > 1) {
            setActive(true)
            return
        }

        setActive(false)
    }

    useEffect(() => {
        if (!header.current) return

        handleResize()
        window.addEventListener('scroll', handleResize);

        return () => {
            window.removeEventListener('scroll', handleResize);
        }
    }, [])

    return (
        <header 
            className={clsx('sticky top-0 left-0 w-full z-[100] bg-transparent', {
                '!bg-black': active
            })} 
            ref={header}
        >
            <Container className='flex items-center gap-[56px] px-5 py-[48px] justify-between'>
                <Logo/>
                <NavList/>
                <div className='w-fit flex items-center gap-5'>
                    <Button variant='filled' className='hidden md:block'>CONNECT</Button>
                    <Avatar isLoggedIn={isLoggedIn}/>
                    <MobileMenu/>
                </div>
            </Container>
        </header>
    )
}