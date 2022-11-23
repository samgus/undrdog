import "./review-card.styles.scss";

import { ratingsLabels, familyMealLabels } from "../../globals";

function ReviewCard({ review }) {
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

    return <div className="review-card flex flex-col">
        <div className="review-card__main-content flex">
            <div className="review-card__big-rating flex align-center justify-center">
                <div className="review-card__big-rating-circle">{renderBigRating()}</div>
            </div>
            <div className="review-card_content flex flex-col">
                <div className="review-card_content-header flex align-center">
                    <span>Position: {review.position.toUpperCase()}</span>
                    
                </div>
                <div className="review-card_content-body flex align-center">
                    <p>{review.review}</p>
                </div>
            </div>
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