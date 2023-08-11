import React from 'react';
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
  const { currentUser } = useAuth()
  const { setShowModalSignUp } = useModal()
  return (
    <InfoContainer lightBg={lightBg} id={id} img={img} >
        <div className="black-bg">
        </div>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <div data-aos="fade-up" data-aos-duration="1400">
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
                            primary={primary ? 1 : 0}
                            dark={1}
                            style={{
                                backgroundColor: "white",
                                color: "black"
                            }}
                            onClick={() => {
                                if (!!currentUser) {
                                    document.querySelector('.search-bar').scrollIntoView()
                                    document.querySelector('.search-bar input').select()
     
                                } else {
                                    setShowModalSignUp(true)
                                }
                            }}
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </div>
                </Column1>
                <Column2>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
