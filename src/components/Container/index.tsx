import { ContainerEL } from './style'

interface Props {
    children: JSX.Element[] | string,
    maxWidth?: number
    style?: React.CSSProperties
}

const Container: React.FC<Props> = ({ children, maxWidth = 1280, style }) => (
    <ContainerEL maxWidth={maxWidth} style={style}>
        { children }
    </ContainerEL>
)

export default Container
