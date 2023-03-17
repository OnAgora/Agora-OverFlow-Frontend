import cn from 'classnames';
import Link from 'next/link';
import { Button } from 'rsuite';
import FallbackImage from 'components/FallbackImage';

export default function Collection({ name, description, avatarUrl: collectionAvatarUrl, creator: {avatarUrl: creatorAvatarUrl, handleName}, category: {name: categoryName, color}, className = '' }) { 
    return (
        <div className={cn('px-[0.833rem] py-[1.375rem] flex flex-col border bg-white relative space-y-[1rem]', className)}>
            <div className='flex mt-[0.75rem]'>
                <FallbackImage src={collectionAvatarUrl} className='h-[13.333rem] w-full object-cover'/>
                <span className={cn(
                        'flex items-center h-[1.5rem] text-white px-[0.6rem] absolute right-[-0.2rem] top-[1rem]',
                        // color ? `!bg-[${color.toLowerCase()}]` : ''
                    )}
                    style={{backgroundColor: color}}
                >
                    {categoryName}
                </span>
            </div>
            <div className='flex'>
                <FallbackImage src={creatorAvatarUrl} className={cn('w-[2rem] h-[2rem] mr-[0.75rem] object-cover')} />
                <div className='flex flex-col items-start'>
                    <span className='text-[0.75rem] !font-bold'>{name}</span>
                    <span className='text-[#777684] text-[0.667rem]'>by {handleName}</span>
                </div>
            </div>
            <span className='text-[#777684] text-[0.667rem]'>{description}</span>
            <Button appearance="ghost" className='flex items-center justify-center w-full rounded-full h-[2rem] border-[#777684] border-1 text-[#777684] font-bold text-[0.667rem]'>
                <Link href={'/collections/' + name}>View Collection</Link>
            </Button>   
        </div>
    )
}