import React from 'react'
import { 
    Container, 
    Form, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Icon,
    Text
} from './signin.styles'

const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <FormContent>
                <Form action='#'>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <div className="w-100 text-center mt-2 text-white">
                        Need an account? <Link to='/sign-up'>Sign Up</Link>
                    </div>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
      
    </>
  )
}

export default SignIn;
