import styled from "styled-components";

// Definição de um componente estilizado chamado MainButton
export const MainButton = styled.button`
  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    background: #ffffff;
    color: #ff0000;
    transition: 0.8s;
  }
`;
