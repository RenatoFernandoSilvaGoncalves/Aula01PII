import { Container, Form, Button } from "react-bootstrap";
import { ContextoUsuario } from "../../App";
import { useContext, useRef } from "react";
export default function FormLogin(props) {
    const { usuario, setUsuario } = useContext(ContextoUsuario);
    const emailRef = useRef();
    const senhaRef = useRef();

    function processarLogin(evento){
        //extrair os valores dos inputs informados pelo usuário
        const email = emailRef.current.value;
        const senha = senhaRef.current.value;

        if (email == 'admin@admin.com' && senha == '123'){
            setUsuario({
                email: email,
                logado: true
            });
        }
        evento.preventDefault();
        evento.stopPropagation(); //impedir que o evento torne-se visível por outros observadores
    }

    return (
        <Container className="border m-2 p-2">
        <Form onSubmit={processarLogin}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="email"
                    ref={emailRef} />
                <Form.Text className="text-muted">
                    Nunca compartilhe suas credenciais de acesso.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="digite sua senha"
                    ref={senhaRef} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
        </Container>
    );
}