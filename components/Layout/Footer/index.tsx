import Link from 'next/link';
import Subscribe from 'components/Subscribe';

export default function Footer({ showSubscription }) {
    return (
        <div>
            { showSubscription && <Subscribe /> }
            <div className='flex flex-col py-[5rem] px-[10rem]'>
                <div className='flex justify-between border-b pb-[2rem]'>
                    <ul className='flex space-x-8'>
                    {
                        menus.map((menu, i) => (
                            <li key={i}>
                                <Link href={menu.href}>
                                    <b>{menu.title}</b>
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                    <div className='flex space-x-5 items-center'>
                        <img src='/images/footer/facebook.webp' className='w-[0.4rem] h-[0.8rem]'/>
                        <img src='/images/footer/twitter.webp' className='w-[0.8rem] h-[0.6rem]'/>
                        <img src='/images/footer/instagram.webp' className='w-[0.8rem] h-[0.8rem]'/>
                        <img src='/images/footer/discord.webp' className='w-[0.8rem] h-[0.6rem]'/>
                    </div>
                </div>
                <div className='pt-[2rem]'>
                    © 2022 Nporium. All rights reserved. 
                    &nbsp;<a>Privacy Policy.</a>  
                    &nbsp;<a>Terms of Service.</a>
                </div>
            </div>
        </div>
    )
}

const menus = [
    {
        title: 'Explore',
        href: '/explore'
    },
    {
        title: 'Collections',
        href: '/collections'
    },
    {
        title: 'Creators',
        href: '/creators'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'My Account',
        href: '/account'
    },
    {
        title: 'Blog',
        href: '/blog'
    },
    {
        title: 'Contact',
        href: '/contact'
    },
]