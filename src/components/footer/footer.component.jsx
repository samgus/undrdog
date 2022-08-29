import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    // FaTwitter, 
    // FaYoutube 
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
                            <FooterLink to="/signin">About</FooterLink>
                            <FooterLink to="/signin">Help</FooterLink>
                            <FooterLink to="/signin">Contact Us</FooterLink>
                            <FooterLink to="/signin">Site Guidelines</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Legal</FooterLinkTitle>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                            <FooterLink to="/signin">Privacy Policy</FooterLink>
                            <FooterLink to="/signin">Copyright Policy</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                {/* <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper> */}
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>UNDRDOG</SocialLogo>
                    <WebsiteRights>Undrdog © {new Date().getFullYear()}, All Rights Reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/samgus93/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/samfredric/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        {/* <SocialIconLink href="/" target="_blank" aria-label="YouTube"><FaYoutube /></SocialIconLink> */}
                        {/* <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink> */}
                        <SocialIconLink href="https://www.linkedin.com/in/samgustafsson93/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
