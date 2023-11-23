// Importações dos componentes e estilos necessários do arquivo './styles'
import { CardContainer, Button } from "./styles";
import { Link } from "react-router-dom";

// Definição do componente Card
const Card = () => {
  return (
    // Contêiner do cartão
    <CardContainer>
      <h3>Gestão Fiscal e Tributária</h3> {/* Título do cartão */}
      <p>
        Nós assumimos a responsabilidade pela direção, organização e cálculo dos
        impostos da empresa, encarregando-nos de iniciar os procedimentos
        necessários mesmo antes da formalização do CNPJ...
      </p>
      <Link to={"/servicos"}>
        <Button>Saiba mais</Button> {/* Botão "Conheça" */}
      </Link>
    </CardContainer>
  );
};

export default Card; // Exporta o componente Card
