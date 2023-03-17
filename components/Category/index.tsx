import cn from 'classnames';
import Link from 'next/link';
import { Button, Content } from 'rsuite';
import FallbackImage from 'components/FallbackImage';

export default function Category({ name, color, imageUrl, className = '' }) {
    return (
        <div className={cn('px-[0.833rem] py-[1.375rem] flex flex-col border bg-white relative items-center space-y-[1rem]', className)}>
            <FallbackImage src={imageUrl} className='mt-[0.5rem] w-[14.167rem] h-[14.167rem] object-cover' />
            <span className='h-[1.4rem] flex items-center text-white px-[0.6rem] absolute right-[-0.2rem]'
                style={{backgroundColor: color}}
            >
                {name}
            </span>
            <span className='text-[1rem] font-bold'>{name} Collectibles</span>
            <Button appearance="ghost" className='flex items-center rounded-full h-[2rem] border-[#ebeaef] text-[#777684] font-bold'>
                <Link href={'/explore/' + name}>
                    <b>Browse {name}</b>
                </Link>
            </Button>   
        </div>
    )
}