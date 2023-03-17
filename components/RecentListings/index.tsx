import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import RecentListing from 'components/RecentListing';

export default function RecentListings() {
    return (
        <div className='bg-[#f0f4ff] flex flex-col px-[10rem] py-[5rem] items-start'>
            <span className='text-[#0f0e36] opacity-25'>Digital arts for sale</span>
            <h2 className='text-[2.8rem]'>
                Recently Listed.
            </h2>
            <div className='flex mt-[2rem] space-x-[1.5rem]'>
                {
                    recentLists.map((recentList, key) => (
                        <RecentListing {...recentList} key={key} />
                    ))
                }
            </div>
            <button className='border-none font-bold mt-[2rem]'>
                Discover Artwork
                <ArrowRightLineIcon />
            </button>
        </div>
    )
}

const recentLists = [
    {
        author: 'Doodles',
        category: 'Art',
        image: '/images/recent/rl-1.webp',
        title: 'Doodle #8923',
        price: 5624
    },
    {
        author: 'Rumble Kong League',
        category: 'Sport',
        image: '/images/recent/rl-2.webp',
        title: 'Kong #37821',
        price: 22582
    },
    {
        author: 'Mark Rise',
        category: 'Art',
        image: '/images/recent/rl-3.webp',
        title: 'Day 84',
        price: 2327
    },
]