import React, { useState } from 'react'
import { createReview } from '../../api/reviews';

import "./review-form.styles.css";

const ReviewForm = ({ placeId, placeName }) => {
  const [reviewText, setReviewText] = useState();
  const [weeklyIncome, setWeeklyIncome] = useState()
  const [treatmentFromBoss, setTreatmentFromBoss] = useState(1);
  const [treatmentFromGuest, setTreatmentFromGuest] = useState(1);
  const [familyMeal, setFamilyMeal] = useState(1);
  const [position, setPosition] = useState();

  const submitReview = async (e) => {
    e.preventDefault();
    
    // make the fetch/axios request to our server to create a review
    const result = await createReview({
      review: reviewText,
      weeklyIncome,
      treatmentFromBoss,
      treatmentFromGuest,
      familyMeal,
      position,
      placeId
    })
    if (result.success) {
      alert('You created your review')
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
          <h2>Leave A Review For {placeName}!</h2>
        </div>
        <div className="review-form__body flex flex-column">
          <label>Tell us about your experience</label>
          <textarea value={reviewText} placeholder='What is it like to work here?' onChange={(e) => {
              setReviewText(e.target.value)
          }}></textarea>


        <label>Position: </label>
        <input value={position} type='text' placeholder='Position' onChange={(e => setPosition(e.target.value))}/>
        <label>Weekly Income:</label>
        <input value={weeklyIncome} type='text' placeholder='Weekly Income' onChange={(e => setWeeklyIncome(e.target.value))}/>
        {/* <h2>Ratings</h2> */}
        <label>Treatment From Boss:</label>
        <select value={treatmentFromBoss} onChange={(e => setTreatmentFromBoss(e.target.value))}>
          <option value={1}>Bad</option>
          <option value={2}>Okay</option>
          <option value={3}>Good</option>
          <option value={4}>Great</option>
          <option value={5}>Amazing</option>
        </select>
        <label>Treatment From Guests:</label>
        <select value={treatmentFromGuest} onChange={(e => setTreatmentFromGuest(e.target.value))}>
          <option value={1}>Bad</option>
          <option value={2}>Okay</option>
          <option value={3}>Good</option>
          <option value={4}>Great</option>
          <option value={5}>Amazing</option>
        </select>
        <label>Family Meal:</label>
        <select value={familyMeal} onChange={(e => setFamilyMeal(e.target.value))}>
          <option value={1}>No Family Meal</option>
          <option value={2}>Bad</option>
          <option value={3}>Good</option>
          <option value={4}>Great</option>
          <option value={5}>Amazing</option>
        </select>
        <button type="submit">Submit Review</button>
        </div>
        {/* <textarea value={reviewText} placeholder='What is it like to work here?' onChange={(e) => {
            setReviewText(e.target.value)
        }}></textarea>
        <br /> */}
        

      </form>
    </div>
  )
}

export default ReviewForm
