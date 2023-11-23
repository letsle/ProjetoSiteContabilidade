// Importa o componente BannerContainer de um arquivo chamado "styles"
import { BannerContainer } from "./styles";

// Define um componente funcional chamado Banner
const Banner1 = () => {
  return (
    // Renderiza um componente BannerContainer, que provavelmente contém estilos CSS personalizados
    <BannerContainer>
      {/* Comentários dentro do JSX */}
      {/* Conteúdo do primeiro banner */}
      <h3>
        Potencialize Seu Sucesso Empresarial com Nossos Serviços de
        Contabilidade Especializada
      </h3>
      <p>
        Oferecemos soluções contábeis especializadas para atender às
        necessidades exclusivas do seu negócio. Nosso time de profissionais
        dedicados está pronto para analisar e otimizar suas operações
        financeiras, garantindo conformidade com as normas vigentes. Contamos
        com expertise em gestão tributária, relatórios financeiros precisos e
        consultoria estratégica para impulsionar o crescimento sustentável da
        sua empresa.
      </p>
    </BannerContainer>
  );
};

// Exporta o componente Banner1 para que possa ser usado em outros lugares
export default Banner1;
