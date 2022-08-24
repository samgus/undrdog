import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarLink, 
    SidebarMenu, 
    SideBtnWrap, 
    SidebarRoute } from './side-bar.styles';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/sign-in">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  )
}

export default Sidebar;
