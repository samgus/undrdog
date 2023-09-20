import { useState } from "react";
import filledStar from "../../images/star-filled-olive.svg";
import unFilledStar from "../../images/star-unfilled.svg";
function ReviewFormStep1({ placeName, setCurrentStep, reviewObject, updateReviewObject }) {
    const [error, setError] = useState()
    const [hoveredOverallExp, setHoveredOverallExp] = useState(null);
    const [overallExp, setOverallExp] = useState(reviewObject['overall']);

    const characterLimit = 500;

    const validateAndNext = () => {
        setError(null)
        if (overallExp === null) {
            setError("Please select a rating for your overall experience")
            return 
        } else if (!reviewObject['position']) {
            setError("Please enter a job title")
            return 
        } else if (!reviewObject['reviewTitle']) {
            setError("Please enter a description title")
            return 
        } else if (!reviewObject['review']) {
            setError("Please enter your review")
            return 
        }

        setCurrentStep(1)
    }
    return <div>
        <div className="review-form-row">
            <h3>Overall Experience</h3>  
            {/* Create custom component for the overall rating stars */}
            <div className="review-form-row__overall">
                {Array(5).fill().map((x, index) => {
                    console.log(index)
                    const isFilled = (overallExp !== null && (index < overallExp)) || (hoveredOverallExp !== null && (index <= hoveredOverallExp));
                    return <img 
                    onClick={() => {
                        if (index+1 == overallExp) {
                            updateReviewObject("overall", null)
                            setOverallExp(null)
                        } else {
                            updateReviewObject("overall", index+1)
                            setOverallExp(index+1)
                        }
                    }}
                    onMouseEnter={() => {
                        setHoveredOverallExp(index)
                    }} onMouseLeave={() => {
                        setHoveredOverallExp(null)
                    
                    }} src={isFilled ? filledStar : unFilledStar} className="review-form-row__star" /> 
                })}
            </div>
        </div>
        <div className="review-form-row">
            <h3>Job Title</h3>     
            <select className="review-form-row__select" value={reviewObject['position']} onChange={(e) => {
                updateReviewObject("position", e.target.value)

            }}>
                <option value="">What is/was your position at {placeName}?</option>
                <option value="Server">Server</option>
                <option value="Server Assistant/Support Role">Server Assistant/Support Role</option>
                <option value="Bartender">Bartender</option>
                <option value="Barback">Barback</option>
                <option value="Barista">Barista</option>
                <option value="Busser">Busser</option>
                <option value="Runner">Runner</option>
                <option value="Host/Hostess">Host/Hostess</option>
                <option value="Line Cook">Line Cook</option>
                <option value="Prep Cook">Prep Cook</option>
                <option value="Sous Chef">Sous Chef</option>
            
            </select>
        </div>
        <div className="review-form-row">
            <h3>Description Title</h3>        
            <input value={reviewObject['reviewTitle']} onChange={(e) => {
                updateReviewObject("reviewTitle", e.target.value)

            }} type="text" placeholder={`Keep it short and sweet!`} className="review-form-row__input-text" />
        </div>
        <div className="review-form-row">
            <h3>Tell Us About Your Experience</h3>        
            <div className="review-form__textarea-wrapper">
                <textarea value={reviewObject['review']} onChange={(e) => {
                    if (e.target.value.length <= 500) {
                        updateReviewObject("review", e.target.value)

                    }
                }} maxLength={characterLimit} placeholder='What is/was it like to work here?' ></textarea>
                {reviewObject['review'] && <div className='review-form__character-limit'>{reviewObject['review'].length} / {characterLimit}</div>}
            </div>
        </div>
        {error && <p style={{color: "red"}}>{error}</p>}
        <button className="review-form__next-button" onClick={() => {
            validateAndNext()
        }}>Next</button>
    </div>
}

export default ReviewFormStep1