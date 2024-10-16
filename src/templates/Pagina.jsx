import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";

export default function Pagina(props){
    return (
        <Container>
            <Cabecalho texto="Sistema de Controle de ..." />
            <Menu />
            {
                props.children
            }
        </Container>
    );
}