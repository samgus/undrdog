import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import SearchBar from "../search-bar/search-bar.component";

import { useAuth } from "../../contexts/auth.context";

const NavBar = ({toggle}) => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [hideSearchBar, setHideSearchBar] = useState(location.pathname === '/');

  const [scrollNav, setScrollNav] = useState(!hideSearchBar);
  const [navBg, setNavBg] = useState(hideSearchBar ? 'rgba(0,0,0,0)' : `rgb(0,0,0)`);

  const changeNav = () => {
    console.log("did this run")
    const threshold = 100;
   if (window.scrollY < threshold) {
    setNavBg(`rgba(0,0,0,${window.scrollY/threshold})`)
   } else {
    setNavBg(`rgb(0,0,0)`);
   }
    // if(window.scrollY >= threshold){
    //   setScrollNav(true);
    // } else {
    //   setScrollNav(false);
    // }
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

    if (hideSearchBar) {
      console.log('hide search bar')
      changeNav();
      window.addEventListener('scroll', changeNav);
    } else {
     setNavBg(`rgb(0,0,0)`);
    }

    return () => {
      if (hideSearchBar) {
        window.removeEventListener('scroll', changeNav);
      }
    }
  }, [hideSearchBar])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    console.log(location.pathname);
    setHideSearchBar(location.pathname === '/')
  }, [location.pathname])
  console.log(navBg);
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
    <ModalSignIn showModal={showModal} setShowModal={setShowModal} setShowModalSignUp={setShowModalSignUp} />
    <ModalSignUp showModalSignUp={showModalSignUp} setShowModalSignUp={setShowModalSignUp} setShowModal={setShowModal}/>
      <Nav navBg={navBg}>
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleHome}>UNDRDOG</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {!hideSearchBar && <NavItem>
              <SearchBar isHeader={true} />
            </NavItem>}
            {hideSearchBar && <NavItem>
              <NavLinks to='about' 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >About</NavLinks>
            </NavItem>}
            {hideSearchBar && <NavItem>
              <NavLinks to='services'
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >Get Started</NavLinks>
            </NavItem>}
          </NavMenu>
          {!currentUser && <NavBtn>
            <NavBtnLinkSignIn onClick={openModal}>Sign In</NavBtnLinkSignIn>
            <NavBtnLinkSignUp onClick={openModalSignUp}>Sign Up</NavBtnLinkSignUp>
          </NavBtn>}
          {currentUser && <NavBtn>
            <NavItem>
              <NavLinks 
              smooth={true} 
              onClick={() => {
                navigate("/user/"+currentUser._id)
              }}
              >Your Profile</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
              smooth={true} 
              onClick={() => {
                navigate("/logout")
              }}
              >Logout</NavLinks>
            </NavItem>
          </NavBtn>}
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  );
};

export default NavBar;