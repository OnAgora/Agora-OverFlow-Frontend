import { Form, ButtonToolbar, Button, Input, Checkbox, CheckboxGroup } from 'rsuite';
import TitleBar from 'components/TitleBar';
import Link from 'next/link';
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';

export default function Register() {
  return (
    <div>
        <div className='flex h-[25rem] bg-[#effceb] items-center justify-center'>
            <TitleBar caption='Create account' title='Register.' className='text-center'/>
        </div>
        <Form className='mx-[18rem] mt-[-5rem] bg-white p-[3.25rem] text-[0.8rem]' fluid>
            <Form.Group>
                <Button appearance="ghost" className='w-full rounded-full border-[#ebeaef] text-[#777684] flex justify-center items-center'>
                    <img src="/images/google_logo.webp" className='w-[0.833rem] mr-2' />
                    Sign up with Google
                </Button>
            </Form.Group>
            <div className='flex items-center'>
                <hr className='flex-grow' />
                <span className='px-4 text-[#dfdee2]'>or Sign up with Email</span>
                <hr className='flex-grow' />
            </div>
            <Form.Group controlId="name" className='mt-[1.5rem]'>
                <Form.ControlLabel>Name</Form.ControlLabel>
                <Form.Control name="name" placeholder="Johne Doe"/>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" type="email" placeholder="E.g. johndoe@email.com"/>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control name="password" type="password" autoComplete="off" placeholder="Set your password"/>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.ControlLabel>Repeat Password</Form.ControlLabel>
                <Form.Control name="repeatPassword" type="password" autoComplete="off" placeholder="Repeat your password"/>
            </Form.Group>
            <Form.Group controlId="checkbox">
                <Form.Control name="checkbox" accepter={CheckboxGroup}>
                    <Checkbox value="terms">I’ve read and accept the <u>terms &amp; conditions</u></Checkbox>
                    <Checkbox value="newsletter">Subscribe to our newsletter to stay in the loop</Checkbox>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Button appearance="primary" className='w-full rounded-full'>Register</Button>
            </Form.Group>
            <Form.Group className='text-center'>
                <label className='pr-1'>Already have an account?</label>
                <Link href="/auth/login">
                    <b>Login</b>
                    <ArrowRightLineIcon/>
                </Link>
            </Form.Group>
        </Form>  
    </div>
  )
}
