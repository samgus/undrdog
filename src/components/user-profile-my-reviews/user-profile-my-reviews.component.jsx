import cx from "classnames";

import "./user-profile-my-reviews.styles.scss";

import reviewArrow from "../../images/reviewArrow.svg";

function UserProfileMyReviews({ reviews, setSelectedReview }) {
    console.log("reviewsreviews", reviews)
    const reviewRows = reviews.map((review) => {
        return <tr onClick={() => setSelectedReview(review)} className="cursor-pointer">
            <td>{review.placeName}</td>
            <td>{new Date(review.date).toLocaleDateString("en-US", { // you can use undefined as first argument
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            })}</td>
            <td className="rating"><span className={cx({ [`rating-type-${review.overallRating}`]: true })}>{review.overallRating}</span></td>
            <td>{review.placeFormattedAddress.split(",").slice(1, 3)}</td>
            <td className="description">{review.review}</td>
            <td className="arrow"><img src={reviewArrow} /></td>
        </tr>
    })
    return <div className="user-profile__page user-profile__page-my-reviews">
        <h2>My Reviews</h2>
        <div className="user-profile__table-container">
            <table>
                <thead>
                    <th>
                        Restaurant
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Rating
                    </th>
                    <th>
                        Location
                    </th>
                    <th>
                        Description
                    </th>
                    <th></th>
                </thead>
                <tbody>
                    {reviewRows}
                    
                </tbody>
                
            </table>
            {!reviewRows || reviewRows.length === 0 && <div className="user-profile__no-reviews-state">
                    <p>You have zero reviews written</p>
                    <span>Search for your restaurant to add a review!</span>
            </div>}
        </div>
    </div>

}

export default UserProfileMyReviews;