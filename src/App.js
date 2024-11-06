import TelaCadastroCliente from "./Telas/TelaCadastroCliente";
import TelaCadastroProduto from "./Telas/TelaCadastroProduto";
import TelaMenu from "./Telas/TelaMenu";
import Tela404 from "./Telas/Tela404";
import TelaLogin from "./Telas/TelaLogin";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";

export const ContextoUsuario = createContext();

function App() {
  const [usuario, setUsuario] = useState({
    "email": "teste@teste",
    "logado": false
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
  }
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
