import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #151619;
  height: 80px;
  display: flex;
  justify-content: flex-start;

  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
  
`;

export const Logo = styled(Link)`
  color: #969696;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 0px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 0 3px;
  height: 100%;
  cursor: pointer;
`

export const NavLink = styled(Link)`
  backdrop-filter: blur(20px);
  color: #969696;
  margin-left: 60px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  padding: 14px 16px;
  line-height: 0px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 5px;
  height: 100%;
  cursor: pointer;
  
  &.active {
    color: #fff;
    border-bottom: 2px solid #FF4763;
    transition: all 0.1s ease-in-out;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  border-radius: 7px;
  background: #151619;
  padding: 8.5px 20px;
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
`;

export const NavBtnSignUpLink = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  border-radius: 7px;
  background: linear-gradient(164.17deg, #FF4763 -19.57%, #AC0053 118.18%);
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
`;