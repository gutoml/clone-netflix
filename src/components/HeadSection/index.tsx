import { Background, Overlay, Content, FormCaptureEmail } from "./style"
import { SlArrowRight } from "react-icons/sl";

const HeadSection: React.FC = () => (
    <Background>
        <Overlay>
            <Content>
                <h1>Filmes, séries e muito mais.</h1>
                <h1>Sem limites.</h1>
                <h5>Assista onde quiser. Cancele quando quiser.</h5>
                <span>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</span>

                <FormCaptureEmail action="#" className="form-capture">
                    <input type="email" id="email" name="email" placeholder="Seu e-mail" autoComplete="off" />
                    <button type="button" className="btn btn-primary">
                        <span>Vamos lá</span>
                        <SlArrowRight />
                    </button>
                </FormCaptureEmail>
            </Content>
        </Overlay>
    </Background>
)

export default HeadSection
