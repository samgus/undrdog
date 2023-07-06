import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(108deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    );
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 25px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const Form = styled.form`
    background: white;

    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 8px;

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 12px;
    color: #000;
`

export const FormInput = styled.input`
padding: 12px 12px;
margin-bottom: 15px;
border: none;
border-radius: 10px;
border: 1px solid rgb(220,220,220);
background-color: rgb(230,230,230);
width: 275px;
background: white;
border: 1px solid #EBECEE;
border-radius: 8px;
font-size: 12px;
`

export const FormButton = styled.button`
    background: rgb(3,76,31);
    padding: 12px 0;
    border: none;
    border-radius: 8px;
    color: #000;
    font-size: 14px;
    cursor: pointer;
    margin-top: 10px;
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #000;
    font-size: 12px;
`