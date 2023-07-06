import React from 'react';
import ScrollToTop from '../components/scrollToTop';
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        margin: '50px'
      }}
    >
      <ScrollToTop />
      {/* <h1>About</h1> */}
      <h2>Undrdog is a community platform where employees in hospitality are able to post reviews of their place of work to give an accurate description on what it is like to actually work at a potential place of employment before setting foot in the door. If someone is interested in particular place of employment, they can see how much money they will make based on the weekly shifts that they have worked, how management, guests, and peers might treat them. This give the potential employee the power to know beforehand if that establishment would a great work environment for them or not, which is something everyone deserves and is often overlooked in the field of hospitality.</h2>
    </div>
  );
};

export default About;