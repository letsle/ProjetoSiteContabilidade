// Importa componentes e estilos de arquivos e diretórios específicos.
import { Section, IconSectionWrapper } from "./styles";
import Footer from "../../components/Footer/footer";
import CardServicos from "../../components/ReusableCardDetails/CardServicos";
//import CardSectionDetails from "../../components/ReusableSectionDetails/CardSectionDetailsEmail";
import CardIncludedPlans from "../../components/IncludedPlans/CardIncludedPlans";
import IconSection from "../../components/IconsSection/IconSection";
import FloatingWhatsAppButton from "../../components/FloatingButton/FloatingWhatsAppButton";
import { useEffect } from "react";
// Define uma função chamada 'Hospedagem'.
function Servicos() {
  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rolar suavemente
    });
  };
  // Use useEffect para chamar a função scrollToTop quando o componente for montado
  useEffect(() => {
    scrollToTop();
  }, []);

  // Retorna uma estrutura JSX que representa a página de hospedagem.
  return (
    <>
      {/* Inicia uma seção (um contêiner) usando o componente 'Section'. */}
      <Section>
        {/* Renderiza o componente 'CardHospedagem'. */}
        <CardServicos />

        {/* Renderiza o componente 'CardIncludedPlans'. */}
        <CardIncludedPlans />
      </Section>

      {/* Inicia uma seção (um contêiner) com o nome 'IconSectionWrapper'. */}
      <IconSectionWrapper>
        {/* Renderiza o componente 'IconSection'. */}
        <IconSection />
      </IconSectionWrapper>

      {/* Renderiza o componente 'Footer'. */}
      <Footer />

      <FloatingWhatsAppButton />
    </>
  );
}

// Exporta a função 'Hospedagem' como padrão para que possa ser usada em outros lugares.
export default Servicos;
