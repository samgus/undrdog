import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import betterShiftLogo from "../../images/betterShiftLogo-Vanilla.svg";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
} from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink
} from './footer.styles'

import "../../styles/footer.scss";


const Footer = () => {
  const toggleHome = () => {
        scroll.scrollToTop()
      }
const navigate = useNavigate();
const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })
  
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems isPrivacyCopy={false}>
                            <FooterLink to="/about" isPrivacyCopy={false} >About</FooterLink>
                            <FooterLink to="/contact" isPrivacyCopy={false} >Contact Us</FooterLink>
                            <FooterLink to="/site-guidelines" isPrivacyCopy={false}>Site Guidelines</FooterLink>
                    </FooterLinkItems>
                    
                    <FooterLinkItems isPrivacyCopy={true}>
                            <FooterLink to="/terms-of-service" isPrivacyCopy={true}>Terms of Service</FooterLink>
                            <FooterLink to="/privacy-policy" isPrivacyCopy={true}>Privacy Policy</FooterLink>
                            <FooterLink to="/copyright-policy" isPrivacyCopy={true}>Copyright Policy</FooterLink>
                    </FooterLinkItems>
                    {!isDesktop && <SocialIcons>
                        {/* <SocialIconLink href="https://www.facebook.com/samgus93/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink> */}
                        <SocialIconLink href="https://www.instagram.com/bettershift/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/company/better-shift/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>}
                    {!isDesktop && <WebsiteRights>© {new Date().getFullYear()}, All Rights Reserved.</WebsiteRights>}
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <img src={betterShiftLogo} className="footer__logo" onClick={(e) => {
                        navigate('/')
                    }}/>

                    {isDesktop && <WebsiteRights>Bettershift © {new Date().getFullYear()}, All Rights Reserved.</WebsiteRights>}
                    {isDesktop && <SocialIcons>
                        {/* <SocialIconLink href="https://www.facebook.com/samgus93/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink> */}
                        <SocialIconLink href="https://www.instagram.com/bettershift/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/in/samgustafsson93/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>}
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
