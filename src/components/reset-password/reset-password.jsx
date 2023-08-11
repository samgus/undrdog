import { useState, useEffect } from "react"


import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../api/auth";

import { useAuth } from "../../contexts/auth.context";
import { useModal } from "../../contexts/modal.context";
import "./reset-password.styles.scss";

import check from "../../images/check.svg";


function ResetPassword() {
    const navigate = useNavigate()
    const { currentUser } = useAuth()
    const [errors, setErrors] = useState([])
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [completedState, setCompletedState] = useState(false)

    const { setModal } = useModal()

    useEffect(() => {
        // only render page if forgot-password-check request returns true
        // redirect if not
    }, [])

    const resetPasswordHandler = async (e) => {
        setErrors([])
        e.preventDefault();
        try {
            const result = await resetPassword({
                password,
                confirmPassword,
                userId: currentUser._id
            })
            if (result.success) {
                setCompletedState(true)
            } else {
                setErrors([result.message]);
            }
        } catch(e) {
            console.log(e);
            setErrors(["There was an internal error, try again!"]);
        }
       return false;
      
    }
    if (completedState) {
        return <div className="change-password change-password__completed-state">
            <h2 className="change-password__heading-title">Successfully Changed Password</h2>

            <img src={check} />

            <button className="change-password__submit" onClick={() => {
                setModal({
                    modal: "reset-password", show: false
                })
            }}>Done</button>
        </div>
    }
    return <div className="change-password">
        <div className="change-password__heading">
            <h2 className="change-password__heading-title">Change password</h2>
        </div>
        <div className="change-password__form">
            <div className="change-password__input-row">
                <label className="change-password__input-label">New Password</label>
                <input className="change-password__input-text" type="password"  value={password} placeholder="*********" onChange={(e) => setPassword(e.target.value)} required/>
            </div>

            <div className="change-password__input-row">
                <label className="change-password__input-label">Confirm Password</label>
                <input className="change-password__input-text" type="password"  value={confirmPassword} placeholder="*********" onChange={(e) => setConfirmPassword(e.target.value)} required/>
            </div> 
        </div>
        <div className="change-password__footer">
            <button className="change-password__submit" onClick={resetPasswordHandler}>Reset Password</button>
        </div>
    </div>
}

export default ResetPassword