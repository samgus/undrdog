import React from 'react';
import SearchBar from '../components/search-bar/search-bar.component';

const Home = () => {
  return (
  <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        fontSize: '10px'
      }}
    >
      <h1><SearchBar/></h1>
    </div>
  );
};

export default Home;