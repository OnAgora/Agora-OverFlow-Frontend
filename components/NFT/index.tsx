import cn from 'classnames';
import { Button } from 'rsuite';
import FallbackImage from '../FallbackImage';

export default function NFT({ image, name, creatorHandleName, price, price_usd, className = '' }) {
    return (
        <div className={cn('px-[0.833rem] py-[1.375rem] flex flex-col border bg-white relative', className)}>
            <span className='text-[0.75rem] font-bold'>{name}</span>
            <span className='text-[0.667rem] text-[#777684]'>@{creatorHandleName}</span>
            <FallbackImage src={image} className='mt-[0.5rem] w-full' />
            <div className='mt-[1.458rem] flex justify-between'>
                <div className='flex flex-col'>
                    <span className='font-bold'>{price} ETH</span>
                    <span className='text-[#777684] text-[0.667rem]'>$ {price_usd = 0}</span>
                </div>
                <Button appearance="ghost" className='rounded-full h-[2rem] !border-black border-1 text-[#777684] font-bold text-[0.667rem] flex items-center'>
                    Buy Now
                </Button>
            </div>
        </div>
    )
}