import React, { useState } from 'react'
import { createReview, editReview } from '../../api/reviews';

import "./review-form.styles.css";

const ReviewForm = ({ placeId, placeName, edit, currentReviewInfo = {} }) => {
  const [errors, setErrors] = useState([]);
  const [reviewText, setReviewText] = useState(currentReviewInfo.review || '');
  const [weeklyIncome, setWeeklyIncome] = useState(currentReviewInfo.weeklyIncome || null)
  const [treatmentFromBoss, setTreatmentFromBoss] = useState(currentReviewInfo.treatmentFromBoss || null);
  const [treatmentFromGuest, setTreatmentFromGuest] = useState(currentReviewInfo.treatmentFromGuest || null);
  const [familyMeal, setFamilyMeal] = useState(currentReviewInfo.familyMeal || null);
  const [position, setPosition] = useState(currentReviewInfo.position || null);
  const [shiftsWorked, setShiftsWorked] = useState(currentReviewInfo.shiftsWorked || null);
  const [sideWork, setSideWork] = useState(currentReviewInfo.sideWork || null);

  const characterLimit = 500;

  const submitReview = async (e) => {
    setErrors([])

    e.preventDefault();
    
    const tmpErrors = []
    if (!position || position.length === 0) {
      tmpErrors.push("You must enter in your position")
    }

    if (!reviewText || reviewText.length === 0) {
      tmpErrors.push("You must enter in a review")
    }

    if (!weeklyIncome || weeklyIncome.length === 0) {
      tmpErrors.push("You must enter in a weekly income");
    }

    if (!treatmentFromBoss || treatmentFromBoss === 'no-value') {
      tmpErrors.push("You must rate the treatment from your boss");
    }

    if (!treatmentFromGuest || treatmentFromGuest === 'no-value') {
      tmpErrors.push("You must rate the treatment from the guests");
    }

    if (!familyMeal || familyMeal === 'no-value') {
      tmpErrors.push("You must rate the family meal");
    }

    if (!shiftsWorked || shiftsWorked.length === 0) {
      tmpErrors.push("You must enter the shifts worked");
    }

    if (!sideWork || sideWork.length === 'no-value') {
      tmpErrors.push("You must enter in the side work");
    }

    if (tmpErrors.length > 0) {
      setErrors(tmpErrors)
      return false;
    }

    // make the fetch/axios request to our server to create a review
    const data = {
      review: reviewText,
      weeklyIncome,
      treatmentFromBoss,
      treatmentFromGuest,
      familyMeal,
      position,
      shiftsWorked,
      sideWork,
      placeId
    };

    let result;
    if (edit) {
      result = await editReview(currentReviewInfo._id, data)
    } else {
      result = await createReview(data)
    }
    
    if (result.success) {
      // if (edit) {
      //   alert('You edited your review')
      // } else {
      //   alert('You created your review')
      // }
      window.location.reload();
    } else {
      alert("Sorry your review did not save, try again")
    }
    return;
  }
  
  return (
    <div className="review-form">
      <form onSubmit={submitReview}>
        <div className="review-form__header flex">
          {!edit && <h2>Leave A Review For {placeName}!</h2>}
          {edit && <h2>Editing Review</h2>}
        </div>
        <div className="review-form__body flex flex-column">
          <label>Tell us about your experience</label>
          <div className="review-form__textarea-wrapper">
          <textarea maxLength={characterLimit} value={reviewText} placeholder='What is/was it like to work here?' onChange={(e) => {
            if (e.target.value.length <= 500) {
              setReviewText(e.target.value)
            }
          }}></textarea>
          {reviewText && <div className='review-form__character-limit'>{reviewText.length} / {characterLimit}</div>}
          </div>
          


        <label>Position: </label>
        <select value={position} onChange={(e => setPosition(e.target.value))}>
          <option value={''}>---</option>
          <option value={'Server'}>Server</option>
          <option value={'Server Assistant/Support Role'}>Server Assistant/Support Role</option>
          <option value={'Bartender'}>Bartender</option>
          <option value={'Barback'}>Barback</option>
          <option value={'Barista'}>Barista</option>
          <option value={'Busser'}>Busser</option>
          <option value={'Runner'}>Runner</option>
          <option value={'Host/Hostess'}>Host/Hostess</option>
          <option value={'Line Cook'}>Line Cook</option>
          <option value={'Line Cook'}>Prep Cook</option>
          <option value={'Sous Chef'}>Sous Chef</option>
        </select>
        <label>Weekly Income:</label>
        <select value={weeklyIncome} onChange={(e => setWeeklyIncome(e.target.value))}>
          <option value={''}>---</option>
          <option value={'Under $200'}>Under $200</option>
          <option value={'$200 - $300'}>$200 - $300</option>
          <option value={'$300 - $400'}>$300 - $400</option>
          <option value={'$400 - $500'}>$400 - $500</option>
          <option value={'$500 - $600'}>$500 - $600</option>
          <option value={'$600 - $700'}>$600 - $700</option>
          <option value={'$700 - $800'}>$700 - $800</option>
          <option value={'$800 - $900'}>$800 - $900</option>
          <option value={'$900 - $1000'}>$900 - $1000</option>
          <option value={'Over $1000'}>Over $1000</option>
        </select>
        {/* <h2>Ratings</h2> */}
        <label>Treatment From Boss:</label>
        <select value={treatmentFromBoss} onChange={(e => setTreatmentFromBoss(e.target.value))}>
          <option value={'no-value'}>---</option>
          <option value={1}>Horrible</option>
          <option value={2}>Poor</option>
          <option value={3}>Good</option>
          <option value={4}>Great</option>
          <option value={5}>Amazing!</option>
        </select>
        <label>Treatment From Guests:</label>
        <select value={treatmentFromGuest} onChange={(e => setTreatmentFromGuest(e.target.value))}>
          <option value={'no-value'}>---</option>
          <option value={0}>N/A</option>
          <option value={1}>Horrible</option>
          <option value={2}>Bad</option>
          <option value={3}>Good</option>
          <option value={4}>Great</option>
          <option value={5}>Amazing!</option>
        </select>
        <label>Family Meal:</label>
        <select value={familyMeal} onChange={(e => setFamilyMeal(e.target.value))}>
          <option value={'no-value'}>---</option>
          <option value={0}>N/A</option>
          <option value={1}>Horrible</option>
          <option value={2}>Poor</option>
          <option value={3}>Good</option>
          <option value={4}>Great</option>
          <option value={5}>Amazing!</option>
        </select>
        <label>Shifts Worked:</label>
        <select value={shiftsWorked} onChange={(e => setShiftsWorked(e.target.value))}>
          <option value={''}>---</option>
          <option value={'1'}>1 Shift</option>
          <option value={'2'}>2 Shifts</option>
          <option value={'3'}>3 Shifts</option>
          <option value={'4'}>4 Shifts</option>
          <option value={'5'}>5 Shifts</option>
          <option value={'6'}>6 Shifts</option>
          <option value={'7'}>7 Shifts</option>
          <option value={'8+'}>8+ Shifts</option>
        </select>
        <label>Side Work:</label>
        <select value={sideWork} onChange={(e => setSideWork(e.target.value))}>
          <option value={'no-value'}>---</option>
          <option value={1}>Stressful</option>
          <option value={2}>Pretty Bad</option>
          <option value={3}>Average</option>
          <option value={4}>Barely Any</option>
          <option value={5}>None</option>
        </select>
        {errors.length > 0 && errors.map((error) => {
          return <p className="error-text">{error}</p>
        })}
        <button type="submit">{edit ? "Edit Review" : "Submit Review"}</button>
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
