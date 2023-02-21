import React, { useState } from 'react'
import { createReview } from '../../api/reviews';

import "./review-form.styles.css";

const ReviewForm = ({ placeId, placeName }) => {
  const [reviewText, setReviewText] = useState();
  const [weeklyIncome, setWeeklyIncome] = useState('Under $200')
  const [treatmentFromBoss, setTreatmentFromBoss] = useState(1);
  const [treatmentFromGuest, setTreatmentFromGuest] = useState(1);
  const [familyMeal, setFamilyMeal] = useState(1);
  const [position, setPosition] = useState();
  const [shiftsWorked, setShiftsWorked] = useState('1');
  const [sideWork, setSideWork] = useState(1);

  const submitReview = async (e) => {
    e.preventDefault();
    
    if (!position || position.length === 0) {
      alert("You must enter in your position")
    }

    if (!reviewText || reviewText.length === 0) {
      alert("You must enter in a review")
    }

    // make the fetch/axios request to our server to create a review
    const result = await createReview({
      review: reviewText,
      weeklyIncome,
      treatmentFromBoss,
      treatmentFromGuest,
      familyMeal,
      position,
      shiftsWorked,
      sideWork,
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
        <select value={position} onChange={(e => setPosition(e.target.value))}>
          <option value={'---'}>---</option>
          <option value={'Server'}>Server</option>
          <option value={'Server Assistant/Support Role'}>Server Assistant/Support Role</option>
          <option value={'Bartender'}>Bartender</option>
          <option value={'Barback'}>Barback</option>
          <option value={'Barista'}>Barista</option>
          <option value={'Busser'}>Busser</option>
          <option value={'Runner'}>Runner</option>
          <option value={'Host/Hostess'}>Host/Hostess</option>
          <option value={'Line Cook'}>Line Cook</option>
        </select>
        <label>Weekly Income:</label>
        <select value={weeklyIncome} onChange={(e => setWeeklyIncome(e.target.value))}>
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
        <label>Shifts Worked:</label>
        <select value={shiftsWorked} onChange={(e => setShiftsWorked(e.target.value))}>
          <option value={'---'}>---</option>
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
          <option value={1}>Too much</option>
          <option value={2}>Pretty bad</option>
          <option value={3}>Normal amount</option>
          <option value={4}>Barely any</option>
          <option value={5}>No side work</option>
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
