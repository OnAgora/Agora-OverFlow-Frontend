import TitleBar from 'components/TitleBar'
import Category from 'components/Category';
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import useApi from 'hooks/useApi';
import { useEffect, useState } from 'react';

export default function Explore() {
    const { data, mutate } = useApi('/api/users/getAllCategories');
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setCategories(data?.categories)
    }, [data])
    
    
    return (
        <div>
            <div className='flex flex-wrap h-[25rem] pl-[15rem] bg-[#ffffee] items-center'>
                <TitleBar caption='Explore by category' title='Browse All Categories.' />
            </div>
            {categories?.length === 0 && 
            <div className='text-center py-[1rem]'>
                We have no categories yet...
            </div>}
            {categories?.length > 0 && <div className='grid grid-cols-3 gap-3 mx-[10rem] mt-[-5rem]'>
                {
                    categories?.map((category, key) => (
                        <Category {...category} key={key} />
                    ))
                }
            </div>}
            <button className='border-none font-bold mx-[10rem] my-[5rem] text-[#0f0e36]'>
                Load More
                <ArrowRightLineIcon />
            </button>
        </div>
    )
}