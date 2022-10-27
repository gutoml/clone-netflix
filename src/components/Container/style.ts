import styled from "styled-components";

interface Props {
    maxWidth?: number;
}

export const ContainerEL = styled.div<Props>`
    width: 100%;
    max-width: ${(props) => props.maxWidth}px;
    padding: 0 2%;
    margin: 0 auto;
`;
