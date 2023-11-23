// Importa o componente 'Outlet' do pacote 'react-router-dom'.
import { Outlet } from "react-router-dom";

// Importa o componente 'Header' de um diretório específico.
import Header from "../components/Header";

// Define uma função chamada 'DefaultLayout'.
function DefaultLayout() {
  // Retorna uma estrutura JSX que representa um layout padrão.

  // Renderiza o componente 'Header' que provavelmente contém o cabeçalho da página.
  // Este componente pode conter elementos de navegação, logotipos, etc.
  return (
    <>
      <Header />

      {/* O componente 'Outlet' atua como um ponto de saída para as rotas aninhadas.
         Isso significa que as rotas filhas definidas em rotas aninhadas (nested routes)
         serão renderizadas aqui. */}
      <Outlet />
    </>
  );
}

// Exporta a função 'DefaultLayout' como padrão para que possa ser usada em outras partes do aplicativo.
export default DefaultLayout;
