import { useState } from "react"
import { 
    Form,
    FormButton, 
    FormH1, 
    FormInput, 
    FormLabel,
  } from './forgot-password.styles.jsx';

import { forgotPassword } from "../../api/auth";

function ForgotPassword() {
    
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState("");

    const forgotPasswordHandler = async (e) => {
        setErrors([])
        setSuccess(false)
        e.preventDefault()
        const result = await forgotPassword(email)
        console.log(result)
        if (result){
            setSuccess(true)
        } else {
            setErrors(["Email does not exist"])
        }
    }

    return <div className="forgot-password w-100"       
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}>
        <Form onSubmit={forgotPasswordHandler}>
            <FormH1>Forgot Password</FormH1>
            {success && <p style={{ color: "green", marginBottom: "10px" }}>Email sent! Check your inbox</p>}
            {errors && errors.length > 0 && errors.map((error) => <p style={{ color: "red", marginBottom: "10px"  }}>{error}</p>)}
            {/* <FormLabel htmlFor='for'>Email</FormLabel> */}
            <FormInput type='email' placeholder="Email" value= {email} onChange={(e) => setEmail(e.target.value)}  required />
            <FormButton type='submit'>Submit</FormButton>
        </Form>
    </div>
}

export default ForgotPassword