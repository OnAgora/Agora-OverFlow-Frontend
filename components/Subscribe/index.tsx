import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';

export default function Subscribe() {
    return (
        <div>
            <div className='bg-[#effceb] h-[20rem] flex'>
                <div className='flex flex-col pl-[10rem] pr-[2rem] w-1/2 justify-center'>
                    <span className='text-[#0f0e36] opacity-25'>Newsletter subscription</span>
                    <h2 className='text-[2rem] font-bold'>Stay in the loop.</h2>
                    <span className='text-[#777684] text-[0.667rem]'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Nporium.</span>
                </div>
                <div className='flex items-center pr-[10rem] w-1/2'>
                    <input className='bg-transparent h-[1.5rem] outline-none border-b flex-grow' placeholder='Enter your email' />
                    <button className='border-none font-bold ml-4'>
                        Subscribe
                        <ArrowRightLineIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}