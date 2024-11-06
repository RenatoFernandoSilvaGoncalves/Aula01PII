import { Container } from "react-bootstrap";
import FormLogin from "./Formularios/FormLogin";
export default function TelaLogin(props){
    return (
        <Container className="w-25 d-flex justify-content-center align-items-center">
            <FormLogin />
        </Container>
    );
}