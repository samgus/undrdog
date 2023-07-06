import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById } from '../api/auth';
import { useAuth } from "../contexts/auth.context";
import EditProfile from '../components/edit-profile/edit-profile';
import ReviewList from '../components/review-list/review-list.component';
import { useModal } from '../contexts/modal.context';
import { getReviewsByUserId } from '../api/reviews';
import cx from "classnames";


import UserProfileMain from '../components/user-profile-main/user-profile-main.component';
import UserProfileMyReviews from '../components/user-profile-my-reviews/user-profile-my-reviews.component';
import UserProfileSecurity from '../components/user-profile-security/user-profile-security.component';
import UserProfileDelete from '../components/user-profile-delete/user-profile-delete.component';

import "../styles/user-profile.scss";

const UserProfile = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, fetchedUser } = useAuth();
  const { userId } =  useParams();
  const { setModal } = useModal();
  const [userReviews, setUserReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState("My Profile")
  // useEffect(() => {
  //   getReviewsByUserId.then((result) => {
  //     setUserReviews(result.reviews);
  //   })
  // }, [])

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
  
  return (
    <div
    className="w-100"
      style={{
        backgroundColor: "#F6F6F6",
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: "column",
        minHeight: '90vh',
        padding: "100px 150px 325px"
      }}
    >  
        <div className="user-profile__header flex flex-column justify-center mb-2 ">
          <h1>Account Settings</h1>
        {/* {currentUser && <h1>{currentUser?.name}</h1>}
        {currentUser && <h3>{currentUser?.email}</h3>}
        <button onClick={() => {
          setModal({
            modal: "edit-profile",
            children: <EditProfile  currentUser={currentUser} setCurrentUser={setCurrentUser} />,
            show: true
          });
        }}>Edit Profile</button> */}
      
        </div>

        <div className="user-profile__content flex">
          {/* <h2>My Reviews</h2>
          <ReviewList userId={userId} setReviewCount={null} /> */}
          <div className="user-profile__sidebar">
            <ul>
              <li className={cx({ selected: currentPage==="My Profile" })} onClick={() => setCurrentPage("My Profile")}>My Profile</li>
              {/* <li>Notifications</li> */}
              <li className={cx({ selected: currentPage==="My Reviews" })} onClick={() => setCurrentPage("My Reviews")}>My Reviews</li>
              <li className={cx({ selected: currentPage==="Security" })} onClick={() => setCurrentPage("Security")}>Security</li>
              <li className={cx({ "highlighted-red": true, selected: currentPage==="Delete Account" })} onClick={() => setCurrentPage("Delete Account")}>Delete Account</li>
            </ul>
          </div>
          <div className="user-profile__body">
          {currentPage === "My Profile" && <UserProfileMain />}
          {currentPage === "My Reviews" && <UserProfileMyReviews />}
          {currentPage === "Security" && <UserProfileSecurity />}
          {currentPage === "Delete Account" && <UserProfileDelete />}
          </div>
        </div>
    </div> 
  );
};

export default UserProfile;