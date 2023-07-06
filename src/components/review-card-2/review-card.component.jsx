import { useState } from "react";
import cx from "classnames";

import "./review-card.styles.scss";

import { ratingsLabels, familyMealLabels, sideWorkLabels } from "../../globals";

import thumpsUp from "../../images/thumbs-up.svg"
import thumpsDown from "../../images/thumbs-down.svg"

import { updateReview } from "../../api/reviews";


import Rating from '@mui/material/Rating';

import { Tooltip } from 'react-tooltip'

import { useModal } from "../../contexts/modal.context";
import { useAuth } from "../../contexts/auth.context";

function ReviewCard({ review, index }) {
    const { currentUser } = useAuth()
    const { setShowModal } = useModal()
    const [upVotes, setUpVotes] = useState(review.upVotes || 0);
    const [downVotes, setDownVotes] = useState(review.downVotes || 0);
    const [voted, setVoted] = useState(null);


    const renderDate = (date) => {
        const dateObject = new Date(date);
        return dateObject.toLocaleDateString()
    }
    console.log("review-card", review)

    return <div className="review-card">
        <div className="review-card__left">
            <div className="review-card__position-header">
                <span className="review-card__posiiton">{review.position}</span>
                <span  className="review-card__date">{renderDate(review.date)}</span>
            </div>
            <div className="review-card__big-rating">
                <span className="review-card__big-rating__label">{review.overallRating}/5</span>
                <Rating readOnly defaultValue={parseInt(review.overallRating)} precision={0.1} />
            </div>
            <div className="review-card__review-body">
                <p>{review.review}</p>
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
                    <img src={thumpsUp}  onClick={async () => {
                        if (currentUser?._id === review.userId) {
                            return;
                        } else if (!currentUser) {
                            setShowModal(true)
                            return;
                        }
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
                            const result = await updateReview(review._id, {
                                voteType: "downvote",
                                unset: true
                            })
                            if (result.success) {
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
                    <span>{upVotes}</span>

                </div>
                
                <div className={cx({
                    "vote-box": true,
                    "downvote": true,
                    "highlighted": voted === 'down'
                })}>
                    
                    <img src={thumpsDown} onClick={async () => {
                        if (currentUser?._id === review.userId) {
                            return;
                        } else if (!currentUser) {
                            setShowModal(true)
                            return;
                        }

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
                            const result = await updateReview(review._id, {
                                voteType: "upvote",
                                unset: true
                            })
                            if (result.success) {
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
                    }} />  

                <span>{downVotes}</span>
                </div>
            </div>
        </div>
        <div className="review-card__right">
            <div className="review-card__row">
                <span>Shifts Per Week: <span className="review-card__row-val">{review.shiftsWorked}</span></span>
            </div>
            <div className="review-card__row">
                <span>Estimated Weekly Income: <span className="review-card__row-val">${review.weeklyIncome}</span></span>
            </div>
            <div className="review-card__row">
                <span>Side Work Intensity: <span className="review-card__row-val">{sideWorkLabels[review.sideWork]}</span></span>
            </div>
            <div className="review-card__row">
                <span>Treatment From Guests: <span className="review-card__row-val">{ratingsLabels[review.treatmentFromGuest]}</span></span>
            </div>
            <div className="review-card__row">
                <span>Treatment From Boss: <span className="review-card__row-val">{ratingsLabels[review.treatmentFromBoss]}</span> </span>
            </div>
            <div className="review-card__row">
                <span>Benefits: <span className="review-card__row-val">{review.benefits.join(', ')}</span></span>
            </div>
        </div>
    </div>
}

export default ReviewCard;