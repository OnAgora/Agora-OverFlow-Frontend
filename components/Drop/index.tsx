import cn from 'classnames';
import Link from 'next/link';
import { Button } from 'rsuite';

export default function Drop({ image, title, author, launchDate, category, className = '' }) {
    return (
        <div className={cn('px-[0.833rem] py-[1.375rem] flex flex-col border bg-white relative', className)}>
            <span className='text-[0.75rem] font-bold'>{title}</span>
            <span className='text-[0.667rem] text-[#777684]'>{author}</span>
            <span className='flex items-center h-[1.4rem] bg-[#f3008c] text-white px-[0.6rem] absolute right-[-0.2rem]'>{category}</span>
            <img src={image} className='mt-[0.5rem] w-[14.167rem] h-[14.167rem] object-cover' />
            <div className='mt-[1.458rem] flex justify-between'>
                <div className='flex flex-col'>
                    <span className='font-bold'>20h 30m 08s</span>
                    <span className='text-[#777684] text-[0.667rem]'>{launchDate.toLocaleString('en-US', { timeZone: 'UTC' })}</span>
                </div>
                <Button
                    appearance="ghost" className='rounded-full h-[2rem] border-[#777684] border-1 text-[#777684] font-bold text-[0.667rem] flex items-center'
                >
                    <Link href={'/upcomings/' + title}>More Info</Link>
                </Button>  
            </div>
        </div>
    )
}