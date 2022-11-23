import React from 'react'
import { useState, useCallback } from 'react';
 import './search-bar.styles.css'
 import { FaSearch } from 'react-icons/fa';
 import { searchForMembers, createMember, getMemberByPlaceId } from '../../api/members';

 const SearchBar = ({ isHeader = false }) => {
  const [name, setName] = useState("");
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

  const handleClick = async (member) => {
    const place = await getMemberByPlaceId(member.place_id)
    if (!place) {
      await createMember(member)
    }
    window.location = "/place/" + member.place_id

  }
   return (
     <div className={`${isHeader ? 'header-search-bar wrapper' : 'wrapper'}`}>
       <div className={name.length > 0 ? 'search-bar search-bar-change' : 'search-bar'}>
         <input type="text" placeholder='Your Restaurant' onChange={optimizedFn} className={name.length > 0 ? 'input-change': ""} />
         <div className='icon' style={{ zIndex: "3" }}><FaSearch /></div>
       </div>
       <ul className={name.length > 0 ? 'list-items list-items-show': 'list-items'}>
         {members.map((memberObject, i) => (
           <li onClick={() => {
            handleClick(memberObject)
           }} key={i}>
             <p>{memberObject.name}</p>
            <span className="list-items__address">{memberObject.formatted_address}</span>
           </li>
         ))
         }
       </ul>
     </div>
   );
 }

 export default SearchBar;