import styled from "styled-components";
import { AppStyles } from "../../../styles";

export const Styles = styled.div`
  padding: 1.5rem;
  width: 100%;
  max-height: 92vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 0.5rem;
  overflow-x: hidden;

  .status {
    width: 200px;
    height: 50px;
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;

    div {
      animation: display 1s ease;
    }

    @keyframes display {
      0% {
      }
    }
  }
`;

export const Card = styled.div`
  padding: 0.5rem;
  box-shadow: ${AppStyles.primaryBoxShadow};
`;
