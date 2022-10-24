import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ActionButton } from "../button/styles";
import Logo from "../logo/Logo";
import { Header, Left, Right } from "./styles";
import Container from "../container/container";
// import Menu from "../menu/Menu";
import { CgMenu } from "react-icons/cg";
import { Hamburguer } from "./styles";

const HeaderComponent = () => {
  const [close, setClose] = useState(true);

  const closeMenu = () => {
    close ? setClose(false) : setClose(true);
  };
  return (
    <Container full>
      {/* <Menu click={closeMenu} close={close} /> */}
      <Header>
        <Container full width="100vw" justify="space-between" padding="0rem 1.5rem">
          <Left>
            <Hamburguer onClick={() => closeMenu()}>
              <CgMenu />
            </Hamburguer>
            <Link to="/">
              <Logo />
            </Link>
          </Left>
          <Right>
            <ActionButton>List a Property</ActionButton>
            <ActionButton>Login</ActionButton>
          </Right>
        </Container>
      </Header>
    </Container>
  );
};

export default HeaderComponent;
