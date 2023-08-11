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
     
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg> 
      {/* <div data-aos="fade-up">      */}
        <AnimatedHero style={styles}>
        <div data-aos="fade-up" data-aos-duration="1400">
          <HeroH1>Have a voice, tell your story.</HeroH1>
          <HeroP>
              Find a healthy work environment that suits you
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
