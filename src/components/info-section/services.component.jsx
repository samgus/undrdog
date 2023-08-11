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

  
  return (
    <ServicesContainer id="services">
      <div className="services__card" >
        <h3>Manage and edit your ratings</h3>
        <div className="services__action" >
          <div className="services__action-btn-wrapper" onClick={(e) => {
            setShowModalSignUp(true)
          }}>
            <span className="services__action-text">SIGN UP TODAY</span>
            <span className="services__action-arrow">{">"}</span>
          </div>
          <div className="services__half-line"></div>
          
        </div>
      </div>
      <div className="services__card">
        <h3>Keep your ratings anonymous</h3>
        <div className="services__action">
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
      <h3>Echo or challenge your peer's reviews</h3>
        <div className="services__action">
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
