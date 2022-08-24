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
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>We help reduce your fees and increase your revenue.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Virtual offices</ServicesH2>
            <ServicesP>You can access our platform online anywhere.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Premium benefits</ServicesH2>
            <ServicesP>Unlock special membership. Get off ur ass and sign up.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
