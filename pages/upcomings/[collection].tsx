import { useRouter } from "next/router"
import { useState } from "react";
import GhostButton from "components/Buttons/GhostButton";
import TitleBar from "components/TitleBar";
import Navbar from "components/Navbar";
import ShareOutlineIcon from '@rsuite/icons/ShareOutline';
import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine';
import Timeline from "../../components/Timeline";

function Collections() {
    const router = useRouter();
    const { collection } = router.query;
    const [active, setActive] = useState(menuItems[0].link);
    
    return (
        <div className="flex flex-col space-y-5">
            {/* banner bar */}
            <div className='flex flex-wrap pl-[10rem] h-[25rem] bg-[#140446] bg-[url(/images/upcoming/banner.webp)] bg-contain bg-no-repeat bg-right items-center'>
                <div className="flex flex-col space-y-3 w-[20rem]">
                    <span className='text-[#ffffff] text-[1.167rem] opacity-25'>Launching August 22</span>
                    <h2 className='text-[#ffffff] text-[2.5rem] font-bold'>Nifty Cats<br />by Alex Echo.</h2>
                    <span className='text-[#ffffff]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel augue vitae consequat. Donec rutrum mauris ac lorem consequat, nec tempor enim pulvinar.</span>
                    <h2 className='text-[#ffffff] font-bold'>10d 20h 40m</h2>
                </div>
            </div>
            {/* details bar */}
            <div className='flex mx-[10rem] relative'>
                <div className='flex mt-5 justify-between w-full'>
                    <div className='flex flex-col text-[0.8rem] space-y-3'>
                        <TitleBar caption='Collection' title={collection} />
                        <span>
                        The NiftyCats living in the Metaverse are coming! Meet your own cute and unique Cat from 3,000 kinds of NiftyCats created from…
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
                                Share
                            </GhostButton>
                        </div>
                        <div className='flex justify-end space-x-[1.5rem] mt-[2rem]'>
                            {
                                infos.map((each, key) => (
                                    <div key={key} className='flex flex-col items-end'>
                                        <span className='font-bold text-[1rem]'>{each.value}</span>
                                        <span className='text-[0.8rem]'>{each.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* menu bar */}
            <div className='items-start pl-[10rem] pt-[2rem]'>
                <Navbar appearance="subtle" active={active} onSelect={setActive} items={menuItems} />
            </div>
            {/* about */}
            <div id='about' className='flex px-[10rem] py-[2.5rem] h-[20rem]'>
                <div className='w-1/2 pr-[2rem] flex flex-col justify-center items-start'>
                    <div className='text-[#0f0e36] opacity-[0.25]'>Nifty Cats</div>
                    <div className='text-[2rem] text-[#0f0e36] font-bold'>About.</div>
                    <div className='text-[0.7rem] text-[#777684]'>
                        The NiftyCats living in the Metaverse are coming! Meet your own cute and unique Cat from 3,000 kinds of NiftyCats created from a combination of individual elements.<br/>
                        <br/>+ Exclusive ownership<br/>
                        <br/>+ Opportunity to mint 1 of 30 legendary Nifty Cats<br/>
                        <br/>+ Membership to participate in various events<br/>
                        <br/>+ Whitelist access to future collections<br/>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src='/images/upcoming/about.webp' className='w-[20rem] h-[17rem] object-cover'/>
                </div>
            </div>
            {/* artwork */}
            <div id='artwork' className='flex flex-col h-[20rem] items-center bg-[#f0f3ff] p-[2rem]'>
                <div className='text-[#0f0e36] opacity-[0.25]'>Collection examples</div>
                <div className='text-[2rem] text-[#0f0e36] font-bold'>Artwork.</div>
                <img src='/images/upcoming/about.webp' className='w-[50rem] h-[12rem] object-cover'/>
            </div>
            {/* roadmap */}
            <Timeline data={roadmap} align='alternate' className='px-[10rem] py-[2.5rem]' />
        </div>
    )
}

const nfts = [
]

const roadmap = [
    {
        image: '/images/upcoming/roadmap/1.webp',
        percentage: 0,
        title: 'Nifty Cat Minting',
        description: 'Minting for 3,000 Nifty Cats (326 for the team).',
    },
]

const menuItems = [
    {
        title: 'About',
        link: '#about',
    },
    {
        title: 'Artwork',
        link: '#artwork',
    },
    {
        title: 'Roadmap',
        link: '#roadmap',
    },
    {
        title: 'Video',
        link: '#video',
    },
    {
        title: 'FAQs',
        link: '#faqs',
    },
    {
        title: 'Artist',
        link: '#artist',
    },
    {
        title: 'Collections',
        link: '#collections',
    },
]

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
        value: '3.0k'
    },
    {
        title: 'Mint Price',
        value: '0.1 ETH'
    },
    {
        title: 'Launch Date',
        value: '01 Aug 22'
    },
]

export default Collections