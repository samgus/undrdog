import React, { useState, useEffect } from 'react'
import cx from "classnames";
import Pagination from '@mui/material/Pagination';
import { getReviewsByPlaceId, getReviewsByUserId, getReviewCountByPlaceId, getReviewCountByUserId } from '../../api/reviews';
import { useModal } from '../../contexts/modal.context';
import ReviewCard from '../review-card-2/review-card.component';
import ReviewForm from '../review-form-new/review-form-new.component';
import "./review-list.styles.scss";

import { useAuth } from '../../contexts/auth.context';
import { useNavigate } from 'react-router-dom';

import pencil from "../../images/pencil.svg";

const ReviewList = ({ filter = "recent", userId, placeId, placeName = null, setOverallRating, setReviewCount, writeAReview }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth()
  const { setModal } = useModal();
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentpage] = useState(0);
  const [localReviewCount, setLocalReviewCount] = useState(0);

  const perPageCount = 3;

  useEffect(() => {
    const getReviewsCount = async () => {
      let response
      if (placeId) {
        response = await getReviewCountByPlaceId(placeId)
      } else {
        response = await getReviewCountByUserId(userId)
      }
      console.log("response", response);

      setReviewCount(response.count)
      setLocalReviewCount(response.count)
      setOverallRating(response.overallReviewValue)
    }
    getReviewsCount()
  }, [])
  
  useEffect(() => {
    const getPage = async (userId, placeId, currentPage, filter) => {
      if (placeId) {
        const result = await getReviewsByPlaceId(placeId, perPageCount, currentPage, filter)
        setReviews(result.reviews);
      } else if (userId) {
        const result = await getReviewsByUserId(userId, perPageCount, currentPage, filter)
        setReviews(result.reviews);
      }
    }

    getPage(userId, placeId, currentPage, filter)
  }, [currentPage, userId, placeId, filter])
  return (
    <>
    <div className="review-list flex flex-column align-center">
        {reviews && reviews.map((review, i) => {
            return <div className="flex flex-column" style={{marginBottom: "10px"}}>
              {userId && review.placeName && <h2 className={cx({
                isLink: !!userId
              })}onClick={() => {
                if (userId) {
                  navigate('/place/' + review.placeId)
                }
              }}>{review.placeName} </h2>}
              <div className="review-wrapper">
                <ReviewCard review={review} index={i} />
                {(currentUser && (currentUser?._id === review.userId)) && <div className='edit-review-button' onClick={() => {
                  setModal({
                    modal: "review-form",
                    children: <ReviewForm placeName={review.placeName} userId={userId} edit={true} currentReviewInfo={review} />,
                    show: true
                  });
                }}>Edit<img src={pencil} /></div>}
              </div>
              
            </div>
        })}
        {(!reviews || reviews.length === 0) && <div className="empty-review-list flex flex-column align-center justify-center w-100">
          <h2>There are zero reviews written</h2>
          <p>Add your opinion to help others find their perfect fit!</p>
          <button onClick={writeAReview}>Write a Review</button>
        </div>}
        
      </div>
        {!!localReviewCount && localReviewCount > 0 && <div className="pagination-wrapper position-absolute flex align-center justify-center w-full-view">
            <Pagination onChange={(event, value) => {
            setCurrentpage(value-1);
          }} count={Math.ceil(localReviewCount / perPageCount)} />
          </div>}
      </>
         
  )
}

export default ReviewList
