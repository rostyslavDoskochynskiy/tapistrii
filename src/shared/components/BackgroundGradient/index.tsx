'use client'

interface Props {
    gradient: string;
}

export const BackgroundGradient = ({ gradient }: Props) => {
    return (
        <div 
            className='absolute left-0 top-0 w-full aspect-[1] bg-white -z-[1] bg-transparent' 
            style={{ background: gradient }}
        />
    )
}