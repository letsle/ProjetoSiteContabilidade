import styled from "styled-components";

// Define um componente estilizado chamado Container para uma barra de navegação.
export const Container = styled.div`
  min-height: 20px;
  z-index: 99; // Define a ordem de empilhamento (posição na tela).
  position: fixed; // Fixa a barra de navegação na parte superior.
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 80px;
  background-color: #064d79;
  width: 100%;
  background-color: ${(props) =>
    props.changeBackground
      ? "#0d090a28"
      : "#0D090A"}; // Cor de fundo condicional com transição.
  transition: background-color 0.8s ease-in-out; // Transição suave para a cor de fundo.

  // Define a largura e altura da imagem do logo.
  img {
    width: 80px;
    height: 80px;
  }
`;

// Define um componente estilizado chamado MainMenu para o menu principal.
export const MainMenu = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 50px;
  position: relative;
`;

// Define um componente estilizado chamado Li para itens de lista.
export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: ""; // Adiciona conteúdo gerado pseudo-elemento.
    height: 2px; // Define a altura da linha.
    width: ${(props) =>
      props.isActive ? "100%" : 0}; // Largura condicional com transição.
    background-color: #24d6df; // Cor da linha.
    position: absolute; // Define a posição absoluta em relação ao elemento pai.
    bottom: -10px; // Posiciona abaixo do texto.
    left: 50%; // Posiciona no centro horizontal.
    transform: translateX(-50%); // Centraliza horizontalmente.
    transition: width 0.5s ease-in-out; // Transição suave para a largura.
  }

  &:hover::after {
    width: 100%; // Largura da linha ao passar o mouse.
  }
`;

// Define um componente estilizado chamado Menu para botões e ícones do menu.
export const Menu = styled.div`
  display: flex;
  gap: 10px;
  align-self: center;
  position: relative;
  list-style-type: none;

  .transparent-button {
    background-color: ${(props) =>
      props.changeBackground
        ? "#f0003c"
        : "transparent"}; // Cor de fundo condicional com transição.
    transition: background-color 0.8s ease-in-out; // Transição suave para a cor de fundo.
  }

  .iconHome {
    cursor: pointer; // Define um cursor de ponteiro quando houver interação.
    color: #ffffff; // Define a cor do ícone como branco.
    font-size: 20px; // Define o tamanho da fonte.
    text-decoration: none; // Remove sublinhado de links.
  }

  // Estilos para botões
  button {
    border: none;
    background: #24d6df;
    color: #ffffff;
    border-radius: 20px;
    padding: 5px 15px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;

    &:hover {
      background: #ffffff; // Cor de fundo do botão ao passar o mouse.
      color: #24d6df; // Cor do texto ao passar o mouse.
      transition: 0.8s; // Duração da transição.
    }
  }
`;

// Estilos para o ContainerModal
export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;
// Define um componente estilizado chamado CustomModal para o conteúdo do modal.
export const CustomModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centralizar horizontalmente */
  justify-content: center; /* Centralizar verticalmente */
  text-align: center; /* Centralizar o texto */
  margin-bottom: 30px;
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0px 0px 20px 6px #003251; /* Sombra aplicada ao modal */

  .toggle-password {
    color: #064d7959; // Cor do ícone de exibição de senha.
    cursor: pointer;

    &:hover {
      color: #003251;
    }
  }

  .password-container {
    position: relative;
  }

  .password-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .paragraph {
    margin-top: 20px;
    color: #003251;
  }

  .button-close {
    margin-top: 30px;
  }

  h1 {
    font-size: 18px;
    text-align: center;
    padding-bottom: 15px;
    color: #003251;
  }

  .host-plan {
    display: flex;
    justify-content: center;
    color: #f0003c;
    cursor: pointer;
    font-weight: 400;
    text-decoration: none;
  }

  .link-password,
  .link-hosting {
    color: #003251;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      color: #1fccd5;
    }
  }

  /* Estilos para os botões */
  button {
    background-color: #1fccd5;
    color: white;
    border: none;
    padding: 6px 18px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    margin: 8px;

    &:hover {
      background-color: #0e9594;
    }
  }

  /* Estilos para o container de inputs */
  .input-container {
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;

      &:focus {
        border: 2px solid #0e9594; /* Borda vermelha para o input selecionado */
      }
    }
  }

  .error-message,
  .secure-password {
    color: #f0003c; // Cor do texto de mensagens de erro e senha segura.
    font-size: 14px;
    margin-top: 5px;
  }
`;
