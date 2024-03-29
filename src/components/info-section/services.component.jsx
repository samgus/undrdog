import React from 'react'
import { 
    ServicesContainer, 
    // ServicesP 
} from './services.styles'
import { Button } from '../button.styles'
import { 
  TextWrapper,
  BtnWrap, 
  TopLine,
  Heading,
  Subtitle
} from './info.styles';
import { useModal } from '../../contexts/modal.context';
import { useAuth } from '../../contexts/auth.context';

import { useMediaQuery } from 'react-responsive'

import { useNavigate } from "react-router-dom";

import "./services.scss";

const Services = ({
  buttonLabel, 
  primary, 
  dark, 
  dark2
}) => {
  const navigate = useNavigate()
  const { setShowModalSignUp } = useModal()
  const { currentUser } = useAuth()

  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })
  
  return (
    <ServicesContainer id="services">
      <div className="services__card" >
        <div data-aos="fade-zoom-in" data-aos-duration="1500">
        <h3>Manage and edit your ratings</h3>
        </div>
        <div className="services__action" data-aos="fade-zoom-in" data-aos-duration="1000">
          <div className="services__action-btn-wrapper" onClick={(e) => {
            if (currentUser) {
              navigate("/user/"+currentUser._id+"?deepLink=reviews")
            } else {
              setShowModalSignUp(true)
            }
          }}>
            <span className="services__action-text">{currentUser ? "REVIEWS" : "SIGN UP TODAY"}</span>
            <span className="services__action-arrow">{">"}</span>
          </div>
          <div className="services__half-line"></div>
        </div>
        
      </div>
      <div className="services__card">
        <div data-aos="fade-zoom-in" data-aos-duration="1500">
        <h3>Keep your ratings anonymous</h3>
        </div>
        <div className="services__action" data-aos="fade-zoom-in" data-aos-duration="1000">
          <div className="services__action-btn-wrapper" onClick={(e) => {
            navigate('/privacy-policy')
          }}>
            <span className="services__action-text">READ OUR PRIVACY POLICY</span>
            <span className="services__action-arrow">{">"}</span>
          </div>
          <div className="services__half-line"></div>
          
        </div>
      </div>
      <div className="services__card">
        <div data-aos="fade-zoom-in" data-aos-duration="1500">
          <h3>Echo or challenge your peer's reviews</h3>
        </div>
        <div className="services__action" data-aos="fade-zoom-in" data-aos-duration="1000">
          <div className="services__action-btn-wrapper" onClick={(e) => {
            navigate('/about')
          }}>
              <span className="services__action-text">LEARN MORE ABOUT BETTERSHIFT</span>
              <span className="services__action-arrow">{">"}</span>
          </div>
          <div className="services__half-line"></div>
          
        </div>
      </div>
    </ServicesContainer>
  )
}

export default Services
