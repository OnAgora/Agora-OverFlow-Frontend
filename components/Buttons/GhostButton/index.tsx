import { Button } from 'rsuite';
import cn from 'classnames';


export default function GhostButton({children, className='', ...otherProps}) {
    return (
        <Button 
            appearance="ghost" 
            className={cn('rounded-full flex items-center', className)}
            {...otherProps}
        >
            {children}
        </Button>
    )
}