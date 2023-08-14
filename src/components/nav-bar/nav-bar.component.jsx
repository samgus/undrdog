import React, { useEffect, useState } from 'react';
import betterShiftLogo from "../../images/betterShiftLogo.svg"
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaChevronDown } from 'react-icons/fa';
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
import { useModal } from '../../contexts/modal.context';

import "../../styles/navbar.scss";

const NavBar = ({toggle}) => {
  const { showModal, setShowModal, showModalSignUp, setShowModalSignUp } = useModal()
  const { currentUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [hideSearchBar, setHideSearchBar] = useState(location.pathname === '/');
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(!hideSearchBar);
  const [navBg, setNavBg] = useState(hideSearchBar ? 'rgba(0,0,0,0)' : `rgb(35,36,34)`);

  const changeNav = () => {
    console.log("did this run")
    const threshold = 100;
   if (window.scrollY < threshold) {
    
    setNavBg(`rgba(35,36,34,${window.scrollY/threshold})`)
   } else {
    setNavBg(`rgb(35,36,34)`);
   }
  }


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
     setNavBg(`rgb(53,62,66)`);
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
          <img src={betterShiftLogo} className="navbar__logo" onClick={(e) => {
            navigate('/')
            }}/>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {!hideSearchBar && <NavItem>
              <SearchBar isHeader={true} />
            </NavItem>}
            {/* {hideSearchBar && <NavItem>
              <NavLinks to='/' onClick={toggleHome}
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >Home</NavLinks>
            </NavItem>} */}
            {hideSearchBar && <NavItem>
              <NavLinks
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              onClick={() => {
                navigate("/about")
              }}
              >About Us</NavLinks>
            </NavItem>}
            {hideSearchBar && <NavItem>
              <NavLinks
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              onClick={openModalSignUp}
              >Get Started</NavLinks>
            </NavItem>}
            {hideSearchBar && <NavItem>
              <NavLinks 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              onClick={() => {
                navigate("/contact")
              }}
              >Contact Us</NavLinks>
            </NavItem>}
          </NavMenu>
          <div className="navbar__options">
            {!currentUser && <NavBtn>
              <NavBtnLinkSignIn onClick={openModal}>Log In</NavBtnLinkSignIn>
              <NavBtnLinkSignUp onClick={openModalSignUp}>Sign Up</NavBtnLinkSignUp>
            </NavBtn>}
            {currentUser && <div onMouseLeave={() => setShowDropdownMenu(false)  } onMouseEnter={() => setShowDropdownMenu(true)} className="navbar__options-btn"><span>{currentUser.name}</span> <FaChevronDown /></div>}
            {showDropdownMenu && currentUser && <ul className="navbar__options-dropdown" onMouseEnter={() => setShowDropdownMenu(true)} onMouseLeave={() => setShowDropdownMenu(false) }>
                <li onClick={() => {
                    navigate("/user/"+currentUser._id+"?deepLink=profile")
                  }}>
                  My Profile
                </li>
                <li onClick={() => {
                    navigate("/user/"+currentUser._id+"?deepLink=reviews")
                  }}>
                  My Reviews
                </li>
                <li onClick={() => {
                    navigate("/user/"+currentUser._id+"?deepLink=settings")
                  }}>
                  Settings
                </li>
                <li onClick={() => {
                    navigate("/logout")
                  }}>
              
                  Logout
                </li>
            </ul>}
          </div>
          
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  );
};

export default NavBar;