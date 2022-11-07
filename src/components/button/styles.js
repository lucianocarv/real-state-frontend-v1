import styled from "styled-components";

import { Styles } from "../../styles";

export const Button = styled.button`
  min-height: 2.5rem;
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: 420;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => (props.invert ? Styles.secondaryColor : Styles.primaryColor)};
  color: ${(props) => (props.invert ? Styles.primaryColor : Styles.secondaryColor)};
  border: 2px solid ${Styles.primaryColor};
  transition: ${Styles.primaryTransition};

  &:hover {
    color: ${(props) => (props.invert ? Styles.secondaryColor : Styles.primaryColor)};
    background-color: ${(props) => (props.invert ? Styles.primaryColor : Styles.secondaryColor)};
    border: 2px solid ${Styles.primaryColor};
  }

  a {
    color: ${Styles.secondaryColor};
  }
  &:hover a {
    color: ${Styles.primaryColor};
  }
`;
