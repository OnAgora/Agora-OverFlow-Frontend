import cn from "classnames"
import { forwardRef, useState } from "react"
import { Button, ButtonToolbar, Form, Input, InputGroup, SelectPicker, Toggle } from "rsuite";

export default function Dashboard() {

    const [activeMenu, setActiveMenu] = useState(menuItems[0].key)

    const handleActiveChange = (newMenu) => {
        setActiveMenu(newMenu);
    }

    return (
        <div className='flex justify-between'>
            <div className='w-1/5 border-r-2 border-grey'>
                <Sidebar
                    items={menuItems}
                    onChange={handleActiveChange}
                    currentItem={activeMenu}
                />
            </div>
            <div className='w-4/5 p-5'>
                {menuItems.filter(item => item.key === activeMenu)[0]?.page}
            </div>
        </div>
    )
}

const CreatorSet = ({ creators }) => {
    const data = creators?.map(creator => ({
        label: creator.name,
        value: creator.handleName,
    }))
    
    return (
        <Form.Group controlId="creatorName" >
            <Form.ControlLabel className="w-[5rem] text-right">Creator</Form.ControlLabel>
            <Form.Control className="w-[20rem]" name="creatorName" data={data} accepter={SelectPicker} placeholder="Select Creator..." />
        </Form.Group>
    )
}
const CategorySet = ({ categories }) => {
    const data = categories?.map(category => ({
        label: category.name,
        value: category.name,
    }))
    
    return (
        <Form.Group controlId="categoryName" >
            <Form.ControlLabel className="w-[5rem] text-right">Category</Form.ControlLabel>
            <Form.Control className="w-[20rem]" name="categoryName" data={data} accepter={SelectPicker} placeholder="Select Category..." />
        </Form.Group>
    )
}

const RoyaltySet = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    return (
        <div className="flex space-x-4 items-center">
            <Form.Group controlId="royalty" >
                <Form.ControlLabel className="w-[5rem] text-right">Royalty</Form.ControlLabel>
                <Form.Control className="!w-[20rem]" name="royalty" accepter={Toggle} checked={isEnabled} onChange={setIsEnabled} />
            </Form.Group>
            <Form.Group controlId="royaltyAddress">
                <Form.ControlLabel className="w-[15rem] text-right">Royalty Address</Form.ControlLabel>
                <Form.Control className="!w-[10rem]" name="royaltyAddress" defaultValue="0x285ca2dc98ed5119" disabled={!isEnabled}  />
            </Form.Group>
            <Form.Group controlId="royaltyCut" className="!flex" >
                <Form.ControlLabel className="min-w-[5rem] text-right">Royalty Cut</Form.ControlLabel>
                <InputGroup className="!w-[10rem]">
                    <Form.Control name="royaltyCut" type="number" min={0} max={100} defaultValue={1} disabled={!isEnabled} />
                    <InputGroup.Addon> %</InputGroup.Addon>
                </InputGroup>
            </Form.Group>
        </div>
    )
}

