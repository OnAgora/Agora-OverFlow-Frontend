import { useRouter } from "next/router"
import React, { useEffect, useState } from "react";

import { Button, Loader, Modal, Panel, PanelGroup, Placeholder } from 'rsuite';
import ReloadIcon from '@rsuite/icons/Reload';
import ShareOutlineIcon from '@rsuite/icons/ShareOutline';
import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine';

import TitleBar from "components/TitleBar";
import GhostButton from "components/Buttons/GhostButton";
import Table from 'components/Table';
import FallbackImage from "components/FallbackImage";
import PaymentCard from "components/PaymentCard";

import { postFetcher } from "utils/helpers";
import { NftInfo } from "utils/types";

import useApi from "hooks/useApi";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

export default function NFT() {
    const router = useRouter();
    const { nftId } = router.query;
    
    const [nft, setNft] = useState<NftInfo>()
    const [openModal, setOpenModal] = useState(false);

    const { data: nftData } = useApi('/api/users/getNFTInfo', { nft_id: nftId });

    useEffect(() => {
        if (!nftData || nftData?.isError) return;        
        setNft(nftData?.nft);
    }, [nftData]);
    
    const handleBuy = (evt) => {
        evt.preventDefault();
        setOpenModal(true);
    }

    return (
        <div className='flex pb-[5rem] pt-[2rem] mx-[10rem]'>
            <SidePanel nftImageUrl={nft?.image} />
            <Main nft={nft} onBuy={handleBuy} />
            <PaymentModal nft={nft} open={openModal} setOpen={setOpenModal} />
        </div>
    )
}

function SidePanel({nftImageUrl}) {
    return (
        <div className='min-w-[18rem] max-w-[18rem] flex flex-col'>
            <FallbackImage src={nftImageUrl} />
            <hr className='mt-[1.25rem]'/>
            <PanelGroup accordion>
                <Panel header="Properties" defaultExpanded>
                    <div className='flex flex-wrap'>
                        <PropertyBox className='w-1/2 pr-1 mb-2' title='background' content='Yellow' description='7% have this trait' />
                        <PropertyBox className='w-1/2 pl-1 mb-2' title='background' content='Yellow' description='7% have this trait' />
                        <PropertyBox className='w-1/2 pr-1 mb-2' title='background' content='Yellow' description='7% have this trait' />
                        <PropertyBox className='w-1/2 pl-1 mb-2' title='background' content='Yellow' description='7% have this trait' />
                        <PropertyBox className='w-1/2 pr-1' title='background' content='Yellow' description='7% have this trait' />
                    </div>
                </Panel>
                <Panel header="About Doodles">
                    {/* <Placeholder.Paragraph /> */}
                    <span>Collection of doodles NFTs</span>
                </Panel>
                <Panel header="Details">
                    {/* <Placeholder.Paragraph /> */}
                    <span>Details panel</span>
                </Panel>
            </PanelGroup>
        </div>
    )
}

function PropertyBox({ className, title, content, description }) {
    return (
        <div className={className}>
            <div className='px-4 pt-5 pb-4 border flex flex-col'>
                <span className='font-xs'>{title}</span>
                <span className='font-bold'>{content}</span>
                <span className='text-xs'>{description}</span>
            </div>
        </div>
    )
}

