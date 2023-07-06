import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ img }) => `url(${img})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 50%;
    position: relative;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? 
        `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
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
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    color: white;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-family: "Poppins";

`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 42px;
    line-height: 1.1;
    font-weight: 500;
    color: white;
    font-family: "Poppins";
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 24px;
    color: white;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
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