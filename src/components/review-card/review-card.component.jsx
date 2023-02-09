import { useState } from "react";

import "./review-card.styles.scss";

import { ratingsLabels, familyMealLabels } from "../../globals";

import { updateReview } from "../../api/reviews";

import { FaThumbsDown, FaThumbsUp, FaUser, FaMoneyBillWave, FaRegBell, FaLessThanEqual } from "react-icons/fa";

import { MdFastfood, MdBusinessCenter } from "react-icons/md"

import { Tooltip } from 'react-tooltip'

function ReviewCard({ review, index }) {
    const [upVotes, setUpVotes] = useState(review.upVotes || 0);
    const [downVotes, setDownVotes] = useState(review.downVotes || 0);

    const ratingToColor = (rating) => {
        const redLow = 255;
        const redMid = 230;
        const redHigh = 0;
        const greenLow = 0;
        const greenMid = 125;
        const greenHigh = 255;

        const ratingPer = rating / 5 ;
        const lowRating = ratingPer < .5;
        let red;
        let green;
        if (lowRating) {
            let ratingRange = redMid-redLow;
            let ratingLowScore = (lowRating*ratingRange)/.5
            red = redLow - ratingLowScore

            ratingRange = greenMid-greenLow;
            ratingLowScore = (lowRating*ratingRange)/.5
            green = greenLow + ratingLowScore
        } else {
            // high rating do same logic for mid to high range
        }
       return  `rgb(${red}, ${green}, 0)`;
    }
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
        <div className="review-card__footer-content flex justify-between">
            
            
                    
             <div className="flex flex-wrap">
            <Tooltip anchorId={"treatment-from-boss-"+review._id}/>
             <span id={"treatment-from-boss-"+review._id} data-tooltip-content="Treatment from boss" className="review-card__footer-rating">
                <MdBusinessCenter className="review-card__icon" />
                <span>
                    {ratingsLabels[review.treatmentFromBoss]}
                </span>
            </span>
            <Tooltip anchorId={"treatment-from-guest-"+review._id}/>

             <span id={"treatment-from-guest-"+review._id}data-tooltip-content="Treatment from guest" className="review-card__footer-rating">
                <FaUser className="review-card__icon" />
                <span>
                    {ratingsLabels[review.treatmentFromGuest]}
                </span>
            </span>
            <Tooltip anchorId={"family-meal-"+review._id}/>
            <span className="review-card__footer-rating"  id={"family-meal-"+review._id} data-tooltip-content="Family Meal">
                <MdFastfood className="review-card__icon" />
                <span>
                    {familyMealLabels[review.familyMeal]}
                </span>
            </span>
            <Tooltip anchorId={"weekly-income-"+review._id}/>
            <span className="review-card__footer-rating"id={"weekly-income-"+review._id} data-tooltip-content="Weekly Income">
                <FaMoneyBillWave className="review-card__icon" /> <span>${review.weeklyIncome}</span>
            </span>
            </div>        
            <div className="vote-container flex">
                <div className="vote-box upvote">
                    <span>{upVotes}</span>
                    <FaThumbsUp  onClick={async () => {
                        const result = await updateReview(review._id, {
                            voteType: "upvote"
                        })
                        if (result.success) {
                            setUpVotes(upVotes + 1)
                        }
                    }} />
                </div>
                
                <div className="vote-box downvote">
                    <span>{downVotes}</span>
                    <FaThumbsDown onClick={async () => {
                    const result = await updateReview(review._id, {
                        voteType: "downvote"
                    })
                    if (result.success) {
                        setDownVotes(downVotes + 1)
                    }
                    }}/>  
                </div>
            </div>
        </div>
    </div>
}

export default ReviewCard;