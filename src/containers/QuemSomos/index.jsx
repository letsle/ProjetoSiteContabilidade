// index.jsx
import {
  Container,
  Title,
  TeamContainer,
  TeamTitle,
  TeamText,
  AboutUs,
  TitleAboutUs,
  IconContainer,
  IconWrapper,
  IconText,
  IconTextContainer,
  SectionValues,
  TitleNossosValores,
  Paragraph,
  IconWrapperNossosValores,
  SectionResources,
  TitleResources,
  Text,
  Image,
  ContainerContent,
} from "./styles";
import Footer from "../../components/Footer/footer";

import { useEffect } from "react";

import { FaAward, FaHandsHelping } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbStairsUp } from "react-icons/tb";
import { GiFruitTree } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";

import img from "../../assets/pexels1181406.jpg";

import imgAboutUs from "../../assets/pexels3184431.jpg";
import FloatingWhatsAppButton from "../../components/FloatingButton/FloatingWhatsAppButton";

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
      <Container>
        <a href="#team">
          <Title>Conheça nossa trajetória</Title>
        </a>
      </Container>

      <ContainerContent>
        <TeamContainer id="team">
          <div className="content-wrapper">
            <img
              src={imgAboutUs}
              alt="Foto De Pessoas Perto De Uma Mesa De Madeira Com as mãos uma em cima da outra
              "
              className="img-about-us"
            />
            <div className="text-content">
              <TitleAboutUs>Sobre Nós</TitleAboutUs>
              <AboutUs>
                Bem-vindo à Empresa X, onde a inovação encontra a dedicação.
                Nascemos da paixão por desafios e da crença inabalável no poder
                da excelência. Nosso compromisso é transcender expectativas,
                moldando um caminho único no cenário empresarial. Somos uma
                equipe diversificada de mentes criativas e empreendedoras,
                unidas por um propósito comum: impulsionar o progresso.
                Acreditamos que a autenticidade é a essência do sucesso, e é
                através dessa autenticidade que construímos relacionamentos
                sólidos e duradouros. Na Empresa X, não somos apenas uma
                empresa; somos uma comunidade de visionários determinados a
                transformar visões em realidade. Conheça-nos além das palavras e
                descubra a história que estamos construindo juntos.
              </AboutUs>

              <TeamTitle>Nosso Time</TeamTitle>
              <TeamText>
                Na Empresa X, acreditamos no poder da colaboração e na força que
                emana da diversidade. <br /> Cada membro traz habilidades
                únicas, contribuindo para a sinergia que impulsiona nossa
                inovação. Juntos, enfrentamos desafios, celebramos conquistas e
                construímos o futuro da Empresa X com paixão e determinação.
                Conheça as faces por trás do sucesso da nossa jornada
              </TeamText>
            </div>
          </div>
        </TeamContainer>

        <IconContainer>
          <IconTextContainer>
            <IconText>
              Fruto de um desempenho consistente, consolidamos nossa presença
              com uma sede própria, ampliamos nossos recursos especializados,
              estabelecemos parcerias estratégicas, reforçamos nossa identidade
              de marca e ampliamos nossas operações para abranger novas
              tecnologias e territórios. Adotamos uma abordagem de trabalho
              direta, eficiente e eficaz, colhendo assim resultados notáveis e
              excepcionais.
            </IconText>
          </IconTextContainer>

          <IconWrapper>
            <div>
              <HiOutlineLightBulb className="icon"></HiOutlineLightBulb>
              <p>Inovar</p>
            </div>
            <div>
              <TbStairsUp className="icon"></TbStairsUp>
              <p>Evoluir</p>
            </div>
            <div>
              <GiFruitTree className="icon"></GiFruitTree>
              <p>Prosperar</p>
            </div>
          </IconWrapper>
        </IconContainer>

        <SectionResources>
          <Text>
            <TitleResources>Recursos</TitleResources>
            <p>
              Nossa equipe é formada por profissionais capacitados, apaixonados
              por tecnologia e desafios. Somos uma mistura de analistas
              competidores, engenheiros criativos, construtores de
              relacionamento, caçadores de talentos, gestores carismáticos e
              executores de alta performance. Trabalhamos com muita sinergia e
              diligencia em cada projeto. O resultado esperado é a certeza de
              entregar um bom trabalho, superando as expectativas do cliente o
              que nos enche de orgulho e motivação.
            </p>
          </Text>
          <Image src={img} alt="Descrição da imagem" />
        </SectionResources>

        <SectionValues>
          <TitleNossosValores>Nossos Valores</TitleNossosValores>
          <Paragraph>
            Os valores fundamentais da nossa empresa são a essência do que
            fazemos. Eles orientam todas as nossas escolhas e ações, formando o
            alicerce da nossa cultura corporativa.
          </Paragraph>
          <IconWrapperNossosValores>
            <div>
              <FaHandsHelping className="icon" />
              <p>Comprometimento</p>
            </div>
            <div>
              <IoShieldCheckmarkOutline className="icon" />
              <p>Integridade</p>
            </div>
            <div>
              <FaUsersGear className="icon" />
              <p>Dinamismo</p>
            </div>

            <div>
              <FaAward className="icon" />
              <p>Excelência</p>
            </div>
          </IconWrapperNossosValores>
        </SectionValues>
      </ContainerContent>

      <Footer />

      <FloatingWhatsAppButton />
    </>
  );
}

export default Contato;
