// Importação da biblioteca "styled-components"
import styled from "styled-components";
import img from "../../assets/pexels - imgSlides (6).jpg";

// Definição de um componente estilizado chamado BannerContainer
export const BannerContainer = styled.div`
  box-shadow: 0px 0px 12px 1px #064d7988;
  width: 50%; /* Cada banner ocupa metade da largura */
  padding: 20px;
  border: 1px solid #064d79;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 40px;
  margin-top: 30px;
  color: #0d090a;
  font-size: 16px;
  line-height: 1.5;

  // Efeito de transição no hover
  &:hover {
    transition: 0.4s;
    box-shadow: 0px 0px 20px 6px #064d7988;
  }

  // Estilização dos elementos p e h3 dentro de BannerContainer
  p,
  h3 {
    padding: 20px;
    text-align: center;
  }
`;

// Definição de um componente estilizado chamado BannersWrapper
export const BannersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  text-align: center;
  background: url(${img}) left/cover no-repeat;
`;
