import React from "react";

import { InputStyled } from "./styles";

const Input = ({ change, name, placeholder, id, value }) => {
  return (
    <InputStyled
      onChange={(e) => change(e)}
      name={name}
      placeholder={placeholder}
      id={id}
      value={value}
    ></InputStyled>
  );
};

export default Input;
