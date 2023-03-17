import Creator from "components/Creator"
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import { useEffect, useState } from "react";
import useApi from "hooks/useApi";
import Link from "next/link";

export default function Creators() {
    const [creators, setCreators] = useState([])

    const { data: creatorsData } = useApi('/api/users/getCreatorsForType', { creatorTypeName: 'All' });

    useEffect(() => {
        if (!creatorsData || creatorsData?.isError) return;
        setCreators(creatorsData?.creators)
    }, [creatorsData])

    return (
        <div className='flex flex-col px-[10rem] py-[5rem]'>
            <span className='text-[#0f0e36] opacity-25'>Meet the</span>
            <h2 className='text-[2.8rem]'>
                Creators.
            </h2>
            <div className='flex mt-[2rem] space-x-[1.5rem]'>
                {
                    creators?.map((each, key) => (
                        <Creator {...each} key={key} />
                    ))
                }
            </div>
            <button className='border-none font-bold mt-[2rem]'>
                <Link href={'/creators'}>All Creators</Link>
                <ArrowRightLineIcon />
            </button>
        </div>
    )
}