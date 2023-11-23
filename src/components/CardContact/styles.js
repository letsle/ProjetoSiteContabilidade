import styled from "styled-components";

// Definição de um componente estilizado chamado CardWrapper para um cartão
export const CardWrapper = styled.div`
  box-shadow: 0px 0px 12px 1px #064d7988;
  border: none;
  border-radius: 8px;
  padding: 30px;
  margin: 10px;
  text-align: center;
  max-width: 250px;
  background-color: #ffffff;

  // Efeito de hover (quando o mouse passa sobre o cartão)
  &:hover {
    transform: scale(1.04); /* Aumenta o tamanho do card */
    transition: 0.2s;
    box-shadow: 0px 0px 20px 6px #064d79b9;
    border: none;
  }
  // Estilização de elementos com a classe "icon" dentro do CardWrapper
  .icon {
    font-size: 35px;
    color: #1fccd5;
  }
`;
// Definição de um componente estilizado chamado CardContainer para um contêiner de cartões
export const CardContainer = styled.div`
  color: #0d090a;
  padding-top: 120px 200px;
  display: flex; /* Isso tornará os cards flexíveis em uma linha */
  justify-content: center; /* Isso distribuirá o espaço entre os cards */
  gap: 30px;
  margin: 0 -10px; /* Isso compensará as margens dos cards individuais */
`;
// Definição de um componente estilizado chamado Icon para ícones
export const Icon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;
// Definição de um componente estilizado chamado Title para títulos
export const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 15px;
  padding-top: 10px;
`;
// Definição de um componente estilizado chamado Text para texto
export const Text = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
`;
// Definição de um componente estilizado chamado Button para botões
export const Button = styled.button`
  background-color: #1fccd5;
  color: white;
  border: none;
  border-radius: 40px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  // Efeito de hover (quando o mouse passa sobre o botão)
  &:hover {
    background-color: white;
    color: #1fccd5;
    border: 2px solid #1fccd5;
    transition: 0.3s;
  }
`;
// Definição de um componente estilizado chamado TitleMain para um título principal
export const TitleMain = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  padding-bottom: 40px;
  color: #0e9594;

  p {
    font-size: 40px;
    padding-right: 10px;
  }
`;
