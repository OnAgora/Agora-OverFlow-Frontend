import cn from 'classnames';
import Link from 'next/link';
import { Button } from 'rsuite';

export default function Blog({ title, description, avatar, category: {name, color}, date, className = '' }) {
    return (
        <div className={cn('px-[0.833rem] py-[1.375rem] flex flex-col border bg-white relative space-y-1', className)}>
            <img src={avatar} className='mt-[0.5rem] w-[14.167rem] h-[14.167rem] object-cover' />
            <span className='h-[1.4rem] flex items-center text-white px-[0.6rem] absolute right-[-0.2rem]'
                style={{backgroundColor: color}}
            >
                {name}
            </span>
            <span className='text-[0.667rem] text-[#0f0e36]'>{date.toLocaleString('en-US', { timeZone: 'UTC' })}</span>
            <span className='text-[1rem] font-bold'>{title}</span>
            <span className='text-[0.667rem]'>{description}</span>
            <Button appearance="ghost" className='flex w-min rounded-full h-[2rem] !border-black border-2 text-[#777684] text-[0.667rem] items-center'>
                <Link href={'/blog/' + title}>
                    <b>View Post</b>
                </Link>
            </Button>   
        </div>
    )
}