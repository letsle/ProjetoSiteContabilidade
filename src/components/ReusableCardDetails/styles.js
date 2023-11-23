import styled from "styled-components";
import imgFiscal from "../../assets/imgFiscal.jpg";
import imgSocietario from "../../assets/imgSocietariojpg.jpg";
import imgContabil from "../../assets/imgContabil.jpg";
import imgTrabalhista from "../../assets/imgTrabalhista.jpg";

import imgBackground from "../../assets/1novasimg.png";

// Define um componente estilizado para uma linha de cartões
export const CardRow = styled.div`
  display: flex;
  justify-content: stretch;
  gap: 80px;
  margin-bottom: 10px;
  font-weight: bolder;
`;
// Define um componente estilizado para um contêiner de cartões
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: stretch;
  margin: 20px;
`;

export const CardIcon = styled.div`
  font-size: 50px;
  color: #1fccd5;
`;

// Define um componente estilizado para um título principal
export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 60px;
`;
// Define um componente estilizado para um cartão
export const Card = styled.div`
  box-shadow: 0px 0px 12px 1px #064d7988;
  border: none;
  padding: 30px;
  flex-basis: calc(33.33% - 60px);
  margin-bottom: 20px;
  border-radius: 8px;
  background: url(${imgBackground}) left/cover no-repeat;

  &:hover {
    transition: 0.3s;
    box-shadow: 0px 0px 20px 6px #064d79b9;
    border: none;
  }
`;
// Define um componente estilizado para o título de um cartão
export const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;
// Define um componente estilizado para um valor associado a um cartão
export const Value = styled.p`
  font-size: 18px;
  color: #0d090a;
  padding: 10px;
`;
// Define um componente estilizado para a descrição associada a um cartão
export const Description = styled.p`
  font-size: 16px;
  color: #0d090a;
  padding: 10px;
`;

export const ButtonCardDetails = styled.button`
  background-color: #ba274a;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 18px 20px;
  cursor: pointer;
  font-weight: bold;
  margin: 30px;
  font-size: 18px;

  &:hover {
    background-color: white;
    color: #ba274a;
    border: 2px solid #ba274a;
    transition: 0.2s;
  }
`;

export const ModalContent = styled.div`
  p.modal-paragraph {
    color: #0d090a;
    font-size: 20px;
    margin-bottom: 20px;
  }

  button.button-modal {
    background-color: #00c2e0;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 15px 30px;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #064d79;
    }
  }
`;

export const StyledParagraph = styled.p`
  flex-basis: 60%; /* Ajuste o valor conforme necessário */
  padding: 20px; /* Ajuste o espaçamento interno conforme necessário */
  font-size: 18px;
  color: #0d090a;
  border-radius: 8px;
`;

// Define um componente estilizado para o contêiner que conterá a imagem e o parágrafo
export const CustomizeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 80px;
  margin: 80px auto;
  max-width: 100vw; /* Ajuste a largura máxima conforme necessário */

  &:hover {
    transform: scale(1.09); /* Aumenta o tamanho do card */
    transition: 0.4s;
  }
`;

// Define um componente estilizado para a imagem
export const CustomizeImage = styled.div`
  max-width: 80%;
  box-shadow: 8px 8px 12px 8px rgba(36, 23, 16, 0.534);
  flex-basis: 50%; /* Define a largura da imagem para 50% */
  background-size: cover;
  height: 300px; /* Defina a altura da imagem conforme necessário */
  border-radius: 20px;

  &.fiscal {
    background: url(${imgFiscal}) center no-repeat;
  }

  &.societario {
    background: url(${imgSocietario}) center no-repeat;
  }

  &.contabil {
    background: url(${imgContabil}) center no-repeat;
  }

  &.trabalhista {
    background: url(${imgTrabalhista}) center no-repeat;
  }
`;
