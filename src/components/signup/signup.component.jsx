import React, { useRef, useState } from 'react'
import { signup, login, logout, useAuth  } from '../../firebase';
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
    //Text  
} from './signup.styles';

const SignUp = () => {
    // const [ loading, setLoading ] = useState(false);
    // const currentUser = useAuth();
  
    // const emailRef = useRef();
    // const passwordRef = useRef();
  
    // async function handleSignup() {
    //   setLoading(true);
    //   // try {
    //     await signup(emailRef.current.value, passwordRef.current.value);
    //   // } catch {
    //     // alert("Error!");
    //   // }
    //   setLoading(false);
    // }
  
    // async function handleLogin() {
    //   setLoading(true);
    //   try {
    //     await login(emailRef.current.value, passwordRef.current.value);
    //   } catch {
    //     alert("Error!");
    //   }
    //   setLoading(false);
    // }
  
    // async function handleLogout() {
    //   setLoading(true);
    //   try {
    //     await logout();
    //   } catch {
    //     alert("Error!");
    //   }
    //   setLoading(false);
    // }
    return (
        <>
        <Container>
            <FormWrap>
                {/* <Icon to="/">UNDRDOG</Icon> */}
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
                        <FormButton type='submit'>Sign Up</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignUp;