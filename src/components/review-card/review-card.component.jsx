import { useState } from "react";
import cx from "classnames";

import "./review-card.styles.scss";

import { ratingsLabels, familyMealLabels, sideWorkLabels } from "../../globals";

import { updateReview } from "../../api/reviews";

import { FaThumbsDown, FaThumbsUp, FaUser, FaMoneyBillWave, FaRegBell, FaLessThanEqual } from "react-icons/fa";

import { MdFastfood, MdBusinessCenter } from "react-icons/md"

import { Tooltip } from 'react-tooltip'

import { useModal } from "../../contexts/modal.context";
import { useAuth } from "../../contexts/auth.context";

function ReviewCard({ review, index }) {
    const { currentUser } = useAuth()
    const { setShowModal } = useModal()
    const [upVotes, setUpVotes] = useState(review.upVotes || 0);
    const [downVotes, setDownVotes] = useState(review.downVotes || 0);
    const [voted, setVoted] = useState(null);

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
            let ratingRange = Math.abs(redMid-redLow);
            let ratingLowScore = (ratingPer*ratingRange)/5
            red = redLow - ratingLowScore

            ratingRange = greenMid-greenLow;
            ratingLowScore = (ratingPer*ratingRange)/5
            green = greenLow + ratingLowScore
        } else {
            // high rating do same logic for mid to high range
            let ratingRange = Math.abs(redHigh-redMid);
            let ratingLowScore = (ratingPer*ratingRange)/5
            red = redMid - ratingLowScore

            ratingRange = greenHigh-greenMid;
            ratingLowScore = (ratingPer*ratingRange)/5
            green = greenMid + ratingLowScore
        }
       return  `rgb(${red}, ${green}, 0)`;
    }
    const renderBigRating = () => {
        return ((review.treatmentFromBoss + review.treatmentFromGuest + review.familyMeal + review.sideWork)/4).toFixed(1)
    }

    const renderDate = (date) => {
        const dateObject = new Date(date);
        return dateObject.toLocaleDateString()
    }

    return <div className="review-card flex flex-col">
        <div className="review-card__main-content flex">
            <div className="review-card__big-rating flex align-center justify-center">
                <div className="review-card__big-rating-circle"
                     style={{
                        backgroundColor: "white",
                        borderSize: "2px",
                        borderColor: ratingToColor(1),
                        color: ratingToColor(1)
                     }}>{renderBigRating()}</div>
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
            <Tooltip anchorId={"side-work-"+review._id}/>
            <span className="review-card__footer-rating"  id={"side-work-"+review._id} data-tooltip-content="Side Work">
                <MdFastfood className="review-card__icon" />
                <span>
                    {sideWorkLabels[review.sideWork]}
                </span>
            </span>
            <Tooltip anchorId={"weekly-income-"+review._id}/>
            <span className="review-card__footer-rating"id={"weekly-income-"+review._id} data-tooltip-content="Weekly Income">
                <FaMoneyBillWave className="review-card__icon" /> <span>{review.weeklyIncome}</span>
            </span>
            <Tooltip anchorId={"shifts-worked-"+review._id}/>
            <span className="review-card__footer-rating"id={"shifts-worked-"+review._id} data-tooltip-content="Shifts worked">
                <FaMoneyBillWave className="review-card__icon" /> <span>{review.shiftsWorked} shift(s) worked</span>
            </span>
            </div>        
            <div className={cx({
                "vote-container": true,
                "flex": true,
                "disabled-btn": currentUser?._id === review.userId
            })}>
                <div className={cx({
                    "vote-box": true,
                     "upvote": true,
                     "highlighted": voted === 'up'
                })}>
                    <span>{upVotes}</span>
                    <FaThumbsUp  onClick={async () => {
                        if (currentUser?._id === review.userId) {
                            return;
                        } else if (!currentUser) {
                            setShowModal(true)
                            return;
                        }
                        console.log(voted)
                        if (voted === 'up') {
                            setVoted(null)
                            const result = await updateReview(review._id, {
                                voteType: "upvote",
                                unset: true
                            })
                            if (result.success) {
                                setUpVotes(upVotes - 1)
                            }
                            return
                        } else if (voted === 'down') {
                            console.log("voted down")
                            const result = await updateReview(review._id, {
                                voteType: "downvote",
                                unset: true
                            })
                            if (result.success) {
                                console.log("Trigger downvote")
                                setDownVotes(downVotes - 1)
                            }
                        }

                        setVoted('up')
                        if (currentUser) {
                            const result = await updateReview(review._id, {
                                voteType: "upvote"
                            })
                            if (result.success) {
                                setUpVotes(upVotes + 1)
                            }
                        } 
                        
                    }} />
                </div>
                
                <div className={cx({
                    "vote-box": true,
                     "downvote": true,
                     "highlighted": voted === 'down'
                })}>
                    <span>{downVotes}</span>
                    <FaThumbsDown onClick={async () => {
                        if (currentUser?._id === review.userId) {
                            return;
                        } else if (!currentUser) {
                            setShowModal(true)
                            return;
                        }
                        console.log(voted)

                        if (voted === 'down') {
                            setVoted(null)
                            const result = await updateReview(review._id, {
                                voteType: "downvote",
                                unset: true
                            })
                            if (result.success) {
                                setDownVotes(downVotes - 1)
                            }
                            return
                        } else if (voted === 'up') {
                            console.log("voted up")
                            const result = await updateReview(review._id, {
                                voteType: "upvote",
                                unset: true
                            })
                            if (result.success) {
                                console.log("Trigger upvote")
                                setUpVotes(upVotes - 1)
                            }
                        }

                        setVoted("down")
                        if (currentUser) {
                            const result = await updateReview(review._id, {
                                voteType: "downvote"
                            })
                            if (result.success) {
                                setDownVotes(downVotes + 1)
                            }
                        } 
                    }}/>  
                </div>
            </div>
        </div>
    </div>
}

export default ReviewCard;