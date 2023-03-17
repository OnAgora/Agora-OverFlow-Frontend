import React, { useEffect, useState } from 'react'
import TitleBar from 'components/TitleBar'

import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import Creator from 'components/Creator';
import Filter from 'components/Filter';
import useApi from 'hooks/useApi';


function Creators() {

    const [filters, setFilters] = useState(['All'])
    const [filter, setFilter] = useState('All')

    const [creators, setCreators] = useState([])

    const { data: creatorsData } = useApi('/api/users/getCreatorsForType', { creatorTypeName: filter });
    const { data: creatorTypesData } = useApi('/api/users/getCreatorsTypes');

    useEffect(() => {
        if (creatorTypesData?.isError)  return;
        const t = creatorTypesData?.creatorTypes;
        if (!t) return;
        if (t[0] !== 'All')  t.unshift('All')
        setFilters(t);
    }, [creatorTypesData])

    useEffect(() => {
        if (creatorsData?.isError) return;
        setCreators(creatorsData?.creators)
    }, [creatorsData])

    return (
        <div>
            <div className='flex flex-wrap h-[25rem] pl-[15rem] bg-[#f0f3ff] items-center'>
                <TitleBar caption='Meet the creators' title='Explore All Creators.' />
            </div>
            <div className='flex flex-col mx-[10rem] mt-[-5rem] space-y-4'>
                <Filter filters={filters} onChange={setFilter} />
                <div className='grid grid-cols-3 gap-3'>
                    {
                        creators?.map((creator, key) => (
                            <Creator {...creator} key={key} />
                        ))
                    }
                </div>
            </div>
            <button className='border-none font-bold mx-[10rem] my-[5rem] text-[#0f0e36]'>
                Load More
                <ArrowRightLineIcon />
            </button>
        </div>
    )
}

export default Creators