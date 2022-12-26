import { useState } from "react";

import "./review-card.styles.scss";

import { ratingsLabels, familyMealLabels } from "../../globals";

import { updateReview } from "../../api/reviews";


function ReviewCard({ review }) {
    const [upVotes, setUpVotes] = useState(review.upVotes || 0);
    const [downVotes, setDownVotes] = useState(review.downVotes || 0);
    /*
        - position
        - treatment from boss (rating)
        - treatment from guest (rating)
        - weekly income
        - family meal (rating)
        - review text
    */
    
    const renderBigRating = () => {
        return ((review.treatmentFromBoss + review.treatmentFromGuest + review.familyMeal)/3).toFixed(1)
    }

    console.log("review", review);
    const renderDate = (date) => {
        const dateObject = new Date(date);
        return dateObject.toLocaleDateString()
    }

    return <div className="review-card flex flex-col">
        <div className="review-card__main-content flex">
            <div className="review-card__big-rating flex align-center justify-center">
                <div className="review-card__big-rating-circle">{renderBigRating()}</div>
            </div>
            <div className="review-card_content flex flex-col w-100">
                <div className="review-card_content-header flex align-center justify-between w-100">
                    <span>Position: {review.position.toUpperCase()}</span>
                    <span>{renderDate(review.date)}</span>
                </div>
                <div className="review-card_content-body flex align-center">
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
        <div>
            {/* Votes: {upVotes - downVotes} */}
            {upVotes}
            <button onClick={async () => {
                const result = await updateReview(review._id, {
                    voteType: "upvote"
                })
                if (result.success) {
                    setUpVotes(upVotes + 1)
                }
            }}>Agree</button>
            {downVotes}
            <button onClick={async () => {
                const result = await updateReview(review._id, {
                    voteType: "downvote"
                })
                if (result.success) {
                    setDownVotes(downVotes + 1)
                }
            }}>Disagree</button>
        </div>
        <div className="review-card__footer-content flex align-center flex-wrap w-100">
            <span className="review-card__footer-rating">
                Treatment From Boss:&nbsp;
                <span>
                    {ratingsLabels[review.treatmentFromBoss]}
                </span>
            </span>
            <span className="review-card__footer-rating">
                Treatment From Guests:&nbsp;
                <span>
                    {ratingsLabels[review.treatmentFromGuest]}
                </span>
            </span>
            <span className="review-card__footer-rating">
                Family Meal:&nbsp;
                <span>
                    {familyMealLabels[review.familyMeal]}
                </span>
            </span>
            <span className="review-card__footer-rating">Weekly Income: ${review.weeklyIncome}</span>
        </div>
    </div>
}

export default ReviewCard;