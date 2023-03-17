import { Input as RsuiteInput, InputGroup } from 'rsuite';
import cn from 'classnames';

export default function Input({children, placeholder, className}) {
    return (
        <InputGroup inside className={cn('rounded-full px-[10px] flex', className)}>
            <InputGroup.Button>
                {children}
            </InputGroup.Button>
            <RsuiteInput placeholder={placeholder} className='!outline-none'/>
        </InputGroup>
    )
}