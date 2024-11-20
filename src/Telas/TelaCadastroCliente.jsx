import { Alert, Container, Spinner } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormularioCadCliente from "./Formularios/FormCadCliente";
import TabelaClientes from "./Tabelas/TabelaClientes";
import { useState, useEffect } from "react";
import { consultarClientes } from "../services/servicoClientes";

export default function TelaCadastroCliente(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [clientes, setClientes] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    //valores possíveis para situação : ok, erro, processando
    const [situacao, setSituacao] = useState('ok');
    const [clienteSelecionado, setClienteSelecionado] = useState({
        cpf: '',
        nome: '',
        endereco: '',
        cidade: '',
        estado: '',
        cep: '',
    });

    useEffect(() => {
        setSituacao('processando');
        consultarClientes()
            .then((listaClientes) => {
                setSituacao('ok');
                setClientes(listaClientes);
            })
            .catch((erro) => {
                console.error(erro.message)
                setSituacao('erro');
            });
    }, []);  //vazio indica que o useEffect sera executado sempre que o componente for carregado -> didMount

    if (situacao === 'erro') {
        return (
            <Pagina>
                <Container mt-3>
                    <h2 className="text-center">Tela de Cadastro de Clientes</h2>
                    <div>
                        <Alert variant="danger">Erro ao carregar os clientes.</Alert>
                    </div>
                </Container>
            </Pagina>
        )
    }
    else if (situacao === 'processando') {
        return (
            <Pagina>
                <Container mt-3>
                    <h2 className="text-center">Tela de Cadastro de Clientes</h2>
                    <div className="d-flex">
                        <Spinner animation="border" />
                        <p>Recuperando os clientes do backend...</p>
                    </div>
                </Container>
            </Pagina>
        );
    }
    else {
        return (
            <Pagina>
                <Container mt-3>
                    <h2 className="text-center">Tela de Cadastro de Clientes</h2>
                    {
                        exibirTabela ? <TabelaClientes
                            setExibirTabela={setExibirTabela}
                            listaClientes={clientes}
                            setListaClientes={setClientes}
                            setClienteSelecionado={setClienteSelecionado}
                            setModoEdicao={setModoEdicao} />

                            : <FormularioCadCliente
                                setExibirTabela={setExibirTabela}
                                listaClientes={clientes}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao}
                                clienteSelecionado={clienteSelecionado}
                                setClienteSelecionado={setClienteSelecionado} />
                    }
                </Container>
            </Pagina>
        )
    }
}