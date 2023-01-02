import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById } from '../api/auth';
import { useAuth } from "../contexts/auth.context";
import EditProfile from '../components/edit-profile/edit-profile';
import ReviewList from '../components/review-list/review-list.component';
import { useModal } from '../contexts/modal.context';
const UserProfile = () => {
  const navigate = useNavigate();
  const { currentUser, fetchedUser } = useAuth();
  const { userId } =  useParams();
  const { setModal } = useModal();

  useEffect(() => {
    if (fetchedUser) {
      if (currentUser) {
          if (currentUser?._id !== userId) {
              alert("You do not have access to this page!")
          }
      } else {
        navigate('/')
      }
    }
  }, [currentUser, fetchedUser])
  
  if (!fetchedUser) {
    return <div></div>
  }
  /*
    Profile
    - edit Password
    Features
    - show user reviews list
      - pagination?
      - use review card component
    - make user review deleteable
    - make user review editable
    - make review
  */
  return (
    <div
    className="w-100"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: "column",
        height: '90vh',
        padding: "0px 150px 325px"
      }}
    >  
        <div className="user-profile__header flex flex-column justify-center mb-2 ">
        {currentUser && <h1>{currentUser?.name}</h1>}
        {currentUser && <h3>{currentUser?.email}</h3>}
        <button onClick={() => {
          setModal({
            modal: "edit-profile",
            children: <EditProfile  currentUser={currentUser}/>,
            show: true
          });
        }}>Edit Profile</button>
      
        </div>
        <div className="user-profile__content flex flex-column">
          <h2>My Reviews</h2>
          <ReviewList userId={userId} />
        </div>
    </div> 
  );
};

export default UserProfile;