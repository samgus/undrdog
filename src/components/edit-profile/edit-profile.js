import { useState } from "react"
import { 
    Form,
    FormButton, 
    FormH1, 
    FormInput, 
    FormLabel,
  } from './edit-profile.styles';

import { updateUserById } from "../../api/auth";

function EditProfile({ currentUser }) {
    const [errors, setErrors] = useState([])
    const [name, setName] = useState(currentUser.name)
    const [email, setEmail] = useState(currentUser.email)

    const editProfile = () => {
        updateUserById(currentUser._id, {
            name, email
        }).then((result) => {
            if (result.success) {
                alert("User info was updated successfully")
            } else {
                alert("There was an error, try again!")
            }
            window.location.reload();
        }).catch(() => {
            alert("There was an error, try again!");
            window.location.reload();
        })
    }
    return <div className="edit-profile w-100">
        <Form onSubmit={editProfile}>
            <FormH1>Edit Profile</FormH1>
            {errors && errors.length > 0 && errors.map((error) => <p style={{ color: "red" }}>{error}</p>)}
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' value= {email} onChange={(e) => setEmail(e.target.value)}  required />
            <FormLabel htmlFor='for'>Name</FormLabel>
            <FormInput type='text' value={name} onChange={(e) => setName(e.target.value)} required />
            <FormButton type='submit'>Submit</FormButton>
        </Form>
    </div>
}

export default EditProfile