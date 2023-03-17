import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import Link from 'next/link';
import Category from 'components/Category';
import useApi from 'hooks/useApi';
import { useEffect, useState } from 'react';

export default function Categories() {
    const [categories, setCategories] = useState([])
    
    const { data: categoryData } = useApi('/api/users/getAllCategories')

    useEffect(() => {
        if (!categoryData || categoryData?.isError) return;
        setCategories(categoryData?.categories);
    }, [categoryData])
    
    return (
        <div className='flex flex-col px-[10rem] py-[5rem] items-center'>
            <span className='text-[#0f0e36] opacity-25'>Explore by category</span>
            <h2 className='text-[2.8rem]'>
                Browse Categories.
            </h2>
            <div className='flex mt-[2rem] space-x-[1.5rem]'>
                {
                    categories.map((category, key) => (
                        <Category {...category} key={key} />
                    ))
                }
            </div>
            <button className='border-none font-bold mt-[2rem]'>
                <Link href={'/explore'}>All Collectibles</Link>
                <ArrowRightLineIcon />
            </button>
        </div>
    )
}