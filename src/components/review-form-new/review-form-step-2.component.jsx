import { Slider } from 'rsuite';


function ReviewFormStep2({ setCurrentStep, updateReviewObject, reviewObject }) {
    return <div>
        <div className="review-form-row">
            <h3>Amount of Shifts Per Week</h3>  
            <Slider
                value={reviewObject['shiftsWorked'] || 4}
                onChange={(value) => {
                    updateReviewObject('shiftsWorked', value)
                }}
                style={{ width: "100%" }}
                defaultValue={4}
                min={1}
                step={1}
                max={8}
                graduated
                progress
                handleStyle
                renderMark={mark => {
                    // render span for vertical line
                    return <span className="rs-slider__mark"><span className="rs-slider__mark-line" style={{ left: mark == 8 ? "5px" : "4px"}}></span>{(mark == 8) ? '8' : mark}</span>
                }}
                />
        </div> 
        <div className="review-form-row">
            <h3>Estimated Weekly Income</h3>  
            <Slider
                value={reviewObject['weeklyIncome'] || 500}
                onChange={(value) => {
                    updateReviewObject('weeklyIncome', value)
                }}
                style={{ width: "100%" }}
                defaultValue={500}
                min={0}
                step={1}
                max={1250}
                graduated
                progress
                handleStyle
                renderMark={mark => {
                    if ([0, 250, 500, 750, 1000, 1250].includes(mark)) {
                        return `$${mark}`
                    }
                    return null
                  }}
                />
        </div> 
        <div className="review-form-row">
            <h3>Side Work Intensity</h3>  
            <Slider
                value={reviewObject['sideWork'] || 3}
                onChange={(value) => {
                    updateReviewObject('sideWork', value)
                }}
                style={{ width: "100%" }}
                defaultValue={3}
                min={1}
                step={1}
                max={5}
                graduated
                progress
                handleStyle
                renderMark={mark => {
                    if (mark === 1) {

                        return <span className="rs-slider__mark-long"><span className="rs-slider__mark-long-line"></span>None</span>
                    } else if (mark === 3) {
                        return <span className="rs-slider__mark-long"><span className="rs-slider__mark-long-line" ></span>Average</span>
                    } else if (mark === 5) {
                        return <span className="rs-slider__mark-long"><span className="rs-slider__mark-long-line" ></span>Stressful</span>
                    }
                    return null
                  }}
                />
        </div> 
        <div className="review-form-row">
            <button className="review-form__next-button" onClick={() => {
            setCurrentStep(2)
        }}>Next</button>
            <button className="review-form__back-button" onClick={() => {
            setCurrentStep(0)
        }}>Back</button>
        </div>
    </div>
}

export default ReviewFormStep2