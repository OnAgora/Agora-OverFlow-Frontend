import React, { useEffect, useState } from 'react'
import TitleBar from 'components/TitleBar'
import Collection from 'components/Collection';
import Filter from 'components/Filter';
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import useApi from 'hooks/useApi';

export default function Collections() {

    const [filters, setFilters] = useState([])
    const [filter, setFilter] = useState('All')
    const [collections, setCollections] = useState([])

    const { data: categoryData } = useApi('/api/users/getAllCategories')
    const { data: collectionData } = useApi('/api/users/getCollectionsForCategory', { categoryName: filter })

    useEffect(() => {
        const t = categoryData?.categories?.map(category => category.name) || [];
        t.unshift('All')
        setFilters(t)
    }, [categoryData])

    useEffect(() => {
        setCollections(collectionData?.collections?.slice(0, 5));        
    }, [collectionData])
    
    return (
        <div>
            <div className='flex flex-wrap h-[25rem] pl-[15rem] bg-[#EFFCEB] items-center'>
                <TitleBar caption='Browse all collections' title='Explore All Collections.' />
            </div>
            <div className='flex-col space-y-4'>
                <div className='flex mx-[10rem] mt-[-5rem]'>
                    <Filter filters={filters} onChange={setFilter} />
                </div>
                {collections?.length === 0 && 
                <div className='text-center py-[1rem]'>
                    We have no collections yet...
                </div>}
                {collections?.length > 0 && <div className='grid grid-cols-3 gap-3 mx-[10rem]'>
                    {
                        collections?.map((collection, key) => (  
                            <Collection {...collection} key={key} />
                        ))
                    }
                </div>}
            </div>
            <button className='border-none font-bold mx-[10rem] my-[5rem] text-[#0f0e36]'>
                Load More
                <ArrowRightLineIcon />
            </button>
        </div>
    )
}