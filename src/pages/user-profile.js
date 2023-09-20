import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById } from '../api/auth';
import { useAuth } from "../contexts/auth.context";
import EditProfile from '../components/edit-profile/edit-profile';
import ReviewList from '../components/review-list/review-list.component';
import { useModal } from '../contexts/modal.context';
import { getReviewsByUserId } from '../api/reviews';
import cx from "classnames";
import ScrollToTop from '../components/scrollToTop';


import UserProfileMain from '../components/user-profile-main/user-profile-main.component';
import UserProfileMyReviews from '../components/user-profile-my-reviews/user-profile-my-reviews.component';
import UserProfileMyReviewsExpand from '../components/user-profile-my-reviews-expand/user-profile-my-reviews-expand.component';
import UserProfileSettings from '../components/user-profile-settings/user-profile-settings.component';

import "../styles/user-profile.scss";

const UserProfile = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, fetchedUser } = useAuth();
  const { userId } =  useParams();
  
  const { setModal } = useModal();
  const [userReviews, setUserReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [currentPage, setCurrentPage] = useState("My Profile")
  const [reviewUpdate, setReviewUpdate] = useState(false)
  console.log(currentUser);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search.slice(1))
    console.log(params.get("deepLink"))
    if (params.get("deepLink") === "profile") {
      setCurrentPage("My Profile")
    }
    if (params.get("deepLink") === "reviews") {
      setCurrentPage("My Reviews")
    }
    if (params.get("deepLink") === "settings") {
      setCurrentPage("Settings")
    }
  }, [])

  // this one happens on render
  useEffect(() => {
    getReviewsByUserId(userId, ).then((result) => {
      setUserReviews(result.reviews);
    })
  }, [])

  // update selected review when reviews update
  useEffect(() => {
    if (selectedReview) {
      const newReview = userReviews.find((review) => {
        return review._id === selectedReview._id
      })
      setSelectedReview({...newReview})
    }
   
  }, [userReviews]);

  // this one is triggered when a review is changed
  useEffect(() => {
    if (reviewUpdate) {
      console.log("reviewUpdate", reviewUpdate)
      getReviewsByUserId(userId).then((result) => {
        setUserReviews(result.reviews);
      })
      setReviewUpdate(false)
    }
  }, [reviewUpdate])

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
        minHeight: '60vh',
        padding: "100px 150px"
      }}
    >  
        <ScrollToTop />       
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

        <div className="user-profile__content flex" data-aos="fade-up" data-aos-duration="1200">
          {/* <h2>My Reviews</h2>
          <ReviewList userId={userId} setReviewCount={null} /> */}
          <div className="user-profile__sidebar">
            <ul>
              <li className={cx({ selected: currentPage==="My Profile" })} onClick={() => setCurrentPage("My Profile")}>My Profile</li>
              {/* <li>Notifications</li> */}
              <li className={cx({ selected: currentPage==="My Reviews" })} onClick={() => setCurrentPage("My Reviews")}>My Reviews</li>
              <li className={cx({ selected: currentPage==="Settings" })} onClick={() => setCurrentPage("Settings")}>Settings</li>
              <li className="error-red" onClick={() => navigate("/logout")}>Logout</li>
            </ul>
          </div>
          <div className="user-profile__body">
          {currentPage === "My Profile" && <UserProfileMain />}
          {!selectedReview && currentPage === "My Reviews" && <UserProfileMyReviews setSelectedReview={setSelectedReview} reviews={userReviews} />}
          {selectedReview && currentPage === "My Reviews" && <UserProfileMyReviewsExpand setReviewUpdate={setReviewUpdate} selectedReview={selectedReview} setSelectedReview={setSelectedReview}/>}
          {currentPage === "Settings" && <UserProfileSettings currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          </div>
        </div>
    </div> 
  );
};

export default UserProfile;