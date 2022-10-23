import React from "react";
import styled from "styled-components";

const CSSInput = styled.input.attrs((props) => ({
  type: "text",
  id: props.id,
  value: props.value,
  name: props.name,
}))`
  min-width: 100px;
  min-height: 40px;
  padding: 0 0.5rem;
  width: ${(props) => (props.width ? props.width : "auto")};
  border: none;
  border: 2px solid #0b846e;
  border-radius: 5px;
  outline: none;
`;

const Input = (props) => {
  return <CSSInput onChange={(e) => props.change(e)} name={props.name} placeholder={props.placeholder} id={props.id} width={props.width} value={props.value}></CSSInput>;
};

export default Input;
