import cn from 'classnames';
import Link from 'next/link';

export default function Collection({ avatarUrl, name, floorPrice, category, className }) {
    return (
        <Link href={'/collections/' + name} className={cn('p-[0.8rem] flex flex-grow border mx-[0.625rem]', className)}>
            <img src={avatarUrl} className='w-[4.167rem] h-[4.167rem] object-cover' />
            <div className='flex flex-col pl-[0.833rem] flex-start flex-grow'>
                <label className='font-bold text-[0.8rem] text-[#0f0e36]'>
                    {name}
                </label>
                <span className='text-[0.667rem] text-[#777684]'>Floor price: {floorPrice} ETH</span>
                <div className='mt-auto justify-between flex items-end'>
                    <span className='flex items-center h-[1.4rem] bg-[#f3008c] text-white px-[0.4rem] w-min'>{category}</span>
                    <span className='text-[#fc4575] text-[0.667rem]'>-18.72%</span>
                </div>
            </div>
        </Link>
    )
}