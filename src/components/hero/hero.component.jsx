import React, {useState} from 'react'
import { Button } from '../button.styles'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './hero.styles'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
    const [ hover, setHover ] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>You have a voice, Tell your story</HeroH1>
        <HeroP>
            Find a healthy work environment that suits you
        </HeroP>
        <HeroBtnWrapper>
            <Button to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'>
                Get started {hover ? <ArrowForward/> : <ArrowRight />}
            </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
