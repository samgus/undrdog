import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button.styles';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper,
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,  
    ImgWrap,
    Img 
} from './info.styles';

import { useAuth } from "../../contexts/auth.context";
import { useModal } from '../../contexts/modal.context';

import "./info.scss";

import manWithApron from "../../images/manWithApron.svg"

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
    description2, 
    buttonLabel, 
    img, 
    alt, 
    primary, 
    dark, 
    dark2
}) => {
    const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { setShowModalSignUp } = useModal()
  return (
    <InfoContainer>
        <InfoWrapper>
            <div className="info-section__left">
                <div data-aos="fade-in" data-aos-duration="1000" style={{ width: "100%"}}>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <Subtitle darkText={darkText}>{description2}</Subtitle>
                        <BtnWrap>
                            <Button to='#'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            href=""
                            primary={true}
                            dark={1}
                            onClick={() => {
                                if (currentUser) {
                                    navigate("/user/"+currentUser._id)
                                } else {
                                    setShowModalSignUp(true)
                                }
                            }}
                            >{currentUser ? "View Profile" : buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </div>
            </div>
            <div className="info-section__right">
                <div className="info-section__image">
                    <img src={manWithApron} />
                </div>
            </div>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
