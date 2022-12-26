import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import Icon1 from '../../images/svg-1.svg'
import { login } from '../../api/auth';
import { useAuth } from "../../contexts/auth.context";
import { 
  Form,
  FormButton, 
  FormH1, 
  FormInput, 
  FormLabel, 
  Text,
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton
} from './signin.styles'

export const ModalSignIn = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState([])
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
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  const signIn = async (e) => {
    e.preventDefault()
    setErrors([])
    // make a request to the login endpoint sending up our data
    const response = await login({ email, password })
    /*
    {
      success: true,
      messages: ['', '']
    }
    */
    if (response.success) {
      setCurrentUser(response.user)
      navigate('/user/'+response.user._id);
      
    }  else {
      setErrors(response.messages)
    }
    return
  }

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={Icon1} alt='rating' />
              <ModalContent>
                <Form onSubmit={signIn}>
                  <FormH1>Sign in to your account</FormH1>
                  {errors && errors.length > 0 && errors.map((error) => <p style={{ color: "red" }}>{error}</p>)}
                  <FormLabel htmlFor='for'>Email</FormLabel>
                  <FormInput type='email' value= {email} onChange={(e) => setEmail(e.target.value)}  required />
                  <FormLabel htmlFor='for'>Password</FormLabel>
                  <FormInput type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <FormButton type='submit'>Continue</FormButton>
                </Form>
                
                <Text>Forgot Password?</Text>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};