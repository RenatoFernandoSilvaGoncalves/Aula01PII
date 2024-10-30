import { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { ContextoUsuario } from "../App";

export default function Menu(props) {
    const contextoUsuario = useContext(ContextoUsuario);

    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-3">
            <Container>
                <Navbar.Brand href="#" as={Link} to='/'>Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" as={Link} to='/cliente'>Clientes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#" as={Link} to='/produto'>Produtos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#" as={Link} to='/fornecedor'>Fornecedores</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="#" as={Link} onClick={()=>{
                            contextoUsuario.setUsuario({
                                email: "",
                                logado: false
                            });
                        }}>Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}