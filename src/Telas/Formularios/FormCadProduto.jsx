import { Button, Col, Form, Row} from "react-bootstrap";
import { useState } from "react";

export default function FormularioCadProduto(props) {

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
                <Form.Group as={Col} md="4" controlId="codigo">
                    <Form.Label>Código:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Codigo"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o Código!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="descricao">
                    <Form.Label>Descrição:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Descrição do produto"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a descrição do produto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="qtdEstoque">
                    <Form.Label>Quantidade Em Estoque:</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Endereço"
                        min="0"
                        step="1"
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a quantidade em estoque!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="precoCusto">
                    <Form.Label>Preço de Custo:</Form.Label>
                    <Form.Control type="text" placeholder="0.00" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe o preço de custo.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="precoVenda">
                    <Form.Label>Preço de Venda:</Form.Label>
                    <Form.Control type="text" placeholder="0.00" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, informe o preço de venda.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Cadastrar</Button>
        </Form>
    );
}