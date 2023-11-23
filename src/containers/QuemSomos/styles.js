// styles.js

import img from "../../assets/pexels3184306.jpg";

import imgBackground from "../../assets/8novasimg.png";

import styled, { keyframes } from "styled-components";

export const ContainerContent = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${img}); /* Caminho para a imagem de fundo */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(-20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.8s ease-out 0.2s forwards; /* Aplica a animação de entrada */
  opacity: 0; /* Inicialmente oculta o título */
  box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.247);
  padding: 10px;
  border-radius: 10px;
  color: #ffffff;
`;

export const TeamContainer = styled.div`
  background-color: #ffffff; /* Cor de fundo para a nova sessão */
  padding: 100px; /* Adicione o espaçamento desejado */
  text-align: center;
  color: #0d090a;

  .content-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: row-reverse;
  }

  .text-content {
    flex: 1;
    padding-right: 100px;
  }

  .img-about-us {
    max-width: 40%;
    height: auto;
    box-shadow: 8px 8px 12px 8px rgba(36, 23, 16, 0.534);
    border-radius: 30px;
  }
`;

export const TitleAboutUs = styled.h2`
  font-size: 28px;
  margin-bottom: 50px;
  padding-top: 60px;
`;

export const AboutUs = styled.div`
  font-size: 18px;
  margin-bottom: 80px;
  font-weight: bold;
`;

export const TeamTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 50px;
  padding-top: 10px;
`;

export const TeamText = styled.p`
  font-size: 18px;
  margin-bottom: 90px;
  font-weight: bold;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Os contêineres filhos ficarão separados horizontalmente. */
  align-items: center;
  background-color: #fff;
  padding: 40px;
  text-align: center;
  color: #0d090a;
`;

export const IconTextContainer = styled.div`
  flex: 1; /* Ocupará o espaço disponível à esquerda. */
  padding-right: 20px; /* Adicione espaçamento à direita para separar o texto dos ícones. */
`;

export const IconText = styled.p`
  font-size: 18px;
  text-align: center;
  border: none;
  background-color: #0e959515;
  box-shadow: 0px 0px 18px 4px #064d7988;
  border-radius: 20px;
  margin: 90px;
  margin-top: 150px;
  padding: 80px;
  color: #0d090a;
  line-height: 1.5;

  &:hover {
    transition: 0.4s;
    box-shadow: 0px 0px 20px 6px #064d7988;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  align-items: center;
  font-size: 80px;
  padding: 10px;
  color: #0e9594;

  p {
    font-size: 18px;
    font-weight: bold;
  }

  .icon:hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }
`;

export const SectionValues = styled.div`
  background-color: #fff; /* Cor de fundo para a nova sessão */
  padding: 40px; /* Adicione o espaçamento desejado */
  text-align: center;
  color: #0d090a;
  background: url(${imgBackground}) left/cover no-repeat;
`;

export const TitleNossosValores = styled.h2`
  font-size: 28px;
  margin-bottom: 80px;
  padding-top: 50px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const IconWrapperNossosValores = styled.div`
  display: flex;
  justify-content: space-between; /* Os contêineres filhos ficarão separados horizontalmente. */
  align-items: center;
  font-size: 70px;
  padding: 90px;
  color: #0e9594;

  p {
    font-size: 18px;
    font-weight: bold;
  }

  .icon:hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }
`;

export const TitleResources = styled.h2`
  font-size: 28px;
  margin-bottom: 80px;
  padding-top: 20px;
`;

export const SectionResources = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  background-color: #fff;
  padding: 40px;
  text-align: center;
  color: #0d090a;
`;

export const Text = styled.div`
  flex: 1;
  padding-right: 20px;
  font-size: 20px;
  margin-bottom: 40px;
  padding-top: 10px;
`;

export const Image = styled.img`
  max-width: 50%;
  height: auto;
  box-shadow: 8px 8px 12px 8px rgba(36, 23, 16, 0.534);
  border-radius: 30px;
`;
