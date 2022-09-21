import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import AutoComplete from "react-autocomplete";
 import './search-bar.styles.css'
 import { FaSearch } from 'react-icons/fa';
 import RestaurantsApi from '../RestaurantsApi';
 import { searchForMembers } from '../../api/members';

//  const members = [
//   {
//     name: "crohaco",
//     twitter: "https://twitter.com/crohaco",
//     icon:
//       "https://pbs.twimg.com/profile_images/959293912690049025/xH9RPWDc_400x400.jpg"
//   },
//   {
//     name: "shimizukawa",
//     twitter: "https://twitter.com/shimizukawa",
//     icon:
//       "https://pbs.twimg.com/profile_images/1452813575/shimizukawa_half1_megane_180_400x400.png"
//   },
//   {
//     name: "takanory",
//     twitter: "https://twitter.com/takanory",
//     icon: "https://pbs.twimg.com/profile_images/192722095/kurokuri_400x400.jpg"
//   },
//   {
//     name: "tell-k",
//     twitter: "https://twitter.com/tell_k",
//     icon:
//       "https://pbs.twimg.com/profile_images/1045138776224231425/3GD8eWeG_400x400.jpg"
//   }
// ];

 const SearchBar = () => {
  const [name, setName] = useState("");
  // const [inputChange, setInputChange] = useState(false);
  // const [countries, setCountries] = useState([]);
  const [members, setMembers] = useState([])

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (e) => {
    async function fetchMembers() {
      setMembers(await searchForMembers(e.target.value))
    }
    if (window.google){
      fetchMembers()
    }
    setName(e.target.value);
  }
  const optimizedFn = useCallback(debounce(handleChange), []);

  const handleClick = (e) => {
    
  }
   return (
     <div className='wrapper'>
       <div className={name.length > 0 ? 'search-bar search-bar-change' : 'search-bar'}>
         <input type="text" placeholder='Your Restaurant' onChange={optimizedFn} className={name.length > 0 ? 'input-change': ""} />
         <div className='icon' style={{ zIndex: "3" }}><FaSearch /></div>
       </div>
       <ul className={name.length > 0 ? 'list-items list-items-show': 'list-items'}>
         {members.filter(member => member.name.includes(name)).map((filteredName, i) => (
           <li key={i}>
             {/* {console.log(filteredName)} */}
             {filteredName.name}
           </li>
         ))
         }
       </ul>
     </div>
   );
 }

 export default SearchBar;





//  <AutoComplete
//               getItemValue={(item) => item.name}
//               items={members.filter((member) => member.name.includes(name))}
//               renderItem={(item, isHighlighted) => (
//             <div
//               style={{
//                 verticalAlign: "middle",
//                 background: isHighlighted ? "lightgray" : "white",
//                 padding: 10
//               }}
//               >
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href={item.twitter}
//                 style={{
//                   border: "none",
//                   backgroundColor: "none",
//                   padding: 0,
//                   dipslay: "inline-block",
//                   marginTop: 30
//                 }}
//               >
//               </a>
//               <div style={{ display: "inline-block", minWidth: 195 }}>{item.name}</div>
//           </div>
//           )}
//           wrapperStyle={{
//             position: "relative",
//           }}
//           menuStyle={{
//             zIndex: 2,
//             position: "absolute",
//             top: 50,
//             left: 0,
//             overflow: "auto",
//             maxHeight: 200,
//             borderRadius: 20,
//             borderTopLeftRadius: 0,
//             borderTopRightRadius: 0
//           }}
//           value={name || ""}
//           inputProps={{
//             placeholder: "Your Restaurant",
//             style: { fontSize: 18, padding: '5px 20px', width: '420px' }
//           }}
//           onChange={(e) => handleChange(e)}
//           onSelect={(name) => setName(name)}/>