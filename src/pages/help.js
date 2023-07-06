import React from 'react';
import ScrollToTop from '../components/scrollToTop';
const Help = () => {
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
      {/* <h1>Help </h1> */}
      <h1>Email: samgus93@gmail.com</h1>
    </div>
  );
};

export default Help;