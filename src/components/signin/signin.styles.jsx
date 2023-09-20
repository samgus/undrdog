import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdClose } from 'react-icons/md';

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
    color: #000;
    font-size: 16px;
    text-align: center;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    font-weight: 500;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 16px;
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

// export const GoogleSignInButton = styled.button`
//     background: rgb(53,62,66);
//     padding: 12px 0;
//     border: none;
//     border-radius: 8px;
//     color: #fff;
//     font-size: 14px;
//     cursor: pointer;
//     margin-top: 10px;
//     margin-bottom: 40px`

export const FormButton = styled.button`
    background: rgb(53,62,66);
    padding: 12px 0;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    margin-top: 10px;`


export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #000;
    font-size: 12px;
`

export const Background = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

export const ModalWrapper = styled.div`
  width: auto;
  height: 500px;
  overflow: hidden;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: white;
  color: #000;
  display: flex;
  position: relative;
  z-index: 10;
  border-radius: 8px;
  padding: 40px 30px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  background: rgb(230, 230, 230);
  padding-left: 25px;
  padding-right: 25px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 11;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: rgb(53,62,66);
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  padding: 0;
  z-index: 12;

`;