import Image from 'next/image';

// Icons
import LogoIcon from '@/shared/assets/icons/Logo.svg';

export const Logo = () => {
    return (
        <div className='w-fit flex items-center gap-2'>
            <Image src={LogoIcon} width={30} height={30} alt='Logo'/>
            <span className='text-[24px] font-medium'>
                tapistrii
            </span>
        </div>
    )
}