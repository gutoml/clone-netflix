import styled from "styled-components";

export const LabelLang = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    cursor: pointer;
    position: relative;

    & * {
        cursor: pointer;
    }

    select > option {
        background-color: black;
        position: absolute;
        width: 100%;
        padding: 12px;
    }
`;

export const NavBar = styled.div`
    width: 100%;
    height: 84px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
`;

export const ButtonsGroup = styled.div`
    display: flex;
    gap: 24px;
`;

export const Button = styled.button``;
