import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;

    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #000;
    
    overflow: hidden;

    user-select: none;

    /* font-size: 12px; */
    /* color: #262626; */
    /* padding: 0; */
    /* margin: 0; */

    /* @media (prefers-color-scheme: dark) {
      color-scheme: dark;
    } */
  }

  body, 
  #__next {
    height: inherit;
    width: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button:focus {
    outline: unset;
  }

  /* Scroll */
  /* ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(204, 204, 204, 0.4);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    opacity: 0.7;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.2);
  } */
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b0b1b5;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  } 
`;

export default GlobalStyle;
