// Importações dos componentes e estilos necessários do arquivo "./styles"
import { SectionContainer } from "./styles";

// Importações dos componentes Card, Card2 e Card3 de arquivos locais
import Card from "./card";
import Card2 from "./card2";
import Card3 from "./card3";

// Definição do componente CardSection
const CardSection = () => {
  return (
    // Contêiner da seção de cartões
    <SectionContainer>
      {/* Renderiza o componente Card */}
      <Card />
      {/* Renderiza o componente Card2 */}
      <Card2 />
      {/* Renderiza o componente Card3 */}
      <Card3 />
    </SectionContainer>
  );
};

export default CardSection; // Exporta o componente CardSection
