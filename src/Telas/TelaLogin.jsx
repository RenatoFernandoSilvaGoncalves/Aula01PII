import { Container } from "react-bootstrap";
import FormLogin from "./Formularios/FormLogin";

export default function TelaLogin(props) {
    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <FormLogin />
        </Container>
    )
}