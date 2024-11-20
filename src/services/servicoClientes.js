//Implementar as funções que permitirão acessar os recursos do backend

const urlBase = "http://localhost:4000/clientes";

export async function consultarClientes(){
    const resposta = await fetch(urlBase,{method: "GET"});
    const listaClientes = await resposta.json();
    return listaClientes;
}

export async function cadastrarCliente(cliente){
    const resultado = await fetch(urlBase,{
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(cliente)

    });
    const resposta = await resultado.json();
    return resposta;
}

export async function alterarCliente(cliente){
    const resultado = await fetch(urlBase + "/" + cliente.cpf, { 
                                             method: "PATCH",
                                             headers: {
                                                 "Content-Type": "application/json"
                                             },
                                             body: JSON.stringify(cliente)
    });
    const resposta = await resultado.json();
    return resposta;
}

export async function excluirCliente(cpf){
    const resultado = await fetch(urlBase + "/" + cpf, { method: "DELETE"});
    const resposta = await resultado.json();
    return resposta;
}
