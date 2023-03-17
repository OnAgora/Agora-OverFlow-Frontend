import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import Link from "next/link";
import { Button } from 'rsuite';

export default function Header() {
    return (
        <div className='font-bold flex h-[6rem] items-center justify-center border-b-2'>
            <Link href={'/'}>
                <img src='/images/logo.webp' alt="logo" className="w-[10rem] h-[1.375rem]" />
            </Link>
            <InputGroup inside className='ml-[4.167rem] !w-[10rem] px-[0.5rem] flex'>
                <Input placeholder="Search" className='!outline-none'/>
                <InputGroup.Button>
                    <SearchIcon className='items-center justify-center' />
                </InputGroup.Button>
            </InputGroup>
            <ul className='ml-[2rem] flex space-x-4'>
                {
                    menus.map((menu, i) => (
                        <li key={i}>
                            <Link href={menu.href}>
                                {menu.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Button appearance="ghost" className='!text-[#0f0e36] !border-[#0f0e36] rounded-full ml-[2rem] !p-[0.6rem] border-2 !font-bold'>
                <Link href='/auth/login'>Login/Register</Link>
            </Button>
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
]