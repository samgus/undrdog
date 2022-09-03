import React from 'react';
import ScrollToTop from '../components/scrollToTop';
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <ScrollToTop />
      <h1>About</h1>
    </div>
  );
};

export default About;