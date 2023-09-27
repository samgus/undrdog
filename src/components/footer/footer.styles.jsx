import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: #232422;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 0px 24px 48px 24px;
    }
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    
    display: flex;
    align-items: flex-start;
    margin: 16px;
    flex-direction: column;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #C8C1B6;
    
    @media screen and (max-width: 768px) {
        flex-direction: ${({isPrivacyCopy}) => isPrivacyCopy ? 'row' : 'column'};
        text-decoration: ${({isPrivacyCopy}) => isPrivacyCopy ? 'none' : 'underline'};
        padding: 10px;
        width: 100%;
        align-items: center;
        margin:0px;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #C8C1B6;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 12px;

    &:hover {
        color: #E5DDD4 !important;
        transition: 0.2s ease-out;
        text-decoration: underline !important;
        /* font-weight: bold; */
        
    }
    @media screen and (max-width: 768px) {
        margin-bottom: ${({isPrivacyCopy}) => isPrivacyCopy ? '0.5rem' : '1.2rem'};
        font-size: ${({isPrivacyCopy}) => isPrivacyCopy ? '9px' : '12px'};
        font-weight: ${({isPrivacyCopy}) => isPrivacyCopy ? 'normal' : 'bold'};
        margin-right: ${({isPrivacyCopy}) => isPrivacyCopy ? '15px' : '0px'};

    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: 40px auto 0 auto;
    }
`

export const SocialLogo = styled(Link)`
    color: #C8C1B6;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 24px;
    &:hover {
        color: #E5DDD4;
        transition: 0.3s ease-out;
        text-decoration: none;
    }
`

export const WebsiteRights = styled.small`
    color: #C8C1B6;
    margin-bottom: 16px;
    width: 100%;
    text-align: center;
    margin-top: 20px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 175px;

    @media screen and (max-width: 768px) {
        justify-content: center;
            width: 100%;
            margin-top: 10px;

    }
`

export const SocialIconLink = styled.a`
    color: #C8C1B6;
    font-size: 24px;
    margin-right: 30px;
    &:last-child {
        margin-right: 0px;
    }
    &:hover {
        color: #e3dcd4 !important;
        transition: 0.3s ease-out;
        text-decoration: none;
    }
`