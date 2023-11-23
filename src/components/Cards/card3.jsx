// Importações dos componentes e estilos necessários do arquivo "./styles"
import { CardContainer, Button } from "./styles";
import { Link } from "react-router-dom";

// Definição do componente Card
const Card = () => {
  return (
    // Contêiner do cartão
    <CardContainer>
      {/* Título do cartão */}
      <h3>
        Gestão <br /> Contábil
      </h3>
      <p>
        Nosso papel consiste em examinar, estruturar, categorizar, contabilizar
        e documentar todas as atividades da empresa, seguindo as normas e
        regulamentos em vigor, com o objetivo sempre em mente.
      </p>

      <Link to={"/servicos"}>
        <Button>Saiba mais</Button>
      </Link>
    </CardContainer>
  );
};

export default Card; // Exporta o componente Card
