import React, { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { ActionButton } from "../button/styles";
import Logo from "../logo/Logo";
import { Header, Left, Right } from "./styles";
import Container from "../container/container";
// import Menu from "../menu/Menu";
import { CgMenu } from "react-icons/cg";
import { Hamburguer } from "./styles";

const HeaderComponent = ({ handleView }) => {
  return (
    <Container full>
      {/* <Menu click={closeMenu} close={close} /> */}
      <Header>
        <Container full width="100vw" justify="space-between" padding="0rem 1.5rem">
          <Left>
            <Hamburguer onClick={handleView}>
              <CgMenu />
            </Hamburguer>
            <Link to="/">
              <Logo />
            </Link>
          </Left>
          <Right>
            <ActionButton>
              <Link to="/list-a-property">List a Property</Link>
            </ActionButton>
            <ActionButton>Login</ActionButton>
          </Right>
        </Container>
      </Header>
    </Container>
  );
};

export default HeaderComponent;
