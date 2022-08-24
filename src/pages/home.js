import React, {useState} from 'react';
import HeroSection from '../components/hero-section/hero.component';
import InfoSection from '../components/info-section/info.component';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/info-section/info.data';
import Services from '../components/info-section/services.component';
import NavBar from '../components/nav-bar/nav-bar.component';
import Sidebar from '../components/side-bar/side-bar.component';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjThree}/>
    </>
  );
};

export default Home;