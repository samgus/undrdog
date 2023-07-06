import { useState, useEffect } from "react"
import { 
    Form,
    FormButton, 
    FormH1, 
    FormInput, 
    FormLabel,
  } from './reset-password.styles';

import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../api/auth";

import { useAuth } from "../../contexts/auth.context";

function ResetPassword() {
    const navigate = useNavigate()
    const { currentUser } = useAuth()
    const [errors, setErrors] = useState([])
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

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
                confirmPassword
            })
            if (result.success) {
                alert("Password successfully changed")
                navigate('/?signin=true')
            } else {
                setErrors([result.message]);
            }
        } catch(e) {
            console.log(e);
            setErrors(["There was an internal error, try again!"]);
        }
       return false;
      
    }
    return <div className="edit-profile w-100" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
    }}>
        <Form onSubmit={resetPasswordHandler}>
            <FormH1>Reset Password</FormH1>
            {errors && errors.length > 0 && errors.map((error) => <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>)}
            {/* <FormLabel htmlFor='for'>New Password</FormLabel> */}
            <FormInput type='password' value={password} placeholder="New Password" onChange={(e) => setPassword(e.target.value)} required />
            {/* <FormLabel htmlFor='for'>Confirm New Password</FormLabel> */}
            <FormInput type='password' value={confirmPassword} placeholder="Confirm New Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
            <FormButton type='submit'>Submit</FormButton>
        </Form>
    </div>
}

export default ResetPassword