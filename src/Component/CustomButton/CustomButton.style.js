import styled, { css } from "styled-components";

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const getButtonStyles = (props) => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedStyles : buttonStyles;
};

const invertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;
const googleSignInStyles = css`
    background-color: #4285f4;
    color: #fff;
    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const CustomButtonContainer = styled.button`
    box-sizing: border-box;
    height: 70px;
    width: 100%;
    letter-spacing: -0.5px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    cursor: pointer;
    line-height: 70px;
    text-align: center;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
    ${getButtonStyles}
`;
