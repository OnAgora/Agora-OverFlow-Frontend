import { Timeline, Grid, Row, Col } from 'rsuite';

const Round = ({ percentage, title, description }) => (
    <div className='flex flex-col h-[6rem]'>
        <span className='text-[2rem] text-[#6680ff] font-bold'>{percentage}%</span>
        <span className='text-[1rem] text-[#0f0e36]'>{title}</span>
        <span className='text-[0.667rem] text-[#777684]'>{description}</span>
    </div>
)

export default ({align, data, className=''}) => (
    <Timeline align={align}>
        {data.map((item, index) => (
            <Timeline.Item 
                key={index} 
                time={
                    <img src={item.image} className='w-[6rem]' />
                }
            >
                <Round
                    percentage={item.percentage}
                    title={item.title}
                    description={item.description}
                />
            </Timeline.Item>
        ))}
    </Timeline>
)