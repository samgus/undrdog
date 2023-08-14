import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#AE5020' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    /* color: ${({dark}) => (dark ? '#010606' : '#AE5020')}; */
    color: #fff;
    /* color: rgb(230, 230, 230); */
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.06);
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        /* background: ${({primary}) => (primary ? '#fff' : '#01BF71' )}; */
    }
`