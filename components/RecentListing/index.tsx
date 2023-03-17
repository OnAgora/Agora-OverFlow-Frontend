import cn from 'classnames';
import { Button } from 'rsuite';

export default function RecentListing({ image, title, author, price, category, className = '' }) {
    return (
        <div className={cn('px-[0.833rem] py-[1.375rem] flex flex-col border bg-white relative', className)}>
            <span className='text-[0.75rem] font-bold'>{title}</span>
            <span className='text-[0.667rem] text-[#777684]'>@{author}</span>
            <span className='flex items-center h-[1.4rem] bg-[#f3008c] text-white px-[0.6rem] absolute right-[-0.2rem]'>{category}</span>
            <img src={image} className='mt-[0.5rem] w-[14.167rem] h-[14.167rem] object-cover' />
            <div className='mt-[1.458rem] flex justify-between'>
                <div className='flex flex-col'>
                    <span className='font-bold'>{price} FUSD</span>
                    <span className='text-[#777684] text-[0.667rem]'>${price.toFixed(3)}</span>
                </div>
                <Button appearance="ghost" className='rounded-full h-[2rem] border-[#ebeaef] text-[#777684] font-bold'>Buy Now</Button>   
            </div>
        </div>
    )
}