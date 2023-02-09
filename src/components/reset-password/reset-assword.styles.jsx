import styled from "styled-components"

export const Form = styled.form`
height: auto;
width: 100%;
min-width: 100%;
z-index: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
padding: 80px 32px;
/* border-radius: 10px; */
/* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9); */

@media screen and (max-width: 400px) {
    padding: 32px 32px;
}
`

export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #000;
font-size: 20px;
font-weight: 400;
text-align: center;
font-weight: bold;
`

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 20px;
color: #000;
`

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: 1px solid #ccc;
border-radius: 4px;
`

export const FormButton = styled.button`
background: rgb(3,76,31);;
padding: 16px;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`
