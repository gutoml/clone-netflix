import styled from "styled-components";

interface PropsLogo {
    width?: number;
    height?: number;
}

export const LogoNetflix = styled.svg<PropsLogo>`
    fill: #e50914;
    width: ${(props) => props.width};
`;
