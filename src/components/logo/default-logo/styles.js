import styled from "styled-components";

export const WordStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => (props.first ? "black" : "#0b846e ")};
  font-size: 28px;
  font-weight: 700;
`;
