'use client'

import React from 'react';
import clsx from 'clsx';

interface Props {
    className?: string;
    onClick?: () => void;
    variant?: 'default' | 'filled'
    children: React.ReactNode;
}

export const Button = ({ className, onClick, children, variant = 'default' }: Props) => {
    return (
        <button 
            className={clsx('w-fit rounded-[12px] px-6 py-3 border uppercase text-white', {
                'border-white': variant === 'default',
                'border-transparent bg-[#D48207]': variant === 'filled'
            }, className)}
            onClick={onClick && onClick}
        >
            { children }
        </button>
    )
}