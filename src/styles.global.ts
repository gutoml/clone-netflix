import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    .btn {
        padding: 8px 12px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border-radius: 4px;
        font-size: 16px;
    }

    .btn-primary {
        border: 1px solid red;
        background: red;
        color: white;
    }

    .btn-secondary {
        border: 1px solid white;
        background: rgba(0,0,0,0.7);
        color: white;
    }

    .clear-style {
        border: none;
        background-color: transparent;
        outline: none;
        appearance: none;
    }
`;
