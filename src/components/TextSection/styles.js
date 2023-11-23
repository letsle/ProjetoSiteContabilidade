import styled from "styled-components";
import Img from "../../assets/6novasimg.png";

// Define um componente estilizado para um contêiner de seção
export const SectionWrapper = styled.div`
  display: grid;
  grid-template-rows: 80px;
  justify-content: stretch;
  padding: 30px;
  box-shadow: 0px 0px 7px 1px #064d7988; /* Adicione a box-shadow */
  //margin: 0 auto; /* Centralize a seção */
  max-width: 100%; /* Define uma largura máxima para a seção */
  height: 100%;
  text-align: center;
  color: #003251;
  font-size: 18px;
  background: url(${Img}) left/cover no-repeat;

  p,
  h3 {
    padding: 100px;
    line-height: 2;
    color: #0d090a;
  }
`;
