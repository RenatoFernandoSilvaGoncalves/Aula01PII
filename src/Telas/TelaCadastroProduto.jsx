import Pagina from "../templates/Pagina";
import FormularioCadProduto from "./Formularios/FormCadProduto";
import { Container } from "react-bootstrap";

export default function TelaCadastroProduto(props) {
    return (
        <Pagina>
             <Container mt-3>
                <h2 className="text-center">Tela de Cadastro de Produtos</h2>
                <FormularioCadProduto /> 
            </Container>
        </Pagina>
    );
}