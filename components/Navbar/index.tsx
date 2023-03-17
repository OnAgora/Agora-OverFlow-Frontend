import { Nav } from 'rsuite';
import cn from "classnames";

export default ({ active, items, onSelect, ...props }) => {
    
    return (
      <Nav 
        {...props} 
        activeKey={active} 
        onSelect={onSelect} 
        style={{ marginBottom: 50 }}
    >
        {
        items.map((item, index) => (
            <Nav.Item
                eventKey={item.link}
                key={index}
                className={cn(
                    'text-[0.667rem] font-bold', 
                    item.link === active ? '!text-[#0f0e36]' : '!text-[#777684]',
                    item.link === active ? '!text-[#0f0e36]' : '!text-[#777684]',
                )}
            >
                {item.title}
            </Nav.Item>
        ))}
      </Nav>
    );
};