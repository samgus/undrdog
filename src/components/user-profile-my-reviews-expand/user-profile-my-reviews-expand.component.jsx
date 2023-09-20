import { useParams } from "react-router-dom";
import "./user-profile-my-reviews-expand.styles.scss";

import pencil from "../../images/pencil.svg";
import { useModal } from "../../contexts/modal.context";
import { useAuth } from "../../contexts/auth.context";
import { ratingsLabels, sideWorkLabels } from "../../globals";
import ReviewForm from "../review-form-new/review-form-new.component";

import { Link } from "react-router-dom";

function UserProfileMyReviewsExpand({ setReviewUpdate, selectedReview, setSelectedReview }) {
    const { userId } =  useParams();
    const { currentUser } = useAuth()
    const { setModal } = useModal();
  
    console.log("selectedReview", selectedReview)
    return <div className="user-profile__page user-profile__page-my-reviews-expand">
        <div className="user-profile__back-button" onClick={() => setSelectedReview(null)}>
            &lt; Back to My Reviews
        </div>
        <div className="user-profile__reviews-section user-profile__place-card">
            <div className="user-profile__place-card-left">
                <div className={`user-profile__review-rating rating-type-${selectedReview.overallRating}`}>{selectedReview.overallRating}</div>
                <div className="user-profile__place-info">
                    <h3 className="user-profile__place-title"><Link to={`/place/${selectedReview.placeId}`}>{selectedReview.placeName}</Link> &#183; <span className="user-profile__review-job">{selectedReview.position}</span></h3>
                    <span className="user-profile__location">{selectedReview.placeFormattedAddress}</span>
                </div>
            </div>
            <div className="user-profile__place-card-right">
                {currentUser && <div onClick={() => setModal({
                    modal: "review-form",
                    children: <ReviewForm 
                        placeName={selectedReview.placeName} 
                        userId={userId} edit={true} 
                        onComplete={() => {
                            setReviewUpdate(true)
                            setModal({ show: false })
                        }} 
                        currentReviewInfo={selectedReview} />,
                    show: true
                  })}className="user-profile__edit-button">
                    Edit
                    <img src={pencil} />
                </div>}
            </div>
        </div>
        <div className="user-profile__reviews-section user-profile__title-section">
            <h2>{selectedReview.reviewTitle}</h2>
            <p>{selectedReview.review}</p>
        </div>
        <div className="user-profile__reviews-section user-profile__more-details-section">
            <h2>More Details</h2>
            <div className="user-profile__more-details-container">
                <div className="user-profile__more-defails-column">
                    <div className="user-profile__more-details-item">
                        <span className="user-profile__more-details-title">Amount of Shifts Per Week</span>
                        <span className="user-profile__more-details-value">{selectedReview.shiftsWorked}</span>
                    </div>
                    <div className="user-profile__more-details-item">
                         <span className="user-profile__more-details-title">Treatment from Guests</span>
                        <span className="user-profile__more-details-value">{ratingsLabels[selectedReview.treatmentFromGuest]}</span>
                    </div>

                </div>
                <div className="user-profile__more-defails-column">
                    <div className="user-profile__more-details-item">
                        <span className="user-profile__more-details-title">Estimated Weekly Income</span>
                        <span className="user-profile__more-details-value">${selectedReview.weeklyIncome}</span>

                    </div>
                    <div className="user-profile__more-details-item">
                        <span className="user-profile__more-details-title">Treatment from Boss</span>
                        <span className="user-profile__more-details-value">{ratingsLabels[selectedReview.treatmentFromBoss]}</span>

                    </div>
                </div>
                <div className="user-profile__more-defails-column">
                    <div className="user-profile__more-details-item">
                        <span className="user-profile__more-details-title">Side Work Intensity</span>
                        <span className="user-profile__more-details-value">{sideWorkLabels[selectedReview.sideWork]}</span>

                    </div>
                    <div className="user-profile__more-details-item">
                        <span className="user-profile__more-details-title">Benefits</span>
                        <span className="user-profile__more-details-value">{selectedReview.benefits.join(", ")}</span>

                    </div>

                </div>
            </div>
        </div>
    </div>

}

export default UserProfileMyReviewsExpand;