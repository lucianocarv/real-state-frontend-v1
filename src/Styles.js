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

    body {
      min-height: 101vh;
      max-width: 100vw;
    }

    a {
      text-decoration: none;
      display: flex
    }
`;
