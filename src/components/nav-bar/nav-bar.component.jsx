import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLinkSignIn,
  NavBtnLinkSignUp
} from './nav-bar.styles';

import { ModalSignIn } from '../signin/signin-modal.component';
import { ModalSignUp } from '../signup/signup-modal.component';

const NavBar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 30){
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  const [showModal, setShowModal] = useState(false);
  const [showModalSignUp, setShowModalSignUp] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const openModalSignUp = () => {
    setShowModalSignUp(prev => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
    <ModalSignIn showModal={showModal} setShowModal={setShowModal}/>
    <ModalSignUp showModalSignUp={showModalSignUp} setShowModalSignUp={setShowModalSignUp}/>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleHome}>UNDRDOG</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about' 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >Get Started</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLinkSignIn onClick={openModal}>Sign In</NavBtnLinkSignIn>
            <NavBtnLinkSignUp onClick={openModalSignUp}>Sign Up</NavBtnLinkSignUp>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  );
};

export default NavBar;