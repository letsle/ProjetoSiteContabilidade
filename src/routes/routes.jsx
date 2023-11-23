// Importa os componentes 'Route' e 'Routes' do pacote 'react-router-dom'.
import { Route, Routes } from "react-router-dom";

// Importa os diferentes contêineres e layouts usados nas rotas.
import Home from "../containers/Home";

import Servicos from "../containers/Servicos/index";
import DefaultLayout from "../layout/DefaultLayout";

import Contato from "../containers/Contato/";
import QuemSomos from "../containers/QuemSomos";

// Define uma função chamada 'Router'.
function Router() {
  return (
    <Routes>
      {/* Define um roteamento comum para todas as rotas dentro do elemento 'DefaultLayout'. */}
      <Route element={<DefaultLayout />}>
        {/* Define as rotas específicas dentro do layout padrão. */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="quemsomos" element={<QuemSomos />} />
      </Route>
    </Routes>
  );
}

// Exporta a função 'Router' como padrão para ser usada na configuração das rotas da aplicação.
export default Router;
