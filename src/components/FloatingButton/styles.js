import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const FloatingButton = styled.a`
  animation: ${pulse} 2s infinite;
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #25d366; // Cor do WhatsApp
  color: #fff;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  .WhatsAppIcon {
    width: 30px;
    height: 30px;
  }
`;
