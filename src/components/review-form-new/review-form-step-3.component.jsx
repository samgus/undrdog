import { useState } from "react";
import cx from "classnames";
import Select, { components }  from 'react-select';
import plusIcon from "../../images/plus.svg";

import { createReview, editReview } from "../../api/reviews";
const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={plusIcon} />
      </components.DropdownIndicator>
    );
  };

function ReviewFormStep3({ setCurrentStep, updateReviewObject, reviewObject, reviewId, placeId, edit }) {
    const [error, setError] = useState()
    const [treatmentFromGuest, setTreatmentFromGuest] = useState(reviewObject['treatmentFromGuest'])
    const [treatmentFromBoss, setTreatmentFromBoss] = useState(reviewObject['treatmentFromBoss'])
    const optionsObj = [{
        emoji: '🤬',
        value: "Horrible"
    },{
        emoji: '😒',
        value: "Poor"
    },{
        emoji: '😌',
        value: "Pretty Good"
    },{
        emoji: '🤩',
        value: "Amazing!"
    }];

    const options = [
        { value: 'Family Meal', label: 'Family Meal' },
        { value: 'Health Insurance', label: 'Health Insurance' },
        { value: '401k', label: '401k' },
        { value: 'Matching 401k Contributions', label: 'Matching 401k Contributions' }
    ]

    const submitReview = async () => {
        setError(null)

        // validation
        if (reviewObject['treatmentFromBoss'] === null) {
            setError("Please select a rating for Treatment From Boss")
            return
        } else if (reviewObject['treatmentFromGuest'] === null) {
            setError("Please select a rating for Treatment From Guests")
            return
        }

        reviewObject.benefits = reviewObject.benefits.map((benefit) => benefit.value)
        reviewObject.placeId = placeId
        let result;
        if (edit) {
            result = await editReview(reviewId, reviewObject)
        } else {
            result = await createReview(reviewObject)
        }

        if (result.success) {
            setCurrentStep(3)
        } else {
            alert("Sorry your review did not save, try again")
        }

    }
    return <div>
        <div className="review-form-row">
            <h3>Treatment from Guests</h3> 
            <div className="review-form__option-new-container">
                {optionsObj.map((option, i) => {
                    return <span onClick={() => {
                        if (treatmentFromGuest === i) {
                            setTreatmentFromGuest(null)
                            updateReviewObject('treatmentFromGuest', null)
                        } else {
                            setTreatmentFromGuest(i)
                            updateReviewObject('treatmentFromGuest', i)
                        }
                    }} className={cx({"review-form__option-new": true, selected: treatmentFromGuest === i})}>{option.emoji} {option.value}</span>
                })}
            </div> 
            
        </div> 
        <div className="review-form-row">
            <h3>Treatment from Boss</h3> 
            <div className="review-form__option-new-container">
                {optionsObj.map((option, i) => {
                    return <span onClick={() => {
                        if (treatmentFromBoss === i) {
                            setTreatmentFromBoss(null)
                            updateReviewObject('treatmentFromBoss', null)
                        } else {
                            setTreatmentFromBoss(i)
                            updateReviewObject('treatmentFromBoss', i)

                        }
                    }} className={cx({"review-form__option-new": true, selected: treatmentFromBoss === i})}>{option.emoji} {option.value}</span>
                })}
            </div> 
        </div> 
        <div className="review-form-row">
            <h3>Benefits</h3> 
            <Select
                components={{ DropdownIndicator }}
                isMulti
                onChange={(selectedOptions) => {
                    console.log("selectedOptions", selectedOptions)
                    updateReviewObject('benefits', selectedOptions)
                }}
                value={reviewObject['benefits']}
                name="benefits"
                options={options}
                className="review-form-multi-select"
                classNamePrefix="select"
                isClearable={false}
            />
        </div>
        {error && <p style={{color: "red"}}>{error}</p>}

        <button className="review-form__next-button" onClick={() => {
            submitReview()
        }}>Submit</button>
         <button className="review-form__back-button" onClick={() => {
            setCurrentStep(1)
        }}>Back</button>
    </div>
}

export default ReviewFormStep3