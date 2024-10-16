import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormularioCadCliente from "./Formularios/FormCadCliente";
export default function TelaCadastroCliente(props){
    return (
        <Pagina>
            <Container mt-3>
                <h2 className="text-center">Tela de Cadastro de Clientes</h2>
                <FormularioCadCliente /> 
            </Container>
        </Pagina>
    )
}