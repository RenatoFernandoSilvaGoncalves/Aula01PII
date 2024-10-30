import Pagina from "../templates/Pagina";
import imagem from '../assets/imagens/tela404.png';
import { Container } from "react-bootstrap";

export default function Tela404(props) {
    return (
        <Pagina>
            <Container>
                <img src={imagem} alt="Tela 404" />
                <h1>O recurso solicitado não existe!</h1>
            </Container>
        </Pagina>
    )
}