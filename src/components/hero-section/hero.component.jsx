import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { useSpring, animated,easings } from '@react-spring/web'
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
} from './hero.styles'

import { useMediaQuery } from 'react-responsive'

import SearchBar from '../search-bar/search-bar.component'

import womanBarista from "../../images/womanBarista.svg";
import womanBaristaTablet from "../../images/WomanBaristaMobile.jpeg"

import "../../styles/hero.scss";

const HeroSection = () => {
  const [heroVisibility, setHeroVisibility] = useState(false);
  const {opacity} = useSpring({opacity: heroVisibility ? 1 : 0});
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const styles = useSpring({
    config: {duration: 500},
    easing: {
      value: 'ease-in-out'
    },
    from: {
      opacity: 0,

      transform: "scale(0.9)"
    },
    to: {
      opacity: 1,
      transform: "scale(1)"
    },
  })

  const AnimatedHero = HeroContent;

  return (
    <HeroContainer id='home'>
     

        <HeroBg style={{ backgroundImage: (isDesktop) ? `url(${womanBarista})` : `url(${womanBaristaTablet})`}}>
        </HeroBg> 
        {!isDesktop && <div className="hero__bg-overlay"></div>}   
        <AnimatedHero style={styles}>
        <div data-aos="fade-up" data-aos-duration="1400">
          <div className="hero__content">
            <HeroH1>Have a voice, tell your story.</HeroH1>
            <HeroP>
                Rate your restaurant and help others find a healthy place to work
            </HeroP>
            <HeroBtnWrapper>
                <SearchBar />
            </HeroBtnWrapper>
          </div>
        </div>
        </AnimatedHero>
        {/* </div> */}
    </HeroContainer>
  )
}

export default HeroSection
