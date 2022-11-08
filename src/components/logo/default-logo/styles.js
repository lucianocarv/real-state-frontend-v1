import styled from "styled-components";

import { AppStyles } from "../../../styles";

export const WordStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => (props.first ? "black" : AppStyles.primaryColor)};
  font-size: 28px;
  font-weight: 700;
`;
