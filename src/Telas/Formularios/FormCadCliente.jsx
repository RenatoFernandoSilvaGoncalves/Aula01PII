import { Button, Col, Form, Row} from "react-bootstrap";
import { useState } from "react";

export default function FormularioCadCliente(props) {

    const [validado, setValidado] = useState(false);

    function cadastrar(evento){
        const formulario = evento.currentTarget; //aquele que disparou o evento
        if (formulario.checkValidity()){
            setValidado(false);
        }
        else{
            setValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    return (
        <Form validated={validado} className="border p-2" noValidate onSubmit={cadastrar}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="cpf">
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="CPF"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o CPF!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="nomeCompleto">
                    <Form.Label>Nome Completo:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nome Completo"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o nome completo!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="endereco">
                    <Form.Label>Endereço:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Endereço"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o endereço!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="cidade">
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Control type="text" placeholder="Cidade" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe a cidade.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="estado">
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe o estado.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Cep:</Form.Label>
                    <Form.Control type="text" placeholder="Cep" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe o CEP!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Cadastrar</Button>
        </Form>
    );
}