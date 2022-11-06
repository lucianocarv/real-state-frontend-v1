import styled from "styled-components";

export const InputStyled = styled.input.attrs(({ id, value, name }) => ({
  type: "text",
  id: id,
  value: value,
  name: name,
}))`
  min-width: 100px;
  min-height: 2.6rem;
  padding: 0rem 0.5rem;
  width: 100%;
  border: none;
  border: 1px solid #0b846e;
  border-radius: 3px;
  outline: none;

  &:focus {
    outline: 2px solid #0b846e;
  }
`;
