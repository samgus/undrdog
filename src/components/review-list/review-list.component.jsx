import React, { useState, useEffect } from 'react'
import cx from "classnames";
import { getReviewsByPlaceId, getReviewsByUserId } from '../../api/reviews';
import { useModal } from '../../contexts/modal.context';
import ReviewCard from '../review-card-2/review-card.component';
import ReviewForm from '../review-form-new/review-form-new.component';
import "./review-list.styles.css";

import { useAuth } from '../../contexts/auth.context';
import { useNavigate } from 'react-router-dom';

import CreateIcon from '@mui/icons-material/Create';

const ReviewList = ({ userId, placeId, setOverallRating, setReviewCount }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth()
  const { setModal } = useModal();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      if (placeId) {
        const result = await getReviewsByPlaceId(placeId)
        setReviews(result.reviews);
        setOverallRating(result.overallReviewValue)
      } else if (userId) {
        const result = await getReviewsByUserId(userId)
        setReviews(result.reviews);
      }
    }
    getReviews()
  }, [placeId, userId]);

  useEffect(() => {
    if (reviews && setReviewCount) {
      setReviewCount(reviews.length)
    }
  }, [reviews])
  return (
    <div className="review-list">
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
                }}>Edit<CreateIcon sx={{
                  width: "15px"
                }} /></div>}
              </div>
              
              </div>
        })}
    </div>
  )
}

export default ReviewList
