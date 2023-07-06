import React, {useState, useEffect} from 'react';
import HeroSection from '../components/hero-section/hero.component';
import InfoSection from '../components/info-section/info.component';
import InfoCarousel from '../components/info-section/info-carousel.component';
import { getStartedObj, homeObjOne } from '../components/info-section/info.data';
import Services from '../components/info-section/services.component';
import NavBar from '../components/nav-bar/nav-bar.component';
import Sidebar from '../components/side-bar/side-bar.component';
 
import { useSearchParams } from 'react-router-dom';

import { useModal } from '../contexts/modal.context';
const Home = () => {
  const { setShowModal } = useModal()
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (searchParams.get('signin') === "true") {
      setShowModal(true)
    }
  }, [])

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoCarousel />
      <Services {...getStartedObj} />    
    </>
  );
};

export default Home;