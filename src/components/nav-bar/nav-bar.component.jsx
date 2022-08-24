import React from 'react';
import { FaBars } from 'react-icons/fa';

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

const NavBar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/'>UNDRDOG</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLinkSignIn to='/sign-in'>Sign In</NavBtnLinkSignIn>
            <NavBtnLinkSignUp to='/sign-up'>Sign Up</NavBtnLinkSignUp>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;