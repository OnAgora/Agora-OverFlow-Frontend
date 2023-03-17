import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import Drop from "components/Drop";

export default function Notable() {
    return (
        <div className='bg-[#f0f4ff] flex flex-col px-[10rem] py-[5rem] items-center'>
            <span className='text-[#0f0e36] opacity-25'>Coming soon…</span>
            <h2 className='text-[2.8rem]'>
                Notable Drops.
            </h2>
            <div className='flex mt-[2rem] space-x-[1.5rem]'>
                {
                    drops.map((drop, key) => (
                        <Drop {...drop} key={key} />
                    ))
                }
            </div>
            <button className='border-none font-bold mt-[2rem]'>
                Coming soon
                <ArrowRightLineIcon />
            </button>
        </div>
    )
}

const drops = [
    {
        title: 'Bball Buddies',
        author: '@Trailblazers',
        image: '/images/drops/d-1.webp',
        category: 'Art',
        launchDate: new Date(1670328405000),
    },
    {
        title: 'Bball Buddies',
        author: '@Trailblazers',
        image: '/images/drops/d-2.webp',
        category: 'Art',
        launchDate: new Date(1670328405000),
    },
    {
        title: 'Bball Buddies',
        author: '@Trailblazers',
        image: '/images/drops/d-3.webp',
        category: 'Art',
        launchDate: new Date(1670328405000),
    },
]