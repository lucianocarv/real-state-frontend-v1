import styled from "styled-components";

export const Button = styled.button`
  min-height: 2.5rem;
  padding: 0 1.5rem;
  margin: 0px 0.5rem;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const MenuButton = styled(Button)`
  background-color: transparent;
  &:hover {
    background-color: #efefef;
  }
`;

export const ActionButton = styled(Button)`
  background-color: ${(props) => (props.invert ? "white" : "#0b846e")};
  color: ${(props) => (props.invert ? "#0b846e" : "white")};
  font-size: 1rem;
  font-weight: 420;
  border: 2px solid #0b846e;
  &:hover {
    background-color: ${(props) => (props.invert ? "#0b846e" : "white")};
    color: ${(props) => (props.invert ? "white" : "#0b846e")};
    border: 2px solid ${(props) => (props.invert ? "#0b846e" : "#0b846e")};
  }
`;
