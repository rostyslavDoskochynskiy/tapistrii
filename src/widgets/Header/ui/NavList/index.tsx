'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import clsx from 'clsx';

const pages = [
    { title: 'DISCOVER', href: '/' },
    { title: 'CATEGORIES', href: '/categories' },
]

export const NavList = () => {
    const path = usePathname();

    return (
        <div className='hidden flex-1 items-center gap-[30px] md:flex'>
            {pages.map((page, index) => (
                <Link 
                    key={index + page.title} 
                    href={page.href} 
                    className={clsx('text-[18px] text-white/50', {
                        '!text-[#FF9900]': path === page.href
                    })}
                >
                    {page.title}
                </Link>
            ))}
        </div>
    )
}