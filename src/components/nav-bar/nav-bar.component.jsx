import React, { useEffect, useState } from 'react';
import betterShiftLogo from "../../images/betterShiftLogo.svg"
import mobileBetterShiftLogo from "../../images/mobileLogoWhite.svg"
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

import { useMediaQuery } from 'react-responsive'


import hamburgerMenu from "../../images/hamburgerMenuWhite.svg"

import "../../styles/navbar.scss";

const NavBar = ({toggle}) => {
  const { showModal, setShowModal, showModalSignUp, setShowModalSignUp } = useModal()
  const { currentUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [forceSearchBar, setForceSearchBar] = useState(false);
  const [hideSearchBar, setHideSearchBar] = useState(location.pathname === '/');
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [showingMembers, setShowingMembers] = useState(false);
  const [scrollNav, setScrollNav] = useState(!location.pathname === '/');
  const [navBg, setNavBg] = useState(location.pathname === '/' ? 'rgba(0,0,0,0)' : `rgb(35,36,34)`);

  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const changeNav = () => {
    const threshold = 100;
    const thresholdSearch = 400;
   if (window.scrollY < threshold) {
    setNavBg(`rgba(35,36,34,${window.scrollY/threshold})`)
   } else if (window.scrollY < thresholdSearch) {
    setForceSearchBar(false)
   } else {
    if (!forceSearchBar) {
      console.log("this ran")
      setForceSearchBar(true)
    }
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
    const scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) {
      window.scrollTo(0, scrollpos);
      localStorage.removeItem('scrollpos');
    }
    const beforeUnload =function(e) {
        localStorage.setItem('scrollpos', window.scrollY);
    }

    window.onbeforeunload = beforeUnload
  }, []);

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


  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
    <ModalSignIn showModal={showModal} setShowModal={setShowModal} setShowModalSignUp={setShowModalSignUp} />
    <ModalSignUp showModalSignUp={showModalSignUp} setShowModalSignUp={setShowModalSignUp} setShowModal={setShowModal}/>
      <Nav navBg={navBg}>
        <NavBarContainer>
          <img src={isDesktop ? betterShiftLogo : mobileBetterShiftLogo} className="navbar__logo" onClick={(e) => {
            navigate('/')
            }}/>
          <MobileIcon onClick={toggle}>
            <img src={hamburgerMenu} className="navbar__hamburger"/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              onClick={() => {
                navigate("/")
              }}
              >Home</NavLinks>
            </NavItem>
          <NavItem>
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
            </NavItem>
            {!currentUser && <NavItem>
              <NavLinks
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              onClick={openModalSignUp}
              >Get Started</NavLinks>
            </NavItem>}
            <NavItem>
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
            </NavItem>
          </NavMenu>
          <div className="navbar__options">
            {isDesktop && (!hideSearchBar || forceSearchBar) && <NavItem>
              <SearchBar isHeader={true} setShowingMembers={setShowingMembers}/>
            </NavItem>}
            {isDesktop && !currentUser && <NavBtn>
              <NavBtnLinkSignIn onClick={openModal}>Sign In</NavBtnLinkSignIn>
              {/* <NavBtnLinkSignUp onClick={openModalSignUp}>Sign Up</NavBtnLinkSignUp> */}
            </NavBtn>}
            {/* {currentUser && <div onClick={() => navigate("/user/"+currentUser._id)} className="navbar__options-btn cursor-pointer"><span>{currentUser.name}</span> <FaChevronDown /></div>} */}
            {isDesktop && currentUser && <div onClick={() => navigate("/user/"+currentUser._id)} className="user-profile__navbar__avatar">{currentUser.name.charAt(0).toUpperCase()}</div>}
            {/* {showDropdownMenu && currentUser && <ul className="navbar__options-dropdown" onMouseEnter={() => setShowDropdownMenu(true)} onMouseLeave={() => setShowDropdownMenu(false) }>
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
            </ul>} */}
          </div>
          
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  );
};

export default NavBar;