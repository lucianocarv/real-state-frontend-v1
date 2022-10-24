import styled from "styled-components";

export const InputStyled = styled.input.attrs(({ id, value, name }) => ({
  type: "text",
  id: id,
  value: value,
  name: name,
}))`
  min-width: 100px;
  min-height: 40px;
  padding: 0rem 0.5rem;
  width: ${(props) => (props.width ? props.width : "auto")};
  border: none;
  border: 2px solid #0b846e;
  border-radius: 5px;
  outline: none;
`;
