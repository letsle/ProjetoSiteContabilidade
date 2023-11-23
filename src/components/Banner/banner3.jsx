// Importa o componente BannerContainer de um arquivo chamado "styles"
import { BannerContainer } from "./styles";

// Define um componente funcional chamado Banner
const Banner1 = () => {
  return (
    // Renderiza um componente BannerContainer, que provavelmente contém estilos CSS personalizados
    <BannerContainer>
      {/* Comentários dentro do JSX */}
      {/* Conteúdo do primeiro banner */}
      <h3>Banner com algum conteúdo</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ex
        vitae turpis fermentum convallis. Sed eleifend enim nec venenatis
        tristique.
      </p>
    </BannerContainer>
  );
};

// Exporta o componente Banner1 para que possa ser usado em outros lugares
export default Banner1;
