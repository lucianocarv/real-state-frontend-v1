import styled from "styled-components";

export const LogoWordStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => (props.first ? "black" : "#0b846e ")};
  transform: ${(props) => (props.first ? "" : "skew(-12deg)")};
  font-size: 28px;
  font-weight: 800;
`;
