// Importação da imagem do logotipo da empresa
import Logo from "../../assets/6logo.png";

// Importações dos componentes e estilos necessários do arquivo "./styles"
import {
  FooterWrapper,
  FooterContent,
  CompanyInfo,
  ContactInfo,
  Divider,
  SocialLinks,
  SocialLink,
  LogoImage,
} from "./styles";

// Importações de ícones de redes sociais da biblioteca "react-icons"

import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa";

// Definição do componente Footer (rodapé)
const Footer = () => {
  return (
    // Contêiner do rodapé
    <FooterWrapper>
      <FooterContent>
        {/* Informações da empresa */}
        <CompanyInfo>
          {/* Logotipo da empresa */}
          <LogoImage src={Logo} />
          <p>&copy; 2023 Desenvolvido por Letícia Leão</p>
        </CompanyInfo>
        {/* Informações de contato */}
        <ContactInfo>
          <h4>Contato</h4>
          <p>Email: leticiasilvaicm@gmail.com</p>
        </ContactInfo>
        <Divider /> {/* Linha divisória */}
        {/* Links para redes sociais */}
        <SocialLinks>
          {/* Link para o LinkedIn */}
          <SocialLink
            href="https://www.linkedin.com/in/leticialeaodev"
            target="_blank"
          >
            <SlSocialLinkedin className="fab fa-linkedin"></SlSocialLinkedin>
          </SocialLink>
          {/* Link para o Instagram */}
          <SocialLink href="https://github.com/letsle" target="_blank">
            <FaGithub className="fab fa-github"></FaGithub>
          </SocialLink>
          {/* Link para o WhatsApp */}
          <SocialLink
            href="https://api.whatsapp.com/send?phone="
            target="_blank"
          >
            <IoLogoWhatsapp className="fab fa-whatsapp"></IoLogoWhatsapp>
          </SocialLink>
          <SocialLink
            href="https://letsle.github.io/Portfolio/"
            target="_blank"
          >
            <FaRegFolderOpen className="fab fa-portfolio"></FaRegFolderOpen>
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer; // Exporta o componente Footer
