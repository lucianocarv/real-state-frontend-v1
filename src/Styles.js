import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

    a {
      text-decoration: none;
      display: flex
    }
`;
