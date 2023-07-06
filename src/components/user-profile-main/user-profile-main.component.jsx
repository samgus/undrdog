import "./user-profile-main.styles.scss";

function UserProfileMain() {
    return <div className="user-profile__page user-profile__page-main">
        <h2>My Profile</h2>

        <div className="user-profile__user-card">
            <div className="user-profile__user-card-left">
                <div className="user-profile__user-card__avatar">S</div>
                <div className="user-profile__user-card__content">
                    <h3>Sam Gustafsson</h3>
                    <span className="user-profile__user-card__large-label">Line Cook</span>
                    <span className="user-profile__user-card__small-label">Brooklyn, New York</span>
                </div>

            </div>
            <div className="user-profile__user-card-right">
                <button className="user-profile__edit-button">Edit</button>
            </div>
        </div>
    </div>

}

export default UserProfileMain;