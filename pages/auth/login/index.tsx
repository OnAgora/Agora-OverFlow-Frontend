import { Form, ButtonToolbar, Button, Input, Checkbox, CheckboxGroup } from 'rsuite';
import TitleBar from 'components/TitleBar';
import Link from 'next/link';
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';

export default function Login() {
  return (
    <div>
        <div className='flex h-[25rem] bg-[#f0f4ff] items-center justify-center'>
            <TitleBar caption='Hello again' title='Login.' className='text-center'/>
        </div>
        <Form className='mx-[18rem] mt-[-5rem] bg-white p-[3.25rem] text-[0.8rem]' fluid>
            <Form.Group>
                <Button appearance="ghost" className='w-full rounded-full border-[#ebeaef] text-[#777684] flex justify-center items-center'>
                    <img src="/images/google_logo.webp" className='w-[0.833rem] mr-2' />
                    Login with Google
                </Button>
            </Form.Group>
            <div className='flex items-center'>
                <hr className='flex-grow' />
                <span className='px-4 text-[#dfdee2]'>or Login with Email</span>
                <hr className='flex-grow' />
            </div>
            <Form.Group controlId="email">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" type="email" placeholder="E.g. johndoe@email.com"/>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control name="password" type="password" autoComplete="off" placeholder="Enter your password"/>
            </Form.Group>
            <Form.Group controlId="checkbox" className='flex justify-between items-center'>
                <Checkbox value="remember">Remember Me</Checkbox>
                <Link href="/auth/forgot-password">
                    <b>Forgot Password?</b>
                </Link>
            </Form.Group>
            <Form.Group>
                <Button appearance="primary" color="green" className='w-full rounded-full'>Login</Button>
            </Form.Group>
            <Form.Group className='text-center'>
                <label className='pr-1'>Not registered yet?</label>
                <Link href="/auth/register">
                    <b>Create an account</b>
                    <ArrowRightLineIcon/>
                </Link>
            </Form.Group>
        </Form>  
    </div>
  )
}
