import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;

}
 
// ocultando a barra de rolagem horizontal
    body{
        overflow-x: hidden !important;
    }

  // Ocultando a barra de rolagem horizontal
  body {
    overflow-x: hidden !important;
  }

  /* Estilizando a barra de rolagem */
  /* Define a largura da barra de rolagem */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Define a cor de fundo da barra de rolagem */
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  /* Define a cor da alça (thumb) da barra de rolagem */
  ::-webkit-scrollbar-thumb {
    background-color: #00000056;
    border-radius: 5px;
  }

  /* Define a cor da alça (thumb) da barra de rolagem ao passar o mouse */
  ::-webkit-scrollbar-thumb:hover {
    background-color:#000000;
  }

`;
