import React, { useState } from 'react'
import cx from "classnames";
import { createReview, editReview } from '../../api/reviews';
import "./review-form-new.styles.scss";

import step1 from "../../images/step1.svg"
import step2 from "../../images/step2.svg"
import step3 from "../../images/step3.svg"
import checkGrey from "../../images/check-grey.svg"
import checkOlive from "../../images/check-olive.svg"


import ReviewFormStep1 from './review-form-step-1.component';
import ReviewFormStep2 from './review-form-step-2.component';
import ReviewFormStep3 from './review-form-step-3.component';

import 'rsuite/dist/rsuite.min.css';

const ReviewForm = ({ placeId, placeName, edit, onComplete,  currentReviewInfo = {} }) => {  
  console.log("currentReviewInfo", currentReviewInfo)
  const [reviewObject, setReviewObject] = useState({
    shiftsWorked: currentReviewInfo.shiftsWorked || 4,
    weeklyIncome: currentReviewInfo.weeklyIncome || 500,
    sideWork: currentReviewInfo.sideWork || 3,
    position: currentReviewInfo.position || null,
    overall: currentReviewInfo.overallRating || null,
    reviewTitle: currentReviewInfo.reviewTitle || null,
    review: currentReviewInfo.review || null,
    treatmentFromBoss: currentReviewInfo.treatmentFromBoss || null,
    treatmentFromGuest: currentReviewInfo.treatmentFromGuest || null,
    benefits: currentReviewInfo.benefits?.map((benefit) => { return {
      value: benefit,
      label: benefit
    }}) || []
  })
  const [currentStep, setCurrentStep] = useState(0);

  const updateReviewObject = (key, newValue) => {
    const tmpReviewObject = {...reviewObject}
    tmpReviewObject[key] = newValue;
    setReviewObject(tmpReviewObject)
  }
  return (
    <div className="review-form-container">
        {!edit && <h2>Review For {placeName}</h2>}
        {edit && <h2>Edit Review For {placeName}</h2>}
        <div className="review-form-container__steps">
            <div className={cx({ "review-form-container__steps--1": true, highlighted: currentStep >= 0, hidden: currentStep >= 3})}>
                <img src={(currentStep > 0 ? checkOlive : step1)} />
                <span>Initial Questions</span>
            </div>
            <div className={cx({ "review-form-container__steps--1": true, highlighted: currentStep >= 1, hidden: currentStep >= 3 })}>
                <img src={(currentStep > 1 ? checkOlive : step2)} />
                <span>More Details</span>
            </div>
            <div className={cx({ "review-form-container__steps--1": true, highlighted: currentStep >= 2, hidden: currentStep >= 3 })}>
                <img src={(currentStep > 2 ? checkGrey : step3)} />
                <span>Finishing Up</span>
            </div>
            <div className={cx({ "review-form-container__steps--1": true, final: true, highlighted: currentStep >= 3, hidden: currentStep < 3  })}>
                <img src={(currentStep > 2 ? checkGrey : step3)} />
                {edit && <span>You have succcessfully edited your review!</span>}
                {!edit && <span>Thank you for your review!</span>}
                {!edit && <label>You're empowering your peers with accurate information to find a healthy work environment!</label>}
            </div>
        </div>
        {currentStep < 3 && <div className="review-form-container__content">
            {currentStep == 0 && <ReviewFormStep1 
              placeName={placeName} 
              setCurrentStep={setCurrentStep} 
              reviewObject={reviewObject} 
              updateReviewObject={updateReviewObject}
              />}
            {currentStep == 1 && <ReviewFormStep2 
              setCurrentStep={setCurrentStep} 
              reviewObject={reviewObject} 
              updateReviewObject={updateReviewObject}

            />}
            {currentStep == 2 && <ReviewFormStep3 
              setCurrentStep={setCurrentStep} 
              reviewObject={reviewObject} 
              updateReviewObject={updateReviewObject} 
              placeId={placeId}
              reviewId={currentReviewInfo._id}
              edit={edit}
             />}
        </div>}
        {currentStep === 3 &&  <button className="review-form__next-button" onClick={() => {
            if (onComplete) {
              onComplete()
            } else {
              window.location.reload()
            }
        }}>Done</button>}
    </div>
  )
}

export default ReviewForm
