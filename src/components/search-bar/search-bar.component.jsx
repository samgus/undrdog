import React from 'react'
import { useState, useCallback, useEffect } from 'react';
 import './search-bar.styles.scss'
 import { FaSearch } from 'react-icons/fa';
 import { searchForMembers, createMember, getMemberByPlaceId } from '../../api/members';
import cx from "classnames";

import { useAuth } from '../../contexts/auth.context';
 const SearchBar = ({ isHeader = false }) => {
  const { currentUser } = useAuth();
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
     <div onMouseLeave={(e) => {
      if (members && members.length > 0 && name.length > 0) {
        e.currentTarget.classList.add("force-open")
      } else {
        e.currentTarget.classList.remove("force-open")
      }
     }} className={cx({
        "header-search-bar": isHeader, 
        "user-logged-in": !!currentUser,
        wrapper: true
     })}>
       <div className={cx({
            "search-bar-change": name.length > 0,
            'search-bar' : true,
            "list-showing": name.length > 0 && members.length > 0
          })}>

         <input type="text" placeholder='Search for restaurant' onChange={optimizedFn} className={name.length > 0 ? 'input-change': ""} />
         <div className='icon' style={{ zIndex: "3" }}><FaSearch /></div>
       </div>
       <ul className={name.length > 0 ? 'list-items list-items-show': 'list-items'}>
         {members.map((memberObject, i) => (
           <li className="list-item" onClick={() => {
            console.log("memberObject", memberObject)
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