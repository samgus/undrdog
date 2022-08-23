import React, {useState} from 'react';
import HeroSection from '../components/hero/hero.component';
import NavBar from '../components/nav-bar/nav-bar.component';
import Sidebar from '../components/side-bar/side-bar.component';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '90vh'
    //   }}
    // >
    //   <h1>Welcome to UNDRDOG!</h1>
    // </div>
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <HeroSection/>
    </>
  );
};

export default Home;