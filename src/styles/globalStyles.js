import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "BadMedicine";
    src: url('/fonts/DK Bad Medicine.otf');
  }    

  html, body, #__next, #__next > div {
    width: 100%;
    height: 100%;
  }

  *,
  *::after,
  *::before {
    min-width: 0;
    scroll-behaviour: smooth;
    box-sizing: border-box;
    font-family: "BadMedicine" !important;
  }

  img {
    user-drag: none;  
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
  
  body {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    color: white !important;
    background: black !important;
  }
`;

export default GlobalStyle;
