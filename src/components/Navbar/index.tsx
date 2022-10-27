import { Button, ButtonsGroup, LabelLang, NavBar } from "./style"
import { Container, Logo } from '../'
import { FaGlobe } from 'react-icons/fa'
import { BiDownArrow } from 'react-icons/bi'

const Navbar: React.FC = () => {
    return (
        <NavBar>
            <Container style={{display: 'flex', justifyContent: 'space-between'}}>
                <Logo width={134} height={36} />

                <ButtonsGroup>

                    <Button className="btn btn-secondary">

                        <LabelLang htmlFor="language">
                            <FaGlobe />
                            <select className="clear-style" id="language">
                                <option value="pt">Português</option>
                                <option value="en">Inglês</option>
                            </select>
                            <BiDownArrow />
                        </LabelLang>

                    </Button>

                    <Button className="btn btn-primary">
                        Entrar
                    </Button>

                </ButtonsGroup>
            </Container>
        </NavBar>
    )
}

export default Navbar
