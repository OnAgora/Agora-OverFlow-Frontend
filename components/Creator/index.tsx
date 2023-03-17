import cn from 'classnames';
import Link from 'next/link';
import { Button } from 'rsuite';
import FallbackImage from 'components/FallbackImage';

export default function Creator({ name, handleName, creatorType, avatarUrl, earning = 100, NFTs = [], className = '' }) {
    return (
        <div className={cn('px-[0.833rem] py-[1.375rem] flex flex-col border bg-white relative', className)}>
            <div className='flex'>
                <FallbackImage src={avatarUrl} className={cn('w-[3rem] h-[2rem] mr-[0.75rem] object-cover rounded-full')} />
                <div className='item-start flex flex-col'>
                    <span className='font-bold text-[0.75rem]'>{name}</span>
                    <span className='text-[#777684] text-[0.667rem]'>{creatorType}</span>
                </div>
            </div>
            <div className='flex mt-[0.75rem] w-full'>
                <FallbackImage src={NFTs[0]?.image} className='w-[70%] h-[13.333rem] object-cover	'/>
                <div className='flex flex-col justify-between ml-[0.625rem] w-[30%]'>
                    <FallbackImage src={NFTs[1]?.image} className='h-[4.167rem] object-cover' />
                    <FallbackImage src={NFTs[2]?.image} className='h-[4.167rem] object-cover' />
                    <div className='text-center relative px-4 py-2 bg-gray-500 opacity-50'>
                        <FallbackImage src={NFTs[3]?.image} className='h-[4.167rem] object-cover' />
                        <span className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            +{NFTs.length > 4 ? NFTs.length - 4 : 0}
                        </span>
                    </div>
                </div>
            </div>
            <div className='mt-[1.458rem] flex justify-between'>
                <div className='flex flex-col'>
                    <span className='font-bold'>${Intl.NumberFormat('en', { notation: 'compact' }).format(earning)}</span>
                    <span className='text-[#777684] text-[0.667rem]'>Sales</span>
                </div>
                <Button appearance="ghost" className='rounded-full h-[2rem] border-[#777684] border-1 text-[#777684] font-bold text-[0.667rem] flex items-center'>
                    <Link href={'/creators/' + handleName}>View Profile</Link>
                </Button>   
            </div>
        </div>
    )
}