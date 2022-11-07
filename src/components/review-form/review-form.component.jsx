import React, { useState } from 'react'
import { createReview } from '../../api/reviews';

const ReviewForm = ({ placeId }) => {
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
    <div>
      <form onSubmit={submitReview}>
        <h2>Your Review:</h2>
        <textarea value={reviewText} placeholder='Enter Review' onChange={(e) => {
            setReviewText(e.target.value)
        }}></textarea>
        <br />
        <label>Position: </label>
        <input value={position} type='text' placeholder='Enter' onChange={(e => setPosition(e.target.value))}/>
        <br />
        <label>Weekly Income:</label>
        <input value={weeklyIncome} type='text' placeholder='Enter' onChange={(e => setWeeklyIncome(e.target.value))}/>
        <br />
        <h2>Ratings</h2>
        <label>Treatment From Boss:</label>
        <select value={treatmentFromBoss} onChange={(e => setTreatmentFromBoss(e.target.value))}>
          <option value={1}>Terrible</option>
          <option value={2}>Bad</option>
          <option value={3}>Good</option>
          <option value={4}>Great</option>
          <option value={5}>Amazing</option>
        </select>
        <br />
        <label>Treatment From Guest:</label>
        <select value={treatmentFromGuest} onChange={(e => setTreatmentFromGuest(e.target.value))}>
          <option value={1}>Terrible</option>
          <option value={2}>Bad</option>
          <option value={3}>Good</option>
          <option value={4}>Great</option>
          <option value={5}>Amazing</option>
        </select>
        <br />
        <label>Family Meal:</label>
        <select value={familyMeal} onChange={(e => setFamilyMeal(e.target.value))}>
          <option value={1}>Terrible</option>
          <option value={2}>Bad</option>
          <option value={3}>Good</option>
          <option value={4}>Great</option>
          <option value={5}>Amazing</option>
        </select>
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  )
}

export default ReviewForm
