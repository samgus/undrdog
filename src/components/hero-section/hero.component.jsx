import React from 'react'
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
  // ArrowForward, 
  // ArrowRight 
} from './hero.styles'
import SearchBar from '../search-bar/search-bar.component'

const HeroSection = () => {
    // const [ hover, setHover ] = useState(false);
    // const onHover = () => {
    //     setHover(!hover)
    // }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Have a voice. Tell your story</HeroH1>
        <HeroP>
            Find a healthy work environment that suits you
        </HeroP>
        <HeroBtnWrapper>
            <SearchBar />
            {/* <RestaurantsApi /> */}
            {/* <Button to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                > 
                Get started {hover ? <ArrowForward/> : <ArrowRight />}
            </Button> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
