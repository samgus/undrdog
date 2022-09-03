import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
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

const Footer = () => {
  const toggleHome = () => {
        scroll.scrollToTop()
      }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Site</FooterLinkTitle>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/help">Help</FooterLink>
                            <FooterLink to="/contact">Contact Us</FooterLink>
                            <FooterLink to="/site-guidelines">Site Guidelines</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Legal</FooterLinkTitle>
                            <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
                            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
                            <FooterLink to="/copyright-policy">Copyright Policy</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>UNDRDOG</SocialLogo>
                    <WebsiteRights>Undrdog © {new Date().getFullYear()}, All Rights Reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/samgus93/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/samfredric/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/in/samgustafsson93/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
