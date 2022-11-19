import styled from "styled-components";
import { AppStyles } from "../../../styles";

export const Styles = styled.div`
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 180px;
  gap: 0.5rem;

  .__snackbar {
    position: absolute;
  }

  .__snackbar .__success div {
    background-color: ${AppStyles.color.RFPrimary};
    border-radius: 5px;
  }

  .__snackbar .__failure div {
    background-color: red;
    border-radius: 5px;
  }
`;

export const Card = styled.div`
  padding: 0.5rem;
  box-shadow: ${AppStyles.box_shadow.RFPrimary};
`;
