import "./user-profile-main.styles.scss";
import pencil from "../../images/pencil.svg";
import user from "../../images/person_blackberry-outline.svg";

import { useEffect } from "react";
import { useAuth } from "../../contexts/auth.context";
import { useModal } from "../../contexts/modal.context";

import { useNavigate } from "react-router-dom";
import EditProfile from "../edit-profile/edit-profile";

function UserProfileMain() {
    const navigate = useNavigate()
    const { setModal } = useModal();
    const { currentUser, setCurrentUser, fetchedUser } = useAuth();
    useEffect(() => {
        if (!currentUser && fetchedUser) {
            
            navigate('/')
        }
    }, [currentUser, fetchedUser])

    if (!currentUser) {
        return <div></div>
    }
    return <div className="user-profile__page user-profile__page-main">
        <h2>My Profile</h2>

        <div className="user-profile__user-card">
            <div className="user-profile__user-card-left">
                <div className="user-profile__user-card__avatar avatar_img"><img src={user}/></div>
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
                }}>Edit <img src={pencil} /></button>
            </div>
        </div>

    </div>

}

export default UserProfileMain;