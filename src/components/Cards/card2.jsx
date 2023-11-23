// Importações dos componentes e estilos necessários do arquivo "./styles"
import { CardContainer, Button } from "./styles";

import { Link } from "react-router-dom";

// Definição do componente Card
const Card = () => {
  return (
    // Contêiner do cartão
    <CardContainer>
      {/* Título do cartão */}
      <h3>Gestão e Planejamento Societário</h3>
      {/* Parágrafos de texto */}
      <p>
        Executamos todas as etapas necessárias para adquirir e regularizar sua
        empresa junto às entidades governamentais, assegurando uma maior
        confiança e proteção.
      </p>
      <Link to={"/servicos"}>
        <br />
        <Button>Saiba mais</Button>
      </Link>
    </CardContainer>
  );
};

export default Card; // Exporta o componente Card
