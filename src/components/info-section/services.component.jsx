import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-4.svg'
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from './services.styles'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Workers Unite!</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Manage and edit your ratings</ServicesH2>
            {/* <ServicesP>Manage and edit your ratings</ServicesP> */}
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Your ratings are always anonymous</ServicesH2>
            {/* <ServicesP>Your ratings are always anonymous</ServicesP> */}
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Agree or disagree with your peer's ratings</ServicesH2>
            {/* <ServicesP>Like or dislike ratings</ServicesP> */}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
