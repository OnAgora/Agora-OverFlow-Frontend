import { useRouter } from "next/router"
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';

import TitleBar from "components/TitleBar";
import Collection from "components/Collection";
import useApi from "hooks/useApi";
import { useEffect, useState } from "react";

function Collectibles() {
    const router = useRouter();
    const { category } = router.query;

    const { data: collectiblesData } = useApi('/api/users/getCollectionsForCategory', { categoryName: category });
    const [collectibles, setCollectibles] = useState([])
    
    useEffect(() => {
        if (collectiblesData?.isError)  return;
        setCollectibles(collectiblesData?.collections);
    }, [collectiblesData]);

    return (
        <div>
            <div className='flex flex-wrap h-[25rem] pl-[15rem] bg-[#FFE6F4] items-center'>
                <TitleBar caption='Explore by category' title='Browse All Collectibles.' />
            </div>
            {collectibles?.length === 0 && 
            <div className='text-center py-[1rem]'>
                You have no collectibles yet...
            </div>}
            <div className='grid grid-cols-3 gap-3 mx-[10rem] mt-[-5rem]'>
                {
                    collectibles?.map((collectible, key) => (
                        <Collection {...collectible} key={key} />
                    ))
                }
            </div>
            <button className='border-none font-bold mx-[10rem] my-[5rem] text-[#0f0e36]'>
                Load More
                <ArrowRightLineIcon />
            </button>
        </div>
    )
}

export default Collectibles