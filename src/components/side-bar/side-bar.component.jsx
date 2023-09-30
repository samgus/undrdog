import React from 'react'
import { Link } from "react-router-dom";
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarLink, 
    SidebarMenu, 
    SideBtnWrap, 
    SidebarRoute } from './side-bar.styles';
    import { 
      FaFacebook, 
      FaInstagram, 
      FaLinkedin, 
  } from 'react-icons/fa'
    import "../../styles/sidebar.scss"
import { useNavigate } from 'react-router-dom';
    import { useAuth } from '../../contexts/auth.context';

    import { useModal } from '../../contexts/modal.context';
const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const { setShowModalSignUp, setShowModal } = useModal()

  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_731_8958)">
          <path d="M18.3002 5.7107C17.9102 5.3207 17.2802 5.3207 16.8902 5.7107L12.0002 10.5907L7.11022 5.7007C6.72022 5.3107 6.09021 5.3107 5.70021 5.7007C5.31021 6.0907 5.31021 6.7207 5.70021 7.1107L10.5902 12.0007L5.70021 16.8907C5.31021 17.2807 5.31021 17.9107 5.70021 18.3007C6.09021 18.6907 6.72022 18.6907 7.11022 18.3007L12.0002 13.4107L16.8902 18.3007C17.2802 18.6907 17.9102 18.6907 18.3002 18.3007C18.6902 17.9107 18.6902 17.2807 18.3002 16.8907L13.4102 12.0007L18.3002 7.1107C18.6802 6.7307 18.6802 6.0907 18.3002 5.7107Z" fill="#353E42"/>
          </g>
          <defs>
          <clipPath id="clip0_731_8958">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
        </Icon>
        <SidebarWrapper>
          <ul className="sidebar__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Search For A Restaurant</Link></li>
            <li><Link to="/about">About Us</Link></li>
            {!currentUser && <li onClick={() => {toggle(); setShowModalSignUp(true)}}>Get Started</li>}
            <li><Link to="/contact">Contact Us</Link></li>
            {currentUser && <li onClick={() => {navigate("/user/"+currentUser._id)}}>Profile</li>}
            {!currentUser && <li onClick={() => {toggle(); setShowModal(true)}}>Log In</li>}
          </ul>
          <div className='sidebar__social-icons'>
            <a href="https://www.instagram.com/bettershift/" target="_blank" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/samgustafsson93/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>

          </div>
        </SidebarWrapper>
      </SidebarContainer>
  )
}

export default Sidebar;
