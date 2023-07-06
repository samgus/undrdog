import React, { useRef, useState, useMemo, useEffect } from 'react'
import Video from '../../videos/video.mp4'
// import { Button } from '../button.styles'
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
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";


const HeroSection = () => {
  const [heroVisibility, setHeroVisibility] = useState(false);
  const {opacity} = useSpring({opacity: heroVisibility ? 1 : 0});

    // const [ hover, setHover ] = useState(false);
    // const onHover = () => {
    //     setHover(!hover)
    // }
  //   React.useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     // In your case there's only one element to observe:     
  //     if (entries[0].isIntersecting) {
      
  //       // Not possible to set it back to false like this:
  //       setHeroVisibility(true);
        
  //       // No need to keep observing:
  //       observer.unobserve(domRef.current);
  //     }
  //   });
    
  //   observer.observe(domRef.current);
    
  //   return () => observer.disconnect();
  // }, []);

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      {/* <animated.div style={{ opacity }}> */}
      
        <HeroContent >
          <HeroH1>Have a voice, tell your story.</HeroH1>
          <HeroP>
              Find a healthy work environment that suits you
          </HeroP>
          <HeroBtnWrapper>
              <SearchBar />
          </HeroBtnWrapper>
        </HeroContent>
      {/* </animated.div> */}
    </HeroContainer>
  )
}

export default HeroSection
