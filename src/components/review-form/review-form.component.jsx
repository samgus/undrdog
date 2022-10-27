import React, { useState } from 'react'

const ReviewForm = () => {
  const [reviewText, setReviewText] = useState()
  return (
    <div>
      <form>
        <textarea value={reviewText} placeholder='Enter Review' onChange={(e) => {
            setReviewText(e.target.value)
        }}></textarea>
        <label>Treatment From Boss</label>
        <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
      </form>
    </div>
  )
}

export default ReviewForm
