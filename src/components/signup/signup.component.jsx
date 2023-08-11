import React, { useRef, useState } from 'react'
import { signup } from "../../api/auth";

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
    const [errors, setErrors] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ name, setName ] = useState();
    const [ email, setEmail] = useState();
    const [ password, setPassword] = useState();
    const [ confirmPassword, setConfirmPassword ] = useState();
    // const currentUser = useAuth();
  
    // const emailRef = useRef();
    // const passwordRef = useRef();
  
    async function handleSignup(e) {
        alert('running')
      e.preventDefault();
      setErrors([])

      setLoading(true);
      
      // sign up request
      let result;
      try {
        result = await signup({
            name,
            email,
            password,
            confirmPassword
          })
      } catch(e) {
        console.log(e);
      }
      if (result) {
        if (result.success) {
            // log them in
            alert('You successfully logged in')
          } else {
            setErrors(result.messages);
          }
      } else {
        setErrors(['Server failure'])
      }
    
      setLoading(false);
    }
  
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
                <FormContent>
                    <Form action='#' onSubmit={handleSignup}>
                        <FormH1>Create an account</FormH1>
                        {errors && errors.length > 0 && errors.map((error) => <p style={{ color: "red" }}>{error}</p>)}
                        <FormLabel htmlFor='for'>Name</FormLabel>
                        <FormInput value={name} onChange={(e) => setName(e.target.value)} type='name' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput value= {email} onChange={(e) => setEmail(e.target.value)} type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput value={password} onChange={(e) => setPassword(e.target.value)} type='password' required />
                        <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                        <FormInput value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type='password' required />
                        <FormButton type='submit'>Sign Up</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignUp;