import React from 'react'
import { 
    Container, 
    FormWrap, 
    Icon, 
    FormContent, 
    Form, 
    FormH1, 
    FormLabel, 
    FormInput, 
    FormButton, 
    // Text  
} from './signup.styles';

const SignUp = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">UNDRDOG</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Create an account</FormH1>
                    <FormLabel htmlFor='for'>Name</FormLabel>
                    <FormInput type='name' required />
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
      
    </>
  )
}

export default SignUp;
