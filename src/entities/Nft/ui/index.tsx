import Image from 'next/image';
import clsx from 'clsx';

// Icons
import NFTIcon from '@/shared/assets/icons/NFT.svg';
import BlockIcon from '@/shared/assets/icons/Block.svg';
import UploadIcon from '@/shared/assets/icons/Upload.svg';
import CommentIcon from '@/shared/assets/icons/Comment.svg';
import LikeIcon from '@/shared/assets/icons/Like.svg';

interface Props {
    className?: string;
}

export const Nft = ({ className }: Props) => {
    return (
        <div className={clsx('p-4 border border-[#4B4E69] flex flex-col gap-4 rounded-[20px]', className)}>
            <div className='w-full aspect-[1] bg-[#222222] rounded-[12px]'/>
            <div className='w-full flex items-center justify-between'>
            <span className='flex items-center gap-[8px]'>
                <Image src={NFTIcon} width={20} height={20} alt='NFT icon' />
                <span className='text-[14px] font-mono'>Fireblocks</span>
            </span>
            <span className='flex items-center gap-[24px]'>
                <Image src={BlockIcon} width={16} height={16} alt='Block icon' />
                <Image src={UploadIcon} width={11} height={11} alt='Upload icon' />
            </span>
            </div>
            <div className='text-[22px] font-bold'>Title of NFT #1572</div>
            <div className='flex w-full flex-col gap-[2px]'>
            <div className='text-[18px] font-semibold'>
                <span className='text-white/50'>Sold for</span> 342ETH · $14.00
            </div>
            <div className='text-[12px] text-[#A1A1A1]'>
                From #eth_address to #eth_address on #mktplace
            </div>
            </div>
            <div className='flex w-full gap-2 flex-wrap items-center justify-between'>
            <div className='flex items-center gap-5'>
                {Array.from({ length: 2 }).map((item, index) => (
                <div key={index} className='relative w-[32px] aspect-[1] rounded-full bg-cyan-400'>
                    <div className='w-[18px] aspect-[1] rounded-full absolute -right-[10px] bottom-0 bg-violet-500'>

                    </div>
                </div>
                ))}
            </div>
            <div className='flex items-center gap-2 font-medium text-[12px]'>
                <span className='flex items-center gap-[8px] px-[12px] py-[7px] rounded-[8px] bg-[#474747]'>
                    <Image src={CommentIcon} width={16} height={16} alt='Comment icon' />
                    6
                </span>
                <span className='flex items-center gap-[8px] px-[12px] py-[7px] rounded-[8px] bg-[#474747]'>
                    <Image src={LikeIcon} width={16} height={16} alt='Like icon' />
                    14
                </span>
            </div>
            </div>
        </div>
    )
}