const DeployPage = () => {
    const creators = [
        {
            "handleName": "Alex_Echo",
            "name": "Alex Echo",
        },
        {
            "handleName": "salahawk",
            "name": "Tyler Mcniff",
        },
    ]
    const categories = [
        {
            "name": "Art",
            "imageUrl": "path to imageUrl",
            "color": "Red"
        },
        {
            "name": "For Good",
            "imageUrl": "path to imageUrl",
            "color": "Red"
        },
        {
            "name": "Sport",
            "imageUrl": "path to imageUrl",
            "color": "Purple"
        },
        {
            "name": "Music",
            "imageUrl": "path to imageUrl",
            "color": "Light Blue"
        },
        {
            "name": "Utility",
            "imageUrl": "path to imageUrl",
            "color": "Yellow"
        },
        {
            "name": "Photography",
            "imageUrl": "path to imageUrl",
            "color": "Lavender"
        },
        {
            "name": "Virtual Worlds",
            "imageUrl": "path to imageUrl",
            "color": "Gray"
        }
    ]

    const handleSubmit = (evt) => {
        // console.log(evt);
    }

    return (
        <Form layout="inline" className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
                <Form.Group controlId="collectionName" >
                    <Form.ControlLabel className="w-[5rem] text-right">Name</Form.ControlLabel>
                    <Form.Control className="!w-[20rem]" name="collectionName" />
                </Form.Group>
                <Form.Group controlId="description" >
                    <Form.ControlLabel className="w-[5rem] text-right">Description</Form.ControlLabel>
                    <Form.Control className="!w-[20rem]" name="description" />
                </Form.Group>
            </div>
            <div className="flex space-x-4">
                <CreatorSet creators={creators} />
                <CategorySet categories={categories} />
            </div>
            <div className="flex space-x-4">
                <Form.Group controlId="ipfs" >
                    <Form.ControlLabel className="w-[5rem] text-right">IPFS</Form.ControlLabel>
                    <Form.Control className="!w-[20rem]" name="ipfs" />
                </Form.Group>
                <Form.Group controlId="imagePath" >
                    <Form.ControlLabel className="w-[5rem] text-right">Image Path</Form.ControlLabel>
                    <Form.Control className="!w-[20rem]" name="imagePath" />
                </Form.Group>
            </div>
            <div className="flex space-x-4">
                <Form.Group controlId="avatarUrl" >
                    <Form.ControlLabel className="w-[5rem] text-right">Avatar URL</Form.ControlLabel>
                    <Form.Control className="!w-[20rem]" name="avatarUrl" />
                </Form.Group>
                <Form.Group controlId="bannerUrl" >
                    <Form.ControlLabel className="w-[5rem] text-right">Banner URL</Form.ControlLabel>
                    <Form.Control className="!w-[20rem]" name="bannerUrl" />
                </Form.Group>
            </div>
            <div className="flex space-x-4">
                <Form.Group controlId="slug" >
                    <Form.ControlLabel className="w-[5rem] text-right">Slug URL</Form.ControlLabel>
                    <Form.Control className="!w-[20rem]" name="slug" />
                </Form.Group>
                <Form.Group controlId="startMinting">
                    <Form.ControlLabel className="w-[5rem] text-right">Mintable?</Form.ControlLabel>
                    <Form.Control className="!w-[20rem]" name="startMinting" accepter={Toggle} />
                </Form.Group>
            </div>
            <div className="flex space-x-4">
                <RoyaltySet />
            </div>
            <Form.Group controlId="price" className="!flex" >
                <Form.ControlLabel className="min-w-[5rem] text-right">Price</Form.ControlLabel>
                <InputGroup className="!w-[20rem]">
                    <Form.Control step={0.01} name="price" type="number" defaultValue={1} />
                    <InputGroup.Addon> FLOW</InputGroup.Addon>
                </InputGroup>
            </Form.Group>
            <hr />
            {/* socials */}
            <div className="flex space-x-4">
                <Form.Group controlId="twitter" >
                    <Form.ControlLabel className="w-[5rem] text-right">Twitter</Form.ControlLabel>
                    <Form.Control className="!w-[20rem]" name="twitter" />
                </Form.Group>
                <Form.Group controlId="instagram" >
                    <Form.ControlLabel className="w-[5rem] text-right">Instagram</Form.ControlLabel>
                    <Form.Control className="!w-[20rem]" name="instagram" />
                </Form.Group>
            </div>
            <div className="flex space-x-4">
                <Form.Group controlId="facebook" >
                    <Form.ControlLabel className="w-[5rem] text-right">Facebook</Form.ControlLabel>
                    <Form.Control className="!w-[20rem]" name="facebook" />
                </Form.Group>
                <Form.Group controlId="discord" >
                    <Form.ControlLabel className="w-[5rem] text-right">Discord</Form.ControlLabel>
                    <Form.Control className="!w-[20rem]" name="discord" />
                </Form.Group>
            </div>
            <hr />
            <Form.Group>
                <ButtonToolbar>
                    <Button appearance="primary" type="submit">Submit</Button>
                    <Button appearance="ghost" type="reset">Reset</Button>
                </ButtonToolbar>
            </Form.Group>
        </Form>
    )
}

const Sidebar = ({ currentItem, onChange, items }) => {
    
    return (
        <div className='flex flex-col'>
            <aside className="w-full" aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                    <span className="text-bold text-[1.5rem]">Admin Dashboard</span>
                    <hr />
                    <ul className="space-y-2 mt-3">
                        {items.map(item => (
                            <li 
                                key={item.key} 
                                className={cn("flex items-center p-2 text-base font-bold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700", (currentItem == item.key ? "bg-[#ddd]" : ""))}
                                onClick={() => onChange(item.key)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                </aside>
        </div>
    )
}

const menuItems = [
    {
        key: 'deploy',
        title: 'Deploy Collection',
        page: <DeployPage />,
    },
    {
        key: 'mint',
        title: 'Mint NFT',
        page: <DeployPage />,
    },
]