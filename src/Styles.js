import { createGlobalStyle } from "styled-components";

export let globalColor = "#0b846e";

export const GlobalStyles = createGlobalStyle`
    * {
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      &::-webkit-scrollbar {
        background-color: white;
        width: 10px;

      }
      &::-webkit-scrollbar-thumb {
        background-color: #0b846e;
        border-radius: 50px;
      }

    }

    a {
      text-decoration: none;
      display: flex
    }

    div.gm-style-iw-d {
     overflow: visible !important;
    }

    .gm-style-iw-tc {
      display: none;
    }

    .gm-style .gm-style-iw-c {
    background-color: transparent;
    box-shadow: none;
    overflow: hidden;
    cursor: pointer;
  }

    button.gm-ui-hover-effect {
    display: none !important; 
    background-color: transparent !important;
  }
`;
