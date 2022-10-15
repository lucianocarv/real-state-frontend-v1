import React from "react";

import { CgMenu } from "react-icons/cg";
import { HamburguerStyled } from "./Styles";

const HamburguerComponent = () => {
  return (
    <HamburguerStyled>
      <CgMenu />
    </HamburguerStyled>
  );
};

export default HamburguerComponent;
