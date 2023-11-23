import CardContact from "../../components/CardContact/CardContact";
import CardSection from "../../components/Cards/CardSection.jsx";
import { Section } from "./styles";
import Footer from "../../components/Footer/footer";
import { useEffect } from "react";

// Componente React chamado Contato
function Contato() {
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

  return (
    <>
      {/* Renderiza uma seção com um componente CardContact */}
      <Section>
        <CardContact />
      </Section>
      {/* Renderiza uma seção com um componente CardSection */}
      <CardSection />
      {/* Renderiza o componente Footer (rodapé) */}
      <Footer />
    </>
  );
}

// Exporta o componente Contato
export default Contato;
