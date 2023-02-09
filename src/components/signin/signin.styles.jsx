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
    font-size: 32px;

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


export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #000;
    font-size: 14px;
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
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: white;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 20px;
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
    background: rgb(3,76,31);
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 12;

`;