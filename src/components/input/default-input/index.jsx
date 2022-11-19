import React from "react";
import { TextField } from "@mui/material";

import { Styles } from "./styles";

export const Input = ({ select, children, label, name, disabled, type, value, changeEvent }) => {
  return (
    <Styles>
      {select ? (
        <TextField
          label={label}
          name={name}
          select
          disabled={disabled}
          id="outlined-basic"
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => changeEvent(e)}
          value={value}
          children={children}
        />
      ) : (
        <TextField
          label={label}
          name={name}
          disabled={disabled}
          id="outlined-basic"
          variant="outlined"
          size="small"
          fullWidth
          type={type}
          onChange={(e) => changeEvent(e)}
          value={value}
        />
      )}
    </Styles>
  );
};
