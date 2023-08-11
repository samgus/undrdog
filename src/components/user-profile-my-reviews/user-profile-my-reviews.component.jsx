import cx from "classnames";

import "./user-profile-my-reviews.styles.scss";

import reviewArrow from "../../images/reviewArrow.svg";

function UserProfileMyReviews({ reviews, setSelectedReview }) {
    console.log("reviewsreviews", reviews)
    const reviewRows = reviews.map((review) => {
        return <tr>
            <td>{review.placeName}</td>
            <td>{new Date(review.date).toLocaleDateString()}</td>
            <td className="rating"><span className={cx({ [`rating-type-${review.overallRating}`]: true })}>{review.overallRating}</span></td>
            <td>{review.placeFormattedAddress.split(",").slice(1, 3)}</td>
            <td className="description">{review.review}</td>
            <td><img onClick={() => setSelectedReview(review)} className="cursor-pointer" src={reviewArrow} /></td>
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
        </div>
    </div>

}

export default UserProfileMyReviews;