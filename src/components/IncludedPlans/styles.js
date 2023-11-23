import styled from "styled-components";
import imgBackground from "../../assets/8novasimg.png";

export const Container = styled.div`
  background: url(${imgBackground}) left/cover no-repeat;
  width: 100vw;
  margin-left: -200px;
`;

// Define um componente chamado Text com estilos CSS para um parágrafo
export const Text = styled.p`
  font-size: 16px;
  color: #0d090a;
  padding: 10px;
  font-weight: bolder;
`;
// Define um componente chamado IncludedPlans com estilos CSS para uma seção
export const IncludedPlans = styled.section`
  background-color: transparent; // Cor de fundo diferente para destacar
  padding: 20px;

  display: flex;
  justify-content: center;
  // Define estilos quando o mouse está sobre o componente
  &:hover {
    transform: scale(1.03);
    transition: 0.4s;
  }
`;
// Define um componente chamado IncludedList com estilos CSS para uma lista não ordenada
export const IncludedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
// Define um componente chamado IncludedListItem com estilos CSS para um item de lista
export const IncludedListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
// Define um componente chamado TitleIncludedPlans com estilos CSS para um título de seção
export const TitleIncludedPlans = styled.h2`
  padding: 80px;
  font-size: 25px;
  color: #0d090a;
`;
// Define um componente chamado IconWrapper com estilos CSS para um contêiner de ícone
export const IconWrapper = styled.div`
  margin-right: 10px; // Espaçamento entre o ícone e o texto
  display: flex;
  align-items: center;
`;
