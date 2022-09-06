import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition-timing-function: ease-in;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
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
`
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
    /* transition: all 0.1s ease-in-out; */
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
   //font-weight: 600;
   border-radius: 7px;
   background: #000;
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
   //font-weight: 600;
   border-radius: 7px;
   background: #01bf71;
   /* background: linear-gradient(164.17deg, #FF4763 -19.57%, #AC0053 118.18%); */
   padding: 10px 22px;
   color: #fff;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   /* Second Nav */
   margin-left: 24px;
`

// export const NavBtnSignUpLink = styled(Link)`
//   font-size: 14px;
//   font-weight: 600;
//   border-radius: 7px;
//   background: linear-gradient(164.17deg, #FF4763 -19.57%, #AC0053 118.18%);
//   padding: 10px 22px;
//   color: #fff;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   /* Second Nav */
//   margin-left: 24px;
// `;

// export const Logo = styled(Link)`
//   color: #969696;
//   font-style: normal;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 0px;
//   display: inline-flex;
//   justify-content: space-between;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 3px;
//   height: 100%;
//   cursor: pointer;
// `

// export const NavLink = styled(Link)`
//   backdrop-filter: blur(20px);
//   color: #969696;
//   margin-left: 60px;
//   font-style: normal;
//   font-weight: 600;
//   font-size: 14px;
//   padding: 14px 16px;
//   line-height: 0px;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 5px;
//   height: 100%;
//   cursor: pointer;
  
//   &.active {
//     color: #fff;
//     border-bottom: 2px solid #FF4763;
//     transition: all 0.1s ease-in-out;
//   }
// `;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;
//   /* Second Nav */
//   /* margin-right: 24px; */
//   /* Third Nav */
//   /* width: 100vw;
//   white-space: nowrap; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
//   /* Third Nav */
//   justify-content: flex-end;
//   width: 100vw; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   font-size: 14px;
//   font-weight: 600;
//   border-radius: 7px;
//   background: #151619;
//   padding: 8.5px 20px;
//   color: #fff;
//   outline: none;
//   border: 1px solid #FFFFFF;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   /* Second Nav */
//   margin-left: 24px;
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `;

// export const NavBtnSignUpLink = styled(Link)`
//   font-size: 14px;
//   font-weight: 600;
//   border-radius: 7px;
//   background: linear-gradient(164.17deg, #FF4763 -19.57%, #AC0053 118.18%);
//   padding: 10px 22px;
//   color: #fff;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   /* Second Nav */
//   margin-left: 24px;
// `;