// Importa os módulos necessários do arquivo styles.js
import { BannersWrapper } from "./styles";
// Importa dois componentes chamados Banner1 e Banner2 de arquivos locais
import Banner1 from "./banner1";
import Banner2 from "./banner2";

// Define um novo componente chamado BannersContainer
const BannersContainer = () => {
  // Retorna um elemento JSX que representa a estrutura do componente
  return (
    // Utiliza o componente BannersWrapper importado de styles.js
    // para envolver os componentes Banner1 e Banner2
    <BannersWrapper>
      {/* Renderiza o componente Banner1 */}
      <Banner1 />
      {/* Renderiza o componente Banner2 */}
      <Banner2 />
    </BannersWrapper>
  );
};

// Exporta o componente BannersContainer como o componente padrão deste arquivo
export default BannersContainer;
