/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
const imgBg = require("../../assets/background.jpg");

export const Background = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url(${imgBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h5 {
        font-size: 24px;
        font-weight: normal;
        margin: 32px 0;
    }

    & > span {
        margin-bottom: 24px;
    }
`;

export const FormCaptureEmail = styled.form`
    width: 100%;
    display: flex;

    input {
        flex: 1;
        font-size: 18px;
        padding: 8px 16px;
        border: 1px solid #ccc;
        border-radius: 2px 0 0 2px;
        outline: none;
        color: #000;
    }

    & .btn.btn-primary {
        font-size: 24px;
        padding: 16px 24px;
    }
`;
