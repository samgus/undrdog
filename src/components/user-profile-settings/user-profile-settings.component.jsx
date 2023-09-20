import "./user-profile-settings.styles.scss";

import { useState } from "react";
import ResetPassword from "../reset-password/reset-password";

import { useModal } from "../../contexts/modal.context";

import { useAuth } from "../../contexts/auth.context";

import { activateUser, deactivateUser } from "../../api/auth";
function UserProfileSettings({ currentUser, setCurrentUser }) {
    const { setModal } = useModal();
    const [deactivated, setDeactivated] = useState(currentUser.deactivated)
    return <div className="user-profile__page user-profile__page-settings">
        <h2>Settings</h2>
        <div className="user-profile__user-card user-profile__settings-options">
            <div className="user-profile__change-password" onClick={() => setModal({
                modal: "reset-password",
                children: <ResetPassword />,
                show: true
            }) }>Change Password</div>
            {!deactivated && <div className="user-profile__deactivate-account" onClick={async () => {
                const result = await deactivateUser(currentUser._id)
                console.log(result);
                if (result.success) {
                    setDeactivated(true)
                    setCurrentUser(result.updatedUser)
                } else {
                    alert("Something failed, try again")
                }
            }}>Deactivate Account</div>}
            {deactivated && <div className="user-profile__activate-account" onClick={async () => {
                const result = await activateUser(currentUser._id)
                if (result.success) {
                    setDeactivated(false)
                    setCurrentUser(result.updatedUser)
                } else {
                    alert("Something failed, try again")
                }
            }}>Activate Account</div>}
        </div>
    </div>

}

export default UserProfileSettings;