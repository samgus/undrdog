import { useState } from "react"

import { updateUserById } from "../../api/auth";

import { useAuth } from "../../contexts/auth.context";
import { useModal } from "../../contexts/modal.context";
import checkGrey from "../../images/check-grey.svg";

import "./edit-profile.styles.scss";

function EditProfile({ currentUser, setCurrentUser }) {
    const [errors, setErrors] = useState([])
    const [name, setName] = useState(currentUser.name)
    const [email, setEmail] = useState(currentUser.email)
    const [completedState, setCompletedState] = useState(false)

    const { setModal } = useModal();

    const editProfile = (e) => {
        e.preventDefault();
        console.log(name, email)
        updateUserById(currentUser._id, {
            name, email
        }).then((result) => {
            
            if (result.success) {
                if (result.user) {
                    setCurrentUser(result.user)
                }
                setCompletedState(true)
            } else {
                alert("There was an error, try again!")
            }
        }).catch((e) => {
            console.log(e);
            alert("There was an internal error, try again!");
        })

        return false;
    }

    if (completedState) {
        return <div className="edit-profile edit-profile__completed-state">
            <h2 className="edit-profile__heading-title">Successfully Edited Profile</h2>

            <img src={checkGrey} />

            <button className="edit-profile__submit" onClick={() => {
                setModal({
                    modal: "edit-profile", show: false
                })
            }}>Done</button>
        </div>
    }
    return <div className="edit-profile w-100" >
        <div className="edit-profile__heading">
            <h2 className="edit-profile__heading-title">Edit Profile</h2>
        </div>
        <div className="edit-profile__form">
            <div className="edit-profile__input-row">
                <label className="edit-profile__input-label">Name</label>
                <input className="edit-profile__input-text" type="text"  value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="edit-profile__input-row">
                <label className="edit-profile__input-label">Email</label>
                <input className="edit-profile__input-text" type="text"  value={email} placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
           
        </div>
        <div className="edit-profile_footer">
            <button className="edit-profile__submit" onClick={editProfile}>Submit</button>
        </div>
    </div>
}

export default EditProfile