import React from "react";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";

const Hamburguer = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

const HamburguerComponent = () => {
  return (
    <Hamburguer>
      <CgMenu />
    </Hamburguer>
  );
};

export default HamburguerComponent;
