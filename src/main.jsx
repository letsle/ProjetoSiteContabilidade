import React from "react";
import ReactDOM from "react-dom/client"; // Importação do ReactDOM
import { BrowserRouter } from "react-router-dom"; // Importação do BrowserRouter para gerenciar as rotas
import GlobalStyles from "./styles/globalStyles"; // Importação dos estilos globais

import Router from "./routes/routes.jsx"; // Importação do componente de rotas

// Utilizando ReactDOM.createRoot para renderizar o aplicativo no elemento com id "root"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    {/* Modo estrito do React para ajudar a encontrar problemas */}
    <BrowserRouter>
      {" "}
      {/* Componente de contexto para fornecer o roteamento */}
      <Router /> {/* Renderiza o componente de rotas */}
      <GlobalStyles /> {/* Aplica os estilos globais */}
    </BrowserRouter>
  </React.StrictMode>
);
