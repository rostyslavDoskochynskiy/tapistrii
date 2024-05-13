interface Props {
    widthoutInfo?: boolean;
}

export const SliderItem = ({ widthoutInfo = false }: Props) => {
    return (
        <div className='w-full flex gap-[16px] pb-5 border-b border-white/10'>
            <div className='w-[74px] h-[74px] bg-[#474747] rounded-md'/>
            <div className='flex-1 flex flex-col gap-1'>
                <span className='font-bold text-[24px]'>Title</span>
                <span>Lorem ipsum dolor sit</span>
                <span className='text-[12px]'>10000 items · 5337 collectors</span>
                {!widthoutInfo && (
                    <div className='flex items-center gap-2 text-[12px] text-[#AFAFAF] font-medium'>
                        <span>Type</span>
                        <span>Ecosystem</span>
                    </div>
                )}
            </div>
        </div>
        )
}