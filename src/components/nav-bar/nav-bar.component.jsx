import React from 'react';
import {
  Logo,
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnSignUpLink
} from './nav-bar.styles';

const NavBar = () => {
  return (
    <>
      <Nav>
        <Logo to='/home'>
        <h2 style={{ color: "white" }}>UNDRDOG</h2>
        </Logo>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
          <NavBtnSignUpLink to='/sign-up'>Sign Up</NavBtnSignUpLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;