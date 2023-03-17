import Banner from "components/Banner";
import Collections from "components/Collections";
import Notable from "components/Notable";
import Creators from "components/Creators";
import RecentListings from "components/RecentListings";
import Categories from "components/Categories";

export default function Homepage() {
    return (
        <div className='flex flex-col'>
            <Banner />
            <Collections />
            <Notable />
            <Creators />
            <RecentListings />
            <Categories />
        </div>
    )
}