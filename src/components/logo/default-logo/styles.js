import styled from "styled-components";

import { Styles } from "../../../styles";

export const WordStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => (props.first ? "black" : Styles.primaryColor)};
  font-size: 28px;
  font-weight: 700;
`;
