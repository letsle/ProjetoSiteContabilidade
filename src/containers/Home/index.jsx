// Importa o componente 'CardSection' de um diretório específico.
import CardSection from "../../components/Cards/CardSection";

// Importa o componente 'Slider' de um diretório específico.
import Slider from "../../components/Slider";

// Importa o componente 'Section' de um arquivo local chamado 'styles'.
import { Section } from "./styles";

// Importa o componente 'BannersContainer' de um diretório específico.
import BannersContainer from "../../components/Banner/BannersContainers";

// Importa o componente 'TextSection' de um diretório específico.
import TextSection from "../../components/TextSection/TextSection";

// Importa o componente 'IconsSection' de um diretório específico.
import IconsSection from "../../components/IconsSection/IconSection";

// Importa o componente 'Footer' de um diretório específico.
import Footer from "../../components/Footer/footer";

import FloatingWhatsAppButton from "../../components/FloatingButton/FloatingWhatsAppButton";

import { useEffect } from "react";

// Declaração de uma função chamada 'Home'.
function Home() {
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

  // Retorna uma estrutura JSX que representa a página inicial.
  return (
    // Inicia uma seção (um contêiner) para os componentes.
    <Section>
      {/* Renderiza o componente 'Slider'. */}
      <Slider />

      {/* Renderiza o componente 'CardSection'. */}
      <CardSection />

      {/* Renderiza o componente 'BannersContainer'. */}
      <BannersContainer />

      {/* Renderiza o componente 'TextSection'. */}
      <TextSection />

      {/* Renderiza o componente 'IconsSection'. */}
      <IconsSection />

      {/* Renderiza o componente 'Footer'. */}
      <Footer />
      {/* Renderiza o componente 'FloatingWhatsApp'. */}
      <FloatingWhatsAppButton />
    </Section>
  );
}

// Exporta a função 'Home' como padrão para que possa ser usada em outros lugares.
export default Home;
