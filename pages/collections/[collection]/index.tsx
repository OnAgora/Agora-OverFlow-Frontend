import TitleBar from "components/TitleBar";
import GhostButton from "components/Buttons/GhostButton";
import Input from "components/Input";
import NFT from "components/NFT";
import FallbackImage from "components/FallbackImage";

import ShareOutlineIcon from '@rsuite/icons/ShareOutline';
import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine';
import SearchIcon from '@rsuite/icons/Search';
import { Checkbox, Panel, PanelGroup, Placeholder, SelectPicker } from 'rsuite';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"
import Link from "next/link";
import useApi from "hooks/useApi";
import { CollectionInfoWithCreatorNFTs } from "utils/types";

export default function Collection() {
    const router = useRouter();
    const { collection } = router.query;

    const [data, setData] = useState<CollectionInfoWithCreatorNFTs>()
    const { data: collectionData } = useApi('/api/users/getNFTsForCollection', { collectionName: collection })

    useEffect(() => {
        if (!collectionData || collectionData?.isError) return;
        setData(collectionData?.collection)
    }, [collectionData])
    
    return (
        <div className='flex flex-col pb-[5rem]'>
            <FallbackImage
                src={data?.bannerUrl}
                className='flex flex-wrap h-[25rem] pl-[15rem] bg-cover bg-center items-center'
            />
            {/* <div
                className='flex flex-wrap h-[25rem] pl-[15rem] bg-cover bg-center items-center'
                style={{backgroundImage: data?.bannerUrl}}
            /> */}
            <div className='flex mx-[10rem] relative'>
                <FallbackImage src={data?.avatarUrl} className='absolute top-[-6rem] w-[7rem] h-[7rem] p-[0.625rem] bg-white' />
                <div className='flex mt-5 justify-between w-full'>
                    <div className='flex flex-col text-[0.8rem] space-y-2'>
                        <TitleBar caption={"By " + data?.creator?.handleName} title={data?.name} />
                        <span className="text-[1rem]">{data?.description}</span>
                        <a><b>See more <ArrowDownLineIcon/></b></a>
                    </div>
                    <div className='flex-col'>
                        <div className='flex space-x-[0.5rem] justify-end'>
                            {
                                links.map((each, key) => (
                                    <GhostButton key={key} className='w-[2rem] h-[2rem] !p-0 justify-center' >
                                        <img src={each.image} className='w-[0.8rem]' />
                                    </GhostButton>
                                ))
                            }
                            <GhostButton className='h-[2rem]'>
                                <ShareOutlineIcon/>
                                Share
                            </GhostButton>
                        </div>
                        <div className='flex justify-end space-x-[1.5rem] mt-[2rem]'>
                            {
                                infos.map((each, key) => (
                                    <div key={key} className='flex flex-col items-end'>
                                        <span className='font-bold text-[1rem]'>{Intl.NumberFormat('en', { notation: 'compact' }).format(each.value)}</span>
                                        <span className='text-[0.8rem]'>{each.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex mx-[10rem] justify-end pt-[3rem] pb-[2rem]'>
                <Input placeholder='Search by name or attribute' className='!w-[24rem]'>
                    <SearchIcon />
                </Input>
                <SelectPicker data={sort_order} className='w-[11rem] ml-2' placeholder='Price Low to High' cleanable={false} searchable={false} />
            </div>
            <div className='flex mx-[10rem]'>
                <SidePanel />
                <NftList nfts={data?.NFTs} />
            </div>
        </div>
    )
}

function SidePanel() {
    return (
        <div className='min-w-[15rem] flex flex-col'>
            <hr className='mr-[20px]'/>
            <PanelGroup accordion>
                <Panel header="Status" defaultExpanded>
                    <div className='flex flex-col text-xs'>
                        <div className='w-full flex justify-between items-center'>
                            Buy Now
                            <Checkbox />
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            On Auction
                            <Checkbox />
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            Buy with Card
                            <Checkbox />
                        </div>
                    </div>
                </Panel>
                <Panel header="Price">
                    <Placeholder.Paragraph />
                </Panel>
                <Panel header="Quantity">
                    <Placeholder.Paragraph />
                </Panel>
                <Panel header="Currency">
                    <Placeholder.Paragraph />
                </Panel>
                <Panel header="Background">
                    <Placeholder.Paragraph />
                </Panel>
            </PanelGroup>
        </div>
    )
}

function NftList({nfts = []}) {
    return (
        <div className='flex flex-wrap'>
            {
                nfts.map((nft, i) => (
                    <Link key={i} className='mb-4 px-2 w-1/3' href={`/collections/collection/${nft.id}`}>
                        <NFT {...nft} />
                    </Link>
                ))
            }
        </div>
    )
}

const links = [
    {
        title: 'etherscan',
        href: 'https://etherscan.com/',
        image: '/images/icons/etherscan.webp'
    },
    {
        title: 'global',
        href: 'https://etherscan.com/',
        image: '/images/icons/global.webp'
    },
    {
        title: 'discord',
        href: 'https://etherscan.com/',
        image: '/images/icons/discord.webp'
    },
    {
        title: 'twitter',
        href: 'https://etherscan.com/',
        image: '/images/icons/twitter.webp'
    },
    {
        title: 'instagram',
        href: 'https://etherscan.com/',
        image: '/images/icons/instagram.webp'
    },
]

const infos = [
    {
        title: 'Items',
        value: 10000
    },
    {
        title: 'Owners',
        value: 5200
    },
    {
        title: 'Floor Price',
        value: 13.55
    },
    {
        title: 'Total Volume',
        value: 141200
    },
]

const sort_order = ['Price Low to High', 'Price High to Low'].map(
    item => ({ label: item, value: item })
);