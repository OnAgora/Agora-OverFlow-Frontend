/**
 * Used only for the Home page
 */

import Collection from "components/Collection"
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import useApi from "hooks/useApi"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Collections() {

    const [collections, setCollections] = useState([])

    const { data: collectionData } = useApi('/api/users/getCollectionsForCategory', { categoryName: 'All' })

    useEffect(() => {
        if (!collectionData || collectionData?.isError) return;
        setCollections(collectionData?.collections?.slice(0, 4));
    }, [collectionData])

    return (
        <div className='flex flex-col px-[10rem] py-[5rem]'>
            <div className='flex justify-between mx-[0.625rem]'>
                <div className="flex-col justify-start">
                    <span className='text-[#0f0e36] opacity-25'>Top trending</span>
                    <h2 className='text-[2rem] font-bold'>Collections</h2>
                    <span className='text-[#777684] text-[0.667rem]'>Enjoy! the latest hot collections</span>
                </div>
                <button className='flex justify-end align-middle border-none font-bold mt-[2rem]'>
                    <Link href={'/collections'}>View collections</Link>
                    <ArrowRightLineIcon />
                </button>
            </div>
            <div className='flex-wrap flex space-x-4'>
            {
                collections.map((collection, key) => (
                    <Collection {...collection} key={key} className='mt-[1.125rem]'/>
                ))
            }
            </div>
        </div>
    )
}