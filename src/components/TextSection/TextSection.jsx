import { SectionWrapper } from "./styles";

// Componente React chamado TextSection
const TextSection = () => {
  return (
    // Componente SectionWrapper contém todos os elementos da seção de texto
    <SectionWrapper>
      {/* Um título de terceiro nível */}
      <h3>Descubra o Poder da Contabilidade a Favor do Seu Negócio</h3>

      {/* Um parágrafo de texto informativo */}
      <p>
        A contabilidade profissional não é apenas uma necessidade, mas sim a
        chave para desbloquear o verdadeiro potencial de sua empresa. Ao optar
        por nossos serviços especializados, você ganha mais do que números
        organizados, ganha uma vantagem estratégica que impulsionará seu negócio
        para o sucesso duradouro. Trabalhamos lado a lado com você, entendendo
        as nuances do seu negócio para oferecer soluções personalizadas. <br />{" "}
        Não deixe que desafios contábeis limitem o potencial do seu
        empreendimento. Junte-se a nós e transforme sua contabilidade em uma
        poderosa alavanca para o sucesso empresarial.
      </p>
    </SectionWrapper>
  );
};

// Exporta o componente TextSection
export default TextSection;
