interface Props {
    text: string;
}

export const BaseTitle = ({ text }: Props) => {
    return (
        <span className='text-[18px] font-bold md:text-[32px]'>
            {text}
        </span>
    )
}