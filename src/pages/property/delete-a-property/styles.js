import styled from "styled-components";
import { AppStyles } from "../../../styles";

export const Styles = styled.div`
  padding: 0.5rem;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
`;

export const Card = styled.div`
  padding: 0.5rem;
  box-shadow: ${AppStyles.primaryBoxShadow};
`;
