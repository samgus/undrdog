import styled from "styled-components"

export const Form = styled.form`
    background: white;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

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
    padding: 12px 12px;
    margin-bottom: 15px;
    border: none;
    border-radius: 10px;
    border: 1px solid rgb(220,220,220);
    background-color: rgb(230,230,230);
`

export const FormButton = styled.button`
    background: rgb(3,76,31);
    padding: 12px 0;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin-top: 10px;`

