import { useRouter } from "next/router"
import TitleBar from "components/TitleBar";
import GhostButton from "components/Buttons/GhostButton";
import ShareOutlineIcon from '@rsuite/icons/ShareOutline';
import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine';
import SearchIcon from '@rsuite/icons/Search';
import Input from "components/Input";
import { Checkbox, Nav, Navbar, Panel, PanelGroup, Placeholder, SelectPicker } from 'rsuite';
import React, { useState } from "react";
import NavDropdown from "rsuite/esm/Nav/NavDropdown";
import NFT from "components/NFT";
import Link from "next/link";

const username = 'johndoe99';
const fullname = 'John Doe';
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem dolor, mollis eu leo eu, vulputate consectetur odio…';

export default function Account() {
    const router = useRouter();
    const [tab, setTab] = useState('/featured');
    
    return (
        <div className='flex flex-col pb-[5rem]'>
            <div className='flex flex-wrap h-[25rem] pl-[15rem] bg-[url(/images/collections/banner.webp)] bg-cover bg-center items-center'>
            </div>
            <div className='flex mx-[10rem] relative'>
                <img src='/images/collections/c-1-1.webp' className='absolute top-[-6rem] w-[7rem] h-[7rem] p-[0.625rem] bg-white' />
                <div className='flex mt-5 justify-between w-full'>
                    <div className='flex flex-col text-[0.8rem]'>
                        <TitleBar caption={username} title={fullname} />
                        <span className='w-2/3'>
                            {description}
                        </span>
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
                                <span className='text-sm'>Share</span>
                            </GhostButton>
                            <GhostButton className='h-[2rem]'>
                                <span className='text-sm'>Edit Profile</span>
                            </GhostButton>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex mx-[10rem] border-b mt-[2rem]'>
                <TabBar activeKey={tab} onSelect={setTab}/>
            </div>
            <div className='flex mx-[10rem] justify-end pt-[2rem] pb-[2rem]'>
                <Input placeholder='Search by name or attribute' className='!w-[24rem] text-sm'>
                    <SearchIcon />
                </Input>
                <SelectPicker data={data} className='w-[11rem] ml-2 text-sm' placeholder='Price Low to High' cleanable={false} searchable={false} />
            </div>
            <div className='flex mx-[10rem]'>
                <SidePanel />
                <NftList />
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

function NftList() {
    return (
        <div className='flex flex-wrap'>
            {
                nfts.map((nft, i) => (
                    <Link key={i} className='mb-4 px-2 w-1/3' href={`/collections/collection/${nft.id}`}>
                        {/* <NFT {...nft} /> */}
                    </Link>
                ))
            }
        </div>
    )
}


const TabBar = ({ onSelect, activeKey, ...props }) => {
    return (
      <Navbar {...props} className='bg-transparent text-sm'>
        <Nav onSelect={onSelect} activeKey={activeKey}>
            {
                tabs.map((tab, key) => (
                    tab.children ?
                    <Nav.Menu title={tab.title} key={key}>
                        {
                            tab.children.map((sub, key) => (
                                <Nav.Item eventKey={tab.href} key={key}>{sub.title}</Nav.Item>
                            ))
                        }
                    </Nav.Menu> :
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

const data = ['Price Low to High', 'Price High to Low'].map(
    item => ({ label: item, value: item })
  );

const nfts = [
    {
        id: 6365,
        title: 'Doodle #6365',
        author: '@Doodles',
        price: 13.55,
        price_usd: 15360.55,
        image: '/images/nfts/1.webp'   
    },
    {
        id: 6365,
        title: 'Doodle #6365',
        author: '@Doodles',
        price: 13.55,
        price_usd: 15360.55,
        image: '/images/nfts/2.webp'   
    },
    {
        id: 6365,
        title: 'Doodle #6365',
        author: '@Doodles',
        price: 13.55,
        price_usd: 15360.55,
        image: '/images/nfts/3.webp'   
    },
    {
        id: 6365,
        title: 'Doodle #6365',
        author: '@Doodles',
        price: 13.55,
        price_usd: 15360.55,
        image: '/images/nfts/4.webp'   
    },
    {
        id: 6365,
        title: 'Doodle #6365',
        author: '@Doodles',
        price: 13.55,
        price_usd: 15360.55,
        image: '/images/nfts/5.webp'   
    },
    {
        id: 6365,
        title: 'Doodle #6365',
        author: '@Doodles',
        price: 13.55,
        price_usd: 15360.55,
        image: '/images/nfts/1.webp'   
    },
    {
        id: 6365,
        title: 'Doodle #6365',
        author: '@Doodles',
        price: 13.55,
        price_usd: 15360.55,
        image: '/images/nfts/1.webp'   
    },
    {
        id: 6365,
        title: 'Doodle #6365',
        author: '@Doodles',
        price: 13.55,
        price_usd: 15360.55,
        image: '/images/nfts/3.webp'   
    },
    {
        id: 6365,
        title: 'Doodle #6365',
        author: '@Doodles',
        price: 13.55,
        price_usd: 15360.55,
        image: '/images/nfts/4.webp'   
    },
    {
        id: 6365,
        title: 'Doodle #6365',
        author: '@Doodles',
        price: 13.55,
        price_usd: 15360.55,
        image: '/images/nfts/5.webp'   
    },
    {
        id: 6365,
        title: 'Doodle #6365',
        author: '@Doodles',
        price: 13.55,
        price_usd: 15360.55,
        image: '/images/nfts/1.webp'   
    },
    {
        id: 6365,
        title: 'Doodle #6365',
        author: '@Doodles',
        price: 13.55,
        price_usd: 15360.55,
        image: '/images/nfts/1.webp'   
    },
]

const tabs = [
    {
        title: 'Featured 10',
        href: '/featured'
    },
    {
        title: 'Collected 6',
        href: '/collected'
    },
    {
        title: 'Favorited 22',
        href: '/favorited'
    },
    {
        title: 'Created',
        href: '/created'
    },
    {
        title: 'Activity',
        href: '/activity'
    },
    {
        title: 'More',
        children: [
            {
                title: 'Settings',
                href: '/settings'
            }
        ]
    }
]

