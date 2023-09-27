import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 760px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%), 
            linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%); */
        z-index: 2;
    }

    @media screen and (max-width: 768px) {
        height: 480px
    }

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        background-size: calc(893px * .82) calc(595px * .82);
        background-position: center;
        background-repeat: no-repeat;
        
    }
`
export const FadeUp = styled.div`
    opacity: 0;
    transform: translateY(50px);
    animation-name: fadeUp;
    animation-duration: 1s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;

    @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 44px;
    font-weight: 450;
    text-align: center;

    @media screen and (max-width: 768px) {
        color: #FFF;
        text-align: center;
        font-family: "Montserrat";
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 22px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    max-width: 650px;

    @media screen and (max-width: 768px) {
        color: #FFF;
        text-align: center;
        font-family: "Montserrat";
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
    }

`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-top: 15px !important;

    }
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`