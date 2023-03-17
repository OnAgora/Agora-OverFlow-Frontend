import React from 'react'
import TitleBar from 'components/TitleBar'

import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import Filter from 'components/Filter';
import Blog from 'components/Blog';
import Featured from 'components/Blog/Featured';


function Blogs() {

    const handleFilterChange = (filter) => {
    }

    return (
        <div>
            <div className='flex flex-wrap h-[25rem] pl-[15rem] bg-[#f0f3ff] items-center'>
                <TitleBar caption='Latest news' title='Blogs.' />
            </div>
            <div className='mx-[10rem] mt-[-5rem] space-y-[2rem]'>
                <Featured {...blogs[0]}/>
                <Filter filters={filters} onChange={handleFilterChange} />
                <div className='grid grid-cols-3 gap-3'>
                    {
                        blogs.slice(1).map((blog, key) => (
                            <Blog {...blog} key={key} />
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
    'Announcement',
    'Guides',
    'Guest',
    'Safety & Security',
    'Spotlights',
];

const blogs = [
    {
        title: 'Featured Blog Post Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel augue vitae consequat. Donec rutrum mauris ac lorem consequat, nec tempor enim pulvinar.',
        avatar: '/images/blogs/featured.webp',
        category: {
            name: 'Announcement',
            color: '#55db2e',
        },
        date: new Date(1670328405000),
    },
    {
        title: 'Another Blog Post Is Displayed Here',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
        avatar: '/images/blogs/1.webp',
        category: {
            name: 'Guide',
            color: '#00ffff',
        },
        date: new Date(1670328405000),
    },
    {
        title: 'Lorem Ipsum Dolor Sit Amet, Consectetur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
        avatar: '/images/blogs/2.webp',
        category: {
            name: 'Announcement',
            color: '#55db2e',
        },
        date: new Date(1670328405000),
    },
    {
        title: 'Lorem Ipsum Dolor Sit Amet, Consectetur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
        avatar: '/images/blogs/3.webp',
        category: {
            name: 'Spotlight',
            color: '#fffe52',
        },
        date: new Date(1670328405000),
    },
    {
        title: 'Lorem Ipsum Dolor Sit Amet, Consectetur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
        avatar: '/images/blogs/4.webp',
        category: {
            name: 'Safety & Security',
            color: '#e500c6',
        },
        date: new Date(1670328405000),
    },
    {
        title: 'Lorem Ipsum Dolor Sit Amet, Consectetur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
        avatar: '/images/blogs/5.webp',
        category: {
            name: 'Guest',
            color: '#6680ff',
        },
        date: new Date(1670328405000),
    },
    {
        title: 'Lorem Ipsum Dolor Sit Amet, Consectetur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
        avatar: '/images/blogs/6.webp',
        category: {
            name: 'Safety & Security',
            color: '#e500c6',
        },
        date: new Date(1670328405000),
    },
    {
        title: 'Lorem Ipsum Dolor Sit Amet, Consectetur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
        avatar: '/images/blogs/7.webp',
        category: {
            name: 'Guest',
            color: '#6680ff',
        },
        date: new Date(1670328405000),
    },
    {
        title: 'Lorem Ipsum Dolor Sit Amet, Consectetur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
        avatar: '/images/blogs/8.webp',
        category: {
            name: 'Spotlight',
            color: '#fffe52',
        },
        date: new Date(1670328405000),
    },
]

export default Blogs