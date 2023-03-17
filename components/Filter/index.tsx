import { useState } from "react";
import { Button, ButtonToolbar } from "rsuite"

function Filter({ filters = [], onChange }) {

    const [currentFilter, setCurrentFilter] = useState('All');
    
    return (
        <ButtonToolbar className="flex">
            {
                filters?.map((filter, key) => (
                    <Button key={key}
                        className='rounded-full'
                        appearance="ghost"
                        style={{ backgroundColor: currentFilter === filter ? '#abbaff' : '#ffffff' }}
                        onClick={() => {setCurrentFilter(filter), onChange(filter)}}
                    >
                        {filter}
                    </Button>
                ))
            }
        </ButtonToolbar>
    )
}

export default Filter