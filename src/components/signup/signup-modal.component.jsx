import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Icon1 from '../../images/svg-1.svg'
import { signup } from "../../api/auth";
import { useAuth } from '../../contexts/auth.context';

import { useNavigate } from "react-router-dom";

import { 
  FormButton, 
  FormH1, 
  FormInput, 
  FormLabel, 
  Form,
  Text
} from './signup.styles'

import "../signin/signin.scss";

const Background = styled.div`
  top: 0;
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
width: auto;
height: 650px;
overflow: hidden;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: white;
color: #000;
display: flex;
position: relative;
z-index: 10;
border-radius: 8px;
padding: 20px 30px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  background: rgb(230,230,230);
  padding-left: 25px;
  padding-right: 25px;
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
    background: rgb(53,62,66);
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  padding: 0;
  z-index: 12;
`;

export const ModalSignUp = ({ showModalSignUp, setShowModalSignUp, setShowModal }) => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();
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
        setCurrentUser(result.user)
        setShowModalSignUp(false)
        // navigate('/user/' + result.user._id)
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
              <ModalContent>
                <Form onSubmit={handleSignup}>
                <div className="form-header-grouping">
                    <FormH1>Welcome to BetterShift!</FormH1>
                    <span className="form-subtitle">Have a voice, tell your story.</span>
                  </div>
               
                {errors && errors.length > 0 && errors.map((error) => <p style={{ color: "red" }}>{error}</p>)}
                <label className="form-label">Name</label>
                <FormInput placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} type='name' required ariaLabel="Name" />
                <label className="form-label">Email Address</label>
                <FormInput placeholder="usersname@mail.com"  value= {email} onChange={(e) => setEmail(e.target.value)} type='email' required ariaLabel="Email" />
                <label className="form-label">Password</label>
                <FormInput placeholder="* * * * * * * * * *" value={password} onChange={(e) => setPassword(e.target.value)} type='password' required ariaLabel="Password"/>
                <label className="form-label">Confirm Password</label>
                <FormInput placeholder="* * * * * * * * * *" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type='password' required ariaLabel="Confirm password" />
                <FormButton type='submit'>Sign Up</FormButton>
                
                <span className="signup-action">Have an account? &nbsp;<a style={{cursor: "pointer"}} 
                  onClick={() => {
                    setShowModalSignUp(false)
                  setShowModal(true)
                  }}>Sign In</a></span>
                </Form>
               
              </ModalContent>
              <CloseModalButton
              color='rgb(200,200,200)'
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