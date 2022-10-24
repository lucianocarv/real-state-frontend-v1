import React from "react";

import { InputStyled } from "./styles";

const Input = ({ change, name, placeholder, id, width, value }) => {
  return (
    <InputStyled
      onChange={(e) => change(e)}
      name={name}
      placeholder={placeholder}
      id={id}
      width={width}
      value={value}
    ></InputStyled>
  );
};

export default Input;
