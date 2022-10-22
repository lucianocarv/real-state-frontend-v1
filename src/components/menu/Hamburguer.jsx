import React from "react";

import { CgMenu } from "react-icons/cg";
import { HamburguerStyled } from "./Styles";

const HamburguerComponent = (props) => {
  return (
    <HamburguerStyled onClick={() => props.click()}>
      <CgMenu />
    </HamburguerStyled>
  );
};

export default HamburguerComponent;
