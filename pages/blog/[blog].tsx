import { useRouter } from "next/router"
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';

import TitleBar from "components/TitleBar";

function Blog() {
    const router = useRouter();
    const { blog } = router.query;
    return (
        <div>
            <div className='flex flex-wrap h-[25rem] pl-[15rem] bg-[#FFE6F4] items-center'>
                <TitleBar caption='Announcement' title='Featured Blog Post Title.' />
            </div>
            {blog}
        </div>
    )
}

const nfts = [
]

export default Blog