import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Icon1 from '../../images/svg-1.svg'
import { signup } from "../../api/auth";

import { 
  FormButton, 
  FormH1, 
  FormInput, 
  FormLabel, 
  Form,
  Text
} from './signup.styles'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #000;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #fff;
  padding-left: 15px;
  padding-right: 15px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 11;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #01bf71;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 12;
`;

export const ModalSignUp = ({ showModalSignUp, setShowModalSignUp }) => {
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
      e.preventDefault();
      setErrors([])

      setLoading(true);
      
      // sign up request
      const result = await signup({
        name,
        email,
        password,
        confirmPassword
      })
      console.log(result);
      if (result.success) {
        // log them in
        alert('You successfully logged in')
      } else {
        setErrors(result.messages);
      }
      setLoading(false);
    }
  
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    // opacity: showModal ? 1 : 0,
    // transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModalSignUp(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModalSignUp) {
        setShowModalSignUp(false);
        console.log('I pressed');
      }
    },
    [setShowModalSignUp, showModalSignUp]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModalSignUp ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModalSignUp={showModalSignUp}>
              <ModalImg src={Icon1} alt='rating' />
              <ModalContent>
                <Form onSubmit={handleSignup}>
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
                <Text>Already have an account?</Text>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModalSignUp(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};