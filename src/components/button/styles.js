import styled from "styled-components";

import { AppStyles } from "../../styles";

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
  background-color: ${(props) =>
    props.invert ? AppStyles.secondaryColor : AppStyles.primaryColor};
  color: ${(props) => (props.invert ? AppStyles.primaryColor : AppStyles.secondaryColor)};
  border: 2px solid ${AppStyles.primaryColor};
  transition: ${AppStyles.primaryTransition};

  &:hover {
    color: ${(props) => (props.invert ? AppStyles.secondaryColor : AppStyles.primaryColor)};
    background-color: ${(props) =>
      props.invert ? AppStyles.primaryColor : AppStyles.secondaryColor};
    border: 2px solid ${AppStyles.primaryColor};
  }

  a {
    color: ${AppStyles.secondaryColor};
  }
  &:hover a {
    color: ${AppStyles.primaryColor};
  }
`;
