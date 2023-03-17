import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';


export default function Banner() {
    return (
        <div className='bg-[#fbe6ff] flex px-[10rem] py-[2.5rem]'>
            <div className='w-1/2 pr-[2rem] flex flex-col justify-center items-start'>
                <div className='text-[#f1ddf7]'>
                    Where desires are transactional
                </div>
                <div className='text-[2.8rem]'>
                    Discover <b>Rare Collections</b> Of <b>Digital Art.</b>
                </div>
                <div className='mt-[1.25rem] text-[0.7rem]'>
                    Lorem <b>ipsum dolor</b> sit amet, consectetur adipiscing elit. Praesent condimentum magna justo, in sagittis eros <b>tempor vitae</b>.
                </div>
                <button className='border-none font-bold mt-[2rem]'>
                    Discover Artwork
                    <ArrowRightLineIcon />
                </button>
            </div>
            <div className='w-1/2'>
                <img src='/images/banner.webp' className='w-[22.5rem] h-[28.2rem]'/>
            </div>
        </div>
    )
}