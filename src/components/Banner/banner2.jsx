// Importa o componente BannerContainer de um arquivo chamado "styles"
import { BannerContainer } from "./styles";

// Define um componente funcional chamado Banner2
const Banner2 = () => {
  return (
    // Renderiza um componente BannerContainer, que provavelmente contém estilos CSS personalizados
    <BannerContainer>
      {/* Comentários dentro do JSX */}
      {/* Conteúdo do segundo banner */}
      <h3>
        Descomplicando a Contabilidade: Sua Parceria Estratégica para o Sucesso
        Financeiro
      </h3>
      <p>
        Simplificamos a contabilidade para que você possa se concentrar no que
        realmente importa: o crescimento do seu negócio. Com uma abordagem
        transparente e personalizada, nossos serviços abrangem desde a gestão de
        folha de pagamento até estratégias fiscais avançadas. Conte conosco como
        sua parceira estratégica para alcançar novos patamares de sucesso
        financeiro.
      </p>
    </BannerContainer>
  );
};

export default Banner2;
