import TelaCadastroCliente from "./Telas/TelaCadastroCliente";
import TelaCadastroProduto from "./Telas/TelaCadastroProduto";
import TelaMenu from "./Telas/TelaMenu";
import Tela404 from "./Telas/Tela404";
import TelaLogin from "./Telas/TelaLogin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

//criando um contexto para armazenar os dados do usuário logado
//permitindo que outros componentes possam ter acesso a essa informação
//que é gerenciada pelo componente App

export const ContextoUsuario = createContext();

function App() {
  const [usuario, setUsuario] = useState({
    email: "",
    logado: false,
  });

  if (usuario.logado) {
    return (
      <div className="App">
        <ContextoUsuario.Provider value={{usuario, setUsuario}}>
          <BrowserRouter>
            <Routes>
              <Route path="/cliente" element={<TelaCadastroCliente />} />
              <Route path="/produto" element={<TelaCadastroProduto />} />
              <Route path="/" element={<TelaMenu />} />
              <Route path="*" element={<Tela404 />} />
            </Routes>
          </BrowserRouter>
        </ContextoUsuario.Provider>
      </div>
    );
  } // fim do if usuario.logado
  else {
    return (
      <div className="App">
        <ContextoUsuario.Provider value={{usuario, setUsuario}}>
          <TelaLogin />
        </ContextoUsuario.Provider>
      </div>
    );
  }
}

export default App;
