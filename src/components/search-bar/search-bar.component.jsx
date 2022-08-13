import React from 'react'
import './search-bar.styles.css'
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className='wrapper'>
        <div className='search-bar'>
            <input type='text' placeholder='Search'/>
            <div className='autocom-box'>
                <li>Login Form in HTML & CSS</li>
                <li>How to learn HTML & CSS</li>
                <li>How to learn JavaScript</li>
                <li>How to become a Freelancer</li>
                <li>How to become a Web Designer</li>
            </div>
            <div className='icon'><FaSearch /></div>
        </div>
    </div>

  );
}

export default SearchBar
