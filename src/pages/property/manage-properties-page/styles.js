import styled from "styled-components";
import { AppStyles } from "../../../styles";

export const Styles = styled.div`
  padding: 1.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  overflow-x: hidden;

  .snackbar {
    position: absolute;
  }

  .snackbar .success div {
    background-color: ${AppStyles.primaryColor};
    border-radius: 5px;
  }

  .snackbar .failure div {
    background-color: red;
    border-radius: 5px;
  }
`;

export const Card = styled.div`
  padding: 0.5rem;
  box-shadow: ${AppStyles.primaryBoxShadow};
`;