function Main({nft, onBuy}) {
    
    return (
        <div className='flex flex-col flex-grow mx-[2.5rem]'>
            <div className='flex w-full items-center justify-between'>
                <div className='flex'>
                    <GhostButton className='w-[2rem] h-[2rem]'>
                        <ReloadIcon/>
                    </GhostButton>
                    <GhostButton className='h-[2rem] ml-2'>
                        <ShareOutlineIcon/>
                        Share
                    </GhostButton>
                </div>
                <span className='flex items-center h-[1.4rem] bg-[#f3008c] text-white px-[0.8rem] w-min rounded-full'>Art</span>
            </div>
            <TitleBar title={nft?.name} caption={nft?.collection} className='mt-6 mb-4' />
            <div className='mb-2'>{nft?.description}</div>
            <a><b>See more <ArrowDownLineIcon/></b></a>
            <hr className='my-6' />
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className='py-1 rounded-full bg-[#80e462] text-2xl text-white font-bold pl-2 pr-1'>
                        <span className='mr-1'>{nft?.price}</span>
                        <span className='rounded-full px-2 py-1 bg-[#a0ec8a] text-white text-2xl font-bold'>
                            ETH
                        </span>
                    </div>
                    <span className='pl-4 text-sm'>$15,807.40</span>
                </div>
                <div className='flex space-x-2'>
                    <GhostButton className='!border-black border-2' onClick={onBuy}> Buy Now </GhostButton>
                    <GhostButton> Make Offer </GhostButton>
                </div>
            </div>
            <span className='mt-6 text-sm'>Sale ends July 29, 2022 at 3:57am GMT+1</span>
            <div className='flex mt-3 space-x-6'>
                <Counter value='20' unit='Days' />
                <Counter value='11' unit='Hours' />
                <Counter value='47' unit='Minutes' />
                <Counter value='30' unit='Seconds' />
            </div>
            <hr className='my-6' />
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start'>
                    <FallbackImage src={nft?.owner?.avatarUrl} alt='Creator' className='rounded-full w-[3rem] h-[3rem] mr-2' />
                    <div className='flex flex-col'>
                        <span className='text-sm text-[#0f0e36]s'>Owner</span> 
                        <span className='text-sm text-[#777684]'>{nft?.owner?.name}</span>
                    </div>
                </div>
                <div className='flex space-x-2'>
                    <GhostButton> 1.6k Views </GhostButton>
                    <GhostButton> 15 Favorites </GhostButton>
                </div>
            </div>
            <hr className='mt-6 mb-4' />
            <div className='mb-2 flex space-x-2'>
                <GhostButton className='bg-[#ebeaef]'> Offers </GhostButton>
                <GhostButton> Activity </GhostButton>
            </div>
            <OffersTable />
        </div>
    )
}

function Counter({ value, unit }) {
    return (
        <div className='flex flex-col'>
            <span className='font-bold text-[#0f0e36]'>{value}</span>
            <span className='text-sm font-bold text-[#777684]'>{unit}</span>
        </div>
    )
}

function PaymentModal({nft, open, setOpen}) {
    const [clientSecret, setClientSecret] = useState('');
    
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

    useEffect(() => {
        if (!open)      return;
        if (!nft?.id)   return;

        // Create PaymentIntent as soon as the page loads
        // axios.post(
        //     `http://127.0.0.1:8000/api/users/fiatPurchase`,
        //     {
        //         nft_id: nft?.id
        //     }
        // )
        postFetcher({
            url: '/api/users/fiatPurchase',
            body: {
                nft_id: nft?.id,
            }
        })
        .then((res:any) => {
            if(res && res?.data)
                setClientSecret(res.data?.client_secret)
        });
    }, [open]);

    return (
        <Modal
            role="alertdialog"
            backdrop="static"
            open={open}
            onClose={() => setOpen(false)}
        >
            <Modal.Header>
                <Modal.Title>Purchase <i>{nft?.name}</i></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    clientSecret &&
                    <Elements options={{clientSecret: clientSecret, appearance: { labels: 'floating'}}} stripe={stripePromise}>
                        <PaymentCard return_url={`/collections/collection/${nft?.id}`} />
                    </Elements>
                }
                {
                    !clientSecret && <>
                        <Placeholder.Paragraph rows={5} />
                        <Loader size="md" content="Loading payment details..." backdrop />
                    </>
                }
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={() => setOpen(false)} appearance="primary">
                    OK
                </Button>
                <Button onClick={() => setOpen(false)} appearance="subtle">
                    Cancel
                </Button>
            </Modal.Footer> */}
        </Modal>
    )
}

function OffersTable() {
    const cols = [
        { text: 'Price', value: row => (row.price + ' WETH'), type: 'id'},
        { text: 'USD', value:(row) => ('$' + row.price_usd.toLocaleString())},
        { text: 'Floor Diff.', value:(row) => (row.floor_diff)},
        { text: 'Expiration', value: (row) => (row.expiration)},
        { text: 'From', value: 'from'},
    ]
    return (
        <Table cols={cols} rows={rows} className='text-sm' />
    );
};
  

const rows = [
    {
        price: 13,
        price_usd: 15914.4,
        floor_diff: '4% below',
        expiration: '1 day',
        from: '3D009'
    },
    {
        price: 13,
        price_usd: 15914.4,
        floor_diff: '4% below',
        expiration: '1 day',
        from: '3D009'
    },
    {
        price: 13,
        price_usd: 15914.4,
        floor_diff: '4% below',
        expiration: '1 day',
        from: '3D009'
    },
    {
        price: 13,
        price_usd: 15914.4,
        floor_diff: '4% below',
        expiration: '1 day',
        from: '3D009'
    },
    {
        price: 13,
        price_usd: 15914.4,
        floor_diff: '4% below',
        expiration: '1 day',
        from: '3D009'
    },
]

const links = [
    {
        title: 'etherscan',
        href: 'https://etherscan.com/',
        image: '/images/icons/etherscan.webp'
    },
]
