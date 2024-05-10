import React from 'react';
import clsx from 'clsx';

interface Props {
    className?: string;
    width?: number; 
    children: React.ReactNode;
}

export const Container = ({ className, width = 1230, children }: Props) => {
    return (
        <div className={clsx('w-full m-auto z-100', className)} style={{ maxWidth: width }}>
            { children }
        </div>
    )
}