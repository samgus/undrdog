import React, { useState, useEffect } from 'react'
import { getReviewsByPlaceId } from '../../api/reviews';
import ReviewCard from '../review-card/review-card.component';

const ReviewList = ({ placeId, setOverallRating }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
       const result = await getReviewsByPlaceId(placeId)
       console.log(result);
       setReviews(result.reviews);
       setOverallRating(result.overallReviewValue)
    }
    getReviews()
  }, [placeId]);

  return (
    <div>
        {reviews && reviews.map((review) => {
            return <ReviewCard review={review} />
        })}
    </div>
  )
}

export default ReviewList
