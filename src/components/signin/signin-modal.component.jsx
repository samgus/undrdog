import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import googleLogo from '../../images/google-logo.svg'
import { login } from '../../api/auth';
import { useAuth } from "../../contexts/auth.context";
import { Link } from 'react-router-dom';
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

import "./signin.scss";

export const ModalSignIn = ({ showModal, setShowModal, setShowModalSignUp }) => {
  const navigate = useNavigate();
  const { setCurrentUser, googleClient } = useAuth()
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
      setShowModal(false)
      // navigate('/user/'+response.user._id);
      
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
          <div data-aos="fade-zoom-in" data-aos-duration="500">
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <Form onSubmit={signIn}>
                  <div className="form-header-grouping">
                    <FormH1>Welcome to BetterShift!</FormH1>
                    <span className="form-subtitle">Have a voice, tell your story.</span>
                  </div>
                  {googleClient && <button type="button" className='google__sign-in-button' onClick={(e) => {
                    e.preventDefault();
                    googleClient.requestCode();
                  }}>
                    <img src={googleLogo} />
                      Sign in with Google
                  </button>}
                  <div className="google__sign-in__divider">
                    <span className="google__sign-in__divider__text">Or</span>
                    <div className="google__sign-in__divider__line"></div>
                  </div>
                  {errors && errors.length > 0 && errors.map((error) => <p style={{ color: "red" }}>{error}</p>)}
                  {/* <label className="form-label">Email Address</label> */}
                  <FormInput placeholder="Email Address" type='email' value= {email} onChange={(e) => setEmail(e.target.value)}  required ariaLabel="Email" />
                  {/* <label className="form-label">Password</label> */}
                  <FormInput placeholder="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} required ariaLabel="Password" />
                  <FormButton type='submit'>Sign In</FormButton>
                  <div className="forgot-password-wrapper">
                    <Link to="/forgot-password" onClick={() => {setShowModal(false);}}>
                      Forgot Password?
                    </Link>
                  </div>
                  
                
                  <span className="signup-action">Don't have an account? &nbsp;<a style={{cursor: "pointer"}} 
                  onClick={() => {
                    setShowModal(false);
                    setShowModalSignUp(true)
                  }}>Sign Up</a></span>

                </Form>
                
                
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                color='rgb(200,200,200)'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
            </div>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};