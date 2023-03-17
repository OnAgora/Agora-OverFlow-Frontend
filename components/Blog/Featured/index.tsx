import cn from 'classnames';
import Link from 'next/link';
import { Button } from 'rsuite';

export default function Featured({ title, description, avatar, category: {name, color}, date, className = '' }) {
    return (
        <div className={cn('px-[0.833rem] py-[1.375rem] flex border bg-white relative', className)}>
            <div>
                <img src={avatar} className='w-[50rem] h-[15rem] object-cover' />
            </div>
            <div className='ml-[3rem]'>
                <span className='h-[1.4rem] flex text-white px-[0.6rem] right-[-0.2rem] absolute items-center'
                    style={{backgroundColor: color}}
                >
                    {name}
                </span>
                <div className='flex flex-col mt-[4rem] space-y-3'>
                    <span className='text-[0.667rem] text-[#0f0e36]'>{date.toLocaleString('en-US', { timeZone: 'UTC' })}</span>
                    <span className='text-[1rem] font-bold'>{title}</span>
                    <span className='text-[0.667rem]'>{description}</span>
                    <Button appearance="ghost" className='flex w-min rounded-full h-[2rem] border-2 !border-black text-[#777684] text-[0.667rem] items-center'>
                        <Link href={'/blog/' + title}>
                            <b>View Post</b>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}