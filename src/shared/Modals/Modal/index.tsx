'use client'

import React from 'react';
import clsx from 'clsx';
import { Portal } from '@/shared/Portal';

interface Props {
    className?: string;
    children: React.ReactNode;
    isOpen: boolean;
}

export const Modal = ({ isOpen, children, className }: Props) => {
    return isOpen ? (
        <Portal>
            <div className={clsx('fixed top-0 left-0 w-full h-[100vh] bg-black/50 z-[1000]', className)}>
                {children}
            </div>
        </Portal>
    ) : null
}