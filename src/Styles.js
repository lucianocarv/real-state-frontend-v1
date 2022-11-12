import { createGlobalStyle } from "styled-components";

export let globalColor = "#0b846e";
export let globalBoxShadow = "rgba(0, 0, 0, 0.18) 0px 2px 4px;";
export let AppStyles = {
  primaryColor: "#0b846e",
  secondaryColor: "#ffffff",
  primaryBoxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px;",
  secondaryBoxShadow: `rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
  rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset`,
  terciaryBoxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;",
  primaryTransition: "all .3s ease",
};

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

  

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${globalColor} !important;
  }

  .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${globalColor} !important;
  }
`;
