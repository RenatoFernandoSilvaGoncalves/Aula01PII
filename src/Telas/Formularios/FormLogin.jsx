import { Button, Form } from "react-bootstrap";
import { ContextoUsuario } from "../../App";
import { useContext, useRef } from "react";


export default function FormLogin(props){
    const contextoUsuario = useContext(ContextoUsuario);        
    const email = useRef("");
    const senha = useRef("");

    function processarLogin(evento){
        if (email.current.value==="admin@admin.com" && senha.current.value==='123456'){
            contextoUsuario.setUsuario({
                email: email.current.value,
                logado: true
            });
        } 
        evento.preventDefault();
        evento.stopPropagation();
    }

    return (
        <Form className="border p-2" onSubmit={processarLogin}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="digite seu email"
            ref={email} />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="senha">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="informe a senha"
            ref={senha} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

    );
}