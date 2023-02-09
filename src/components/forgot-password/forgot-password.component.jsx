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
    const [email, setEmail] = useState("");

    const forgotPasswordHandler = () => {
        const result = forgotPassword(email)
        if (result){
            alert("Email sent! Check your inbox")
        }
    }

    return <div className="forgot-password w-100">
        <Form onSubmit={forgotPasswordHandler}>
            <FormH1>Forgot Password</FormH1>
            {errors && errors.length > 0 && errors.map((error) => <p style={{ color: "red" }}>{error}</p>)}
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' value= {email} onChange={(e) => setEmail(e.target.value)}  required />
            <FormButton type='submit'>Submit</FormButton>
        </Form>
    </div>
}

export default ForgotPassword