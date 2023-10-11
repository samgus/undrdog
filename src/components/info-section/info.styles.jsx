import styled from "styled-components";

export const InfoContainer = styled.div`
    color: black;
    background: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 50%;
    position: relative;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }

    @media screen and (max-width: 768px) {
        height: auto;
        padding: 0px;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    @media screen and (max-width: 768px) {
        height: auto !important;
        flex-direction: column-reverse;
    }

    @media screen and (max-width: 1280px) and (min-width: 768px) {
        height: auto !important;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? 
        `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 1280px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? 
            `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
    position: relative;
    z-index: 1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    width: 100%;
    padding-top: 0;
    padding-bottom: 60px;
    color: rgb(0,0,0);
    position: relative;
    bottom: 20px;
    flex: 1;
    @media screen and (max-width: 768px) {
        padding-bottom: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-family: "Montserrat";

`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 56px;
    line-height: 1.1;
    font-weight: 500;
    color: black;
    font-family: "poppins";
    @media screen and (max-width: 768px) {
        font-family: "Poppins";
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`

export const Subtitle = styled.p`
    max-width: 600px;
    margin-bottom: 35px;
    font-size: 19px;
    line-height: 32px;
    color: black;

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
        color:  #353E42;
        text-align: center;
        font-family: "Montserrat";
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        margin: auto;
    }
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`