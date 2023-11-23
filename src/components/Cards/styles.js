// Importa a biblioteca styled-components para criar estilos.
import styled from "styled-components";
import imgBackground from "../../assets/5novasimg.png";

// Define um componente estilizado chamado SectionContainer, que será uma div com estilos específicos.
export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 50px;
  background: url(${imgBackground}) left/cover no-repeat;
`;

// Define um componente estilizado chamado CardContainer, que será uma div com estilos específicos.
export const CardContainer = styled.div`
  // Estilos para sombra e borda do card.
  box-shadow: 0px 0px 12px 1px #064d7988;
  border: none;

  // Espaçamento interno e margem do card.
  padding: 20px;
  margin: 100px;
  margin-top: 50px;
  width: calc(33.33% - 20px);
  height: 450px;

  // Cor de fundo e borda arredondada.
  background-color: #ffffff;
  border-radius: 10px;

  // Estilos de layout e alinhamento de conteúdo.
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os itens horizontalmente */
  text-align: center;
  color: #0d090a;
  font-size: 16px;

  // Efeito de hover no card.
  &:hover {
    transform: scale(1.09); /* Aumenta o tamanho do card */
    transition: 0.4s;
    box-shadow: 0px 0px 20px 6px #064d7988;
    border: none;
  }

  // Estilos para os elementos de texto dentro do card.

  p {
    padding: 15px;
  }
`;

// Define um componente estilizado chamado Button, que será um botão com estilos específicos.
export const Button = styled.button`
  // Estilos de cor de fundo, texto, borda e borda arredondada do botão.
  background-color: #ba274a;
  color: #ffffff;
  border: none;
  border-radius: 40px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 40px;
  font-weight: bold;

  // Efeito de hover no botão.
  &:hover {
    background-color: #ba2749a9;
    transition: 0.3s;
  }
`;
