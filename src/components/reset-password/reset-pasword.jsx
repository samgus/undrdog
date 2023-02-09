import { useState } from "react"
import { 
    Form,
    FormButton, 
    FormH1, 
    FormInput, 
    FormLabel,
  } from './reset-password.styles';

import { resetPassword } from "../../api/auth";

function ResetPassword() {
    const [errors, setErrors] = useState([])
    const [currentPassword, setCurrentPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmNewPassword, setConfirmNewPassword] = useState()

    useEffect(() => {
        // only render page if forgot-password-check request returns true
        // redirect if not
    }, [])

    const resetPasswordHandler = () => {


        resetPassword(currentUser._id, {
            currentPassword,
            newPassword,
            confirmNewPassword
        }).then((result) => {
            
            if (result.success) {
                alert("User info was updated successfully")
            } else {
                alert("There was an error, try again!")
            }
            // window.location.reload();
        }).catch((e) => {
            console.log(e);
            alert("There was an internal error, try again!");
            // window.location.reload();
        })
    }
    return <div className="edit-profile w-100">
        <Form onSubmit={resetPasswordHandler}>
            <FormH1>Reset Password</FormH1>
            {errors && errors.length > 0 && errors.map((error) => <p style={{ color: "red" }}>{error}</p>)}
            <FormLabel htmlFor='for'>Current Password</FormLabel>
            <FormInput type='password' value= {currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}  required />
            <FormLabel htmlFor='for'>New Password</FormLabel>
            <FormInput type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            <FormLabel htmlFor='for'>Confirm New Password</FormLabel>
            <FormInput type='password' value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} required />
            <FormButton type='submit'>Submit</FormButton>
        </Form>
    </div>
}

export default EditProfile