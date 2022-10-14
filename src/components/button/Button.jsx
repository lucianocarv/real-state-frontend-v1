import styled from "styled-components";

export const Button = styled.button`
  min-height: 3rem;
  padding: 0 2rem;
  margin: 0px 1rem;
  outline: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
`;

export const MenuButton = styled(Button)`
  background-color: transparent;
  &:hover {
    background-color: #efefef;
  }
`;

export const ActionButton = styled(Button)`
  background-color: #0b846e;
  color: white;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    background-color: #1e5f23;
  }
`;
