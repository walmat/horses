import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #__next, #__next > div {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    background: url("/background.jpg");

  }

  *,
  *::after,
  *::before {
    min-width: 0;
    scroll-behaviour: smooth;
    box-sizing: border-box;
    font-family: "corn-dog" !important;
    font-weight: 400;
    font-style: normal;
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
