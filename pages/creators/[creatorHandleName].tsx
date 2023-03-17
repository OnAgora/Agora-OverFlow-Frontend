import React, { forwardRef, useEffect, useState } from "react";
import { useRouter } from "next/router"

import TitleBar from "components/TitleBar";
import GhostButton from "components/Buttons/GhostButton";
import Collection from "components/Collection";
import FallbackImage from "components/FallbackImage";

import useApi from "hooks/useApi";

import ShareOutlineIcon from '@rsuite/icons/ShareOutline';
import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine';
import { Nav, Navbar } from 'rsuite';
import { Icon } from '@rsuite/icons';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CollectionInfoWithCreatorCategory, CreatorInfo } from "utils/types";

const HeartSvg = forwardRef<SVGSVGElement>((props, ref) => (
  <svg {...props} width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 1024 1024" ref={ref}>
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
));

export default function Creator() {
    const router = useRouter();
    const { creatorHandleName } = router.query;

    const [tab, setTab] = useState('/collections');
    const [collections, setCollections] = useState< Array<CollectionInfoWithCreatorCategory> >()
    const [creator, setCreator] = useState<CreatorInfo>()

    const { data: collectionsData } = useApi('/api/users/getCollectionsForCreator', { creatorHandleName })

    useEffect(() => {
        if (!collectionsData || collectionsData?.isError)  return;

        const creatorDetails = {...collectionsData?.creator}
        if (!creatorDetails)  return;
        delete creatorDetails.Collections;
        
        setCollections(collectionsData?.creator.Collections?.map((collection) => ({
            ...collection,
            creator: creatorDetails,
        })))

        setCreator(creatorDetails)
    }, [collectionsData])
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    
    return (
        <div className='flex flex-col pb-[5rem]'>
            {/* <div
                className='flex flex-wrap h-[25rem] pl-[15rem] bg-[url(/images/collections/banner.webp)] bg-cover bg-center items-center'
                style={{ background: creator?.bannerUrl}}
            /> */}
            <FallbackImage
                src={creator?.bannerUrl}
                className='flex flex-wrap h-[25rem] pl-[15rem] bg-cover bg-center items-center'
            />
            <div className='flex mx-[10rem] relative'>
                <img src='/images/collections/c-1-1.webp' className='absolute top-[-6rem] w-[7rem] h-[7rem] p-[0.625rem] bg-white' />
                <FallbackImage 
                    src={creator?.avatarUrl} 
                    className='absolute top-[-6rem] w-[7rem] h-[7rem] p-[0.625rem] bg-white'
                />
                <div className='flex mt-5 justify-between w-full'>
                    <div className='flex flex-col text-[0.8rem]'>
                        <TitleBar caption={creator?.creatorType} title={creator?.name} />
                        <span className='w-2/3'>
                            {creator?.description}
                        </span>
                        <a><b>See more <ArrowDownLineIcon/></b></a>
                    </div>
                    <div className='flex-col'>
                        <div className='flex space-x-[0.5rem] justify-end'>
                            {
                                links.map((each, key) => (
                                    <GhostButton key={key} className='w-[2rem] h-[2rem] !p-0 justify-center' >
                                        <FallbackImage src={each.image} className='w-[0.8rem]' />
                                    </GhostButton>
                                ))
                            }
                            <GhostButton className='h-[2rem]'>
                                <ShareOutlineIcon/>
                                <span className='text-sm'>Share</span>
                            </GhostButton>
                            <GhostButton className='h-[2rem]'>
                                <span className='text-sm'>
                                    <Icon as={HeartSvg} style={{ color: 'hotpink' }} /> 362 Favorites
                                </span>
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

            <div className='flex mx-[10rem] border-b mt-[2rem]'>
                <TabBar collectionCount={collections?.length} activeKey={tab} onSelect={setTab}/>
            </div>
            <div className='flex-col mx-[10rem] justify-end pt-[2rem] pb-[2rem] space-y-4'>
                <TitleBar caption={creator?.name} title={'Collections'} />
                {collections?.length > 0 && <Carousel responsive={responsive}>
                    {collections?.map((collection, index) => <Collection key={index} {...collection} className='mx-4' />)}
                </Carousel>}
            </div>
        </div>
    )
}

const TabBar = ({ collectionCount = 0, onSelect, activeKey, ...props }) => {
    const tabs = [
        {
            title: 'Collections ' + collectionCount,
            href: '/collections'
        },
        {
            title: 'Coming Soon',
            href: '/coming-soon'
        },
        {
            title: 'About',
            href: '/about'
        },
        {
            title: 'Created',
            href: '/created'
        },
    ]
    
    return (
      <Navbar {...props} className='bg-transparent text-sm'>
        <Nav onSelect={onSelect} activeKey={activeKey}>
            {
                tabs.map((tab, key) => (
                    <Nav.Item eventKey={tab.href} key={key}>{tab.title}</Nav.Item>          
                ))
            }
        </Nav>
      </Navbar>
    );
};

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
        title: 'Total Sales',
        value: 25200
    },
    {
        title: 'Total Volume',
        value: 21400
    },
]