import "./user-profile-main.styles.scss";
import pencil from "../../images/pencil.svg";

import { useAuth } from "../../contexts/auth.context";
import { useModal } from "../../contexts/modal.context";

import EditProfile from "../edit-profile/edit-profile";

function UserProfileMain() {
    const { setModal } = useModal();
    const { currentUser, setCurrentUser } = useAuth();

    return <div className="user-profile__page user-profile__page-main">
        <h2>My Profile</h2>

        <div className="user-profile__user-card">
            <div className="user-profile__user-card-left">
                <div className="user-profile__user-card__avatar">{currentUser.name.charAt(0).toUpperCase()}</div>
                <div className="user-profile__user-card__content">
                    <h3>{currentUser.name}</h3>
                    <span className="user-profile__user-card__large-label">{currentUser.email}</span>
                    {/* <span className="user-profile__user-card__small-label">{currentUser.}</span> */}
                </div>

            </div>
            <div className="user-profile__user-card-right">
                <button className="user-profile__edit-button" onClick={() => {
                    setModal({
                        modal: "review-form",
                        children: <EditProfile currentUser={currentUser} setCurrentUser={setCurrentUser}/>,
                        show: true
                      });
                }}>Edit</button>
            </div>
        </div>

    </div>

}

export default UserProfileMain;