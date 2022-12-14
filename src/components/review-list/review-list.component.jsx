import React, { useState, useEffect } from 'react'
import { getReviewsByPlaceId, getReviewsByUserId } from '../../api/reviews';
import ReviewCard from '../review-card/review-card.component';

const ReviewList = ({ userId, placeId, setOverallRating }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      if (placeId) {
        const result = await getReviewsByPlaceId(placeId)
        console.log(result);
        setReviews(result.reviews);
        setOverallRating(result.overallReviewValue)
      } else if (userId) {
        const result = await getReviewsByUserId(userId)
        console.log(result);
        setReviews(result.reviews);
      }
    }
    getReviews()
  }, [placeId, userId]);

  return (
    <div>
        {reviews && reviews.map((review) => {
            return <ReviewCard review={review} />
        })}
    </div>
  )
}

export default ReviewList
