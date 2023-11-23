import styled from "styled-components";

// Define um componente chamado SectionWrapper
export const SectionWrapper = styled.div`
  padding: 80px;
  display: flex;
  justify-content: space-between;
  height: 60%;
`;

// Define um componente chamado IconBox
export const IconBox = styled.div`
  height: 100px; /* Igual à largura para criar um círculo */
  display: flex;
  justify-content: center;
  background-color: #ffffff; /* Cor de fundo */
  box-shadow: 5px 8px 8px #064d7988;
  border-radius: 50%; /* Transforma o contêiner em um círculo */
  text-align: center;
  width: 110px;
  border: none;

  // Define estilos quando o mouse está sobre o componente
  &:hover {
    box-shadow: 0px 0px 20px 6px #064d7988;
    transition: 0.2s;
    border: none;
  }
`;

// Define um componente chamado Icon
export const Icon = styled.i`
  font-size: 80px;
  color: #0e9594;
  cursor: pointer;
`;

// Define um componente chamado Text com estilos CSS
export const Text = styled.p`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #0e9594;
`;
