// Importações de componentes e estilos
import {
  CardContainer,
  CardWrapper,
  Title,
  Text,
  Button,
  TitleMain,
} from "./styles";

import { IoLogoWhatsapp } from "react-icons/io";
import { MdSupportAgent, MdEmail } from "react-icons/md";
import { BsChatRightDotsFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

// Componente CardContact que será exportado
const CardContact = () => {
  return (
    <>
      {/* Título principal do card de contato */}
      <TitleMain>
        <p>
          <BiSupport></BiSupport>
        </p>{" "}
        {/* Ícone de suporte */}
        <h1>Atendimento</h1> {/* Título "Atendimento" */}
      </TitleMain>

      {/* Container para os cartões de contato */}
      <CardContainer>
        {/* Cartão de contato para WhatsApp */}
        <CardWrapper>
          <IoLogoWhatsapp className="icon">📞</IoLogoWhatsapp>{" "}
          {/* Ícone de WhatsApp */}
          <Title>(XX) XXXX-XXXX</Title> {/* Número de telefone */}
          <Text>
            Converse em tempo real com um de nossos consultores para obter
            ajuda. De segunda a sexta, de 8h às 20h.
          </Text>{" "}
          {/* Texto informativo */}
          <Button>Acessar</Button> {/* Botão para acessar */}
        </CardWrapper>

        {/* Cartão de contato para Suporte por telefone */}
        <CardWrapper>
          <MdSupportAgent className="icon">📞</MdSupportAgent>{" "}
          {/* Ícone de suporte por telefone */}
          <Title>(XX) XXXX-XXXX</Title> {/* Número de telefone */}
          <Text>
            Converse em tempo real com um de nossos consultores para obter
            ajuda. De segunda a sexta, de 8h às 20h.
          </Text>{" "}
          {/* Texto informativo */}
          <Button>Acessar</Button> {/* Botão para acessar */}
        </CardWrapper>

        {/* Cartão de contato para Email */}
        <CardWrapper>
          <MdEmail className="icon">📞</MdEmail> {/* Ícone de email */}
          <Title>exemplo@email.com</Title> {/* Endereço de email */}
          <Text>
            Converse em tempo real com um de nossos consultores para obter
            ajuda. De segunda a sexta, de 8h às 20h.
          </Text>{" "}
          {/* Texto informativo */}
          <Button>Acessar</Button> {/* Botão para acessar */}
        </CardWrapper>

        {/* Cartão de contato para Chat */}
        <CardWrapper>
          <BsChatRightDotsFill className="icon">📞</BsChatRightDotsFill>{" "}
          {/* Ícone de chat */}
          <Title>Chat</Title> {/* Título "Chat" */}
          <Text>
            Converse em tempo real com um de nossos consultores para obter
            ajuda. De segunda a sexta, de 8h às 20h.
          </Text>{" "}
          {/* Texto informativo */}
          <Button>Acessar</Button> {/* Botão para acessar */}
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default CardContact; // Exporta o componente CardContact
