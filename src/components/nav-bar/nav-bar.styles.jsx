import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
  background: ${({navBg}) => navBg};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  /* @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  } */
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`
export const NavLogo = styled(LinkR)`
color: #fff;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 0px;
display: inline-flex;
justify-content: space-between;
align-items: center;
text-decoration: none;
padding: 0 3px;
height: 100%;
cursor: pointer;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
`
export const NavLinks = styled(LinkS)`
  position: relative;
  right: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  padding-top: 10px;
  /* padding: 30px 5px; */

  &:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 12px;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}
  &:hover:after { 
    width: 50%; 
    left: 25%; 
  }
  &:hover {
    color: #fff !important;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
  }

  &.active {
    border-bottom: 3px solid #E5DDD4;
    transition: all 0.2s ease-in-out;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLinkSignIn = styled.button`
   font-size: 14px;
   border-radius: 7px;
   background: transparent;
   backdrop-filter: blur(30px);
   padding: 9px 20px;
   color: #fff;
   outline: none;
   border: 1px solid #FFFFFF;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   /* Second Nav */
   margin-left: 24px;
   
   &:hover {
     transition: all 0.2s ease-in-out;
     background: #fff;
     color: #010606;
   }
`

export const NavBtnLinkSignUp = styled.button`
   font-size: 14px;
   border-radius: 7px;
   background:rgb(162,85,45);
   padding: 10px 22px;
   color: #fff;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   /* Second Nav */
   margin-left: 14px;
`