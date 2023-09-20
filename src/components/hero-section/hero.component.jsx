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
import SearchBar from '../search-bar/search-bar.component'

import womanBarista from "../../images/womanBarista.svg";

const HeroSection = () => {
  const [heroVisibility, setHeroVisibility] = useState(false);
  const {opacity} = useSpring({opacity: heroVisibility ? 1 : 0});

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
     
      <HeroBg style={{ background: `url(${womanBarista})`}}>
        
      </HeroBg> 
        <AnimatedHero style={styles}>
        <div data-aos="fade-up" data-aos-duration="1400">
          <HeroH1>Have a voice, tell your story.</HeroH1>
          <HeroP>
              {/* Find a healthy work environment that suits you */}
              Rate your restaurant and help others find a healthy place to work
          </HeroP>
          <HeroBtnWrapper>
              <SearchBar />
          </HeroBtnWrapper>
          </div>
        </AnimatedHero>
        {/* </div> */}
    </HeroContainer>
  )
}

export default HeroSection
