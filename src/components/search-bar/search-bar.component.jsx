import React from 'react'
import { useState } from 'react';
import AutoComplete from "react-autocomplete";
 import './search-bar.styles.css'
 import { FaSearch } from 'react-icons/fa';
 import RestaurantsApi from '../RestaurantsApi';

 const members = [
  {
    name: "crohaco",
    twitter: "https://twitter.com/crohaco",
    icon:
      "https://pbs.twimg.com/profile_images/959293912690049025/xH9RPWDc_400x400.jpg"
  },
  {
    name: "shimizukawa",
    twitter: "https://twitter.com/shimizukawa",
    icon:
      "https://pbs.twimg.com/profile_images/1452813575/shimizukawa_half1_megane_180_400x400.png"
  },
  {
    name: "takanory",
    twitter: "https://twitter.com/takanory",
    icon: "https://pbs.twimg.com/profile_images/192722095/kurokuri_400x400.jpg"
  },
  {
    name: "tell-k",
    twitter: "https://twitter.com/tell_k",
    icon:
      "https://pbs.twimg.com/profile_images/1045138776224231425/3GD8eWeG_400x400.jpg"
  }
];

 const SearchBar = () => {
  const [name, setName] = useState("");

   return (
     <div className='wrapper'>
         <div className='search-bar'>
             {/* <input type='text' placeholder='Your Restuarant'/>
             <div className='autocom-box'>
                 <li>Login Form in HTML & CSS</li>
                 <li>How to learn HTML & CSS</li>
                 <li>How to learn JavaScript</li>
                 <li>How to become a Freelancer</li>
                 <li>How to become a Web Designer</li>
             </div> */}
             {/* <div className='icon'><FaSearch /></div> */}
             <AutoComplete
          getItemValue={(item) => item.name}
          items={members.filter((member) => member.name.includes(name))}
          renderItem={(item, isHighlighted) => (
            <div
              style={{
                verticalAlign: "middle",
                background: isHighlighted ? "lightgray" : "white"
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={item.twitter}
                style={{
                  border: "none",
                  backgroundColor: "none",
                  padding: 0,
                  dipslay: "inline-block"
                }}
              >
              </a>
              <div style={{ display: "inline-block", minWidth: 200 }}>
                {item.name}
              </div>
            </div>
          )}
          wrapperStyle={{
            position: "relative",
          }}
          menuStyle={{
            zIndex: 2,
            position: "absolute",
            top: 50,
            left: 0,
            overflow: "auto",
            maxHeight: 100
          }}
          value={name || ""}
          inputProps={{
            placeholder: "Your Restaurant",
            style: { fontSize: 18, width: "100%", padding: '5px 20px', width: '420px' }
          }}
          onChange={(e) => setName(e.target.value)}
          onSelect={(name) => setName(name)}
        />
               <div className='icon'><FaSearch /></div>
         </div>

     </div>
   );
 }

 export default SearchBar;