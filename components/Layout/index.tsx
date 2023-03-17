import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    const [showSubscription, setShowSubscription] = useState(true);
    const router = useRouter();
    useEffect(() => {        
        const list = [
            '/auth',
            '/admin',
            '/about'
        ] 
        const flag = list.some(url => router.pathname.startsWith(url));
        setShowSubscription(!flag);
    }, [router.pathname]);
    return (
        <div>
            <Header/>
            <div className='flex flex-col px-[5rem]'>
                {children}
                <Footer showSubscription={showSubscription}/>
            </div>
        </div>
    )
}