import React from 'react'
import TitleBar from 'components/TitleBar'

import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import Filter from 'components/Filter';
import Drop from 'components/Drop';


function Upcomings() {

    const handleFilterChange = (filter) => {
    }

    return (
        <div>
            <div className='flex flex-wrap h-[25rem] pl-[15rem] bg-[#f0f3ff] items-center'>
                <TitleBar caption='Coming soon…' title='Discover All Upcoming Drops.' />
            </div>
            <div className='mx-[10rem] mt-[-5rem] space-y-2'>
                <Filter filters={filters} onChange={handleFilterChange} />
                <div className='grid grid-cols-3 gap-3'>
                    {
                        drops.map((drop, key) => (
                            <Drop {...drop} key={key} />
                        ))
                    }
                </div>
            </div>
            <button className='border-none font-bold mx-[10rem] my-[5rem] text-[#0f0e36] mb-[5rem]'>
                Load More
                <ArrowRightLineIcon />
            </button>
        </div>
    )
}

const filters = [
    'August',
    'September',
    'October',
    'November',
    'December',
    "2023",
];

const drops = [
    {
        title: 'Nifty Cats',
        author: 'Alex Echo',
        image: '/images/upcomings/1.webp',
        category: 'Art',
        launchDate: new Date(1670328405000),
    },
    {
        title: 'Bball Buddies',
        author: 'Trailblazers',
        image: '/images/upcomings/2.webp',
        category: 'Art',
        launchDate: new Date(1670328405000),
    },
    {
        title: 'Gooners',
        author: 'ArsenalFC',
        image: '/images/upcomings/3.webp',
        category: 'Sport',
        launchDate: new Date(1670328405000),
    },
    {
        title: 'Great Catch',
        author: 'Fish Friends',
        image: '/images/upcomings/4.webp',
        category: 'For Good',
        launchDate: new Date(1670328405000),
    },
    {
        title: 'New York Minute',
        author: 'Santan Dave',
        image: '/images/upcomings/5.webp',
        category: 'Music',
        launchDate: new Date(1670328405000),
    },
    {
        title: 'Clean Vinyls',
        author: 'LoFi Sounds',
        image: '/images/upcomings/6.webp',
        category: 'Art',
        launchDate: new Date(1670328405000),
    },
]

export default Upcomings