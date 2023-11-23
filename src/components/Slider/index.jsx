// Importa os componentes Swiper e SwiperSlide da biblioteca Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Importa os estilos base do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importa os estilos personalizados do aplicativo a partir do arquivo './styles.css'
import "./styles.css";

// Importa os módulos necessários do Swiper
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slide1 from "../../assets/pexels - imgSlides (8).jpg";
import slide2 from "../../assets/pexels - imgSlides (2).jpg";
import slide3 from "../../assets/pexels - imgSlides (3).jpg";
import slide4 from "../../assets/pexels - imgSlides (4).jpg";
import slide5 from "../../assets/pexels - imgSlides (5).jpg";
import slide6 from "../../assets/pexels - imgSlides (6).jpg";
import slide7 from "../../assets/pexels - imgSlides (7).jpg";
import slide8 from "../../assets/pexels - imgSlides (9).jpg";
import slide9 from "../../assets/pexels - imgSlides (1).jpg";

// Componente React principal do aplicativo
export default function App() {
  return (
    <div className="swiper-container">
      {/* Componente Swiper que envolve os slides */}
      <Swiper
        spaceBetween={30} // Espaço entre os slides
        centeredSlides={true} // Centraliza o slide ativo
        autoplay={{
          // Configuração da reprodução automática
          delay: 2500, // Delay entre os slides (em milissegundos)
          disableOnInteraction: false, // A reprodução automática não é desativada ao interagir com o slide
        }}
        pagination={{
          // Configuração da paginação
          clickable: true, // Permite clicar nos pontos de paginação para navegar para os slides
        }}
        navigation={true} // Habilita a navegação (setas de próxima e anterior)
        modules={[Autoplay, Pagination, Navigation]} // Adiciona os módulos necessários do Swiper
        className="mySwiper" // Classe CSS personalizada para o componente Swiper
      >
        {/* Cada SwiperSlide representa um slide individual */}
        <SwiperSlide>
          <img src={slide1} alt="" />
          <div className="slide-text">
            Bem-Vindo(a) Empresa X<br /> Seu sucesso online começa aqui!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <div className="slide-text">Desempenho Inigualável</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <div className="slide-text">Facilidade de Uso</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <div className="slide-text">Variedade de Serviços</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <div className="slide-text">Segurança Avançada</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
          <div className="slide-text">Preços Competitivos</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt="" />
          <div className="slide-text">Experiência e Confiança</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide8} alt="" />
          <div className="slide-text">Satisfação do Cliente</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide9} alt="" />
          <div className="slide-text">Suporte Técnico Excepcional</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
