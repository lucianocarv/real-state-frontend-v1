import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ActionButton, MenuButton } from "../button/Button";
import Logo from "../logo/Logo";

import { Header } from "./Styles";
import Left from "./Left";
import Right from "./Right";

import ContainerFull from "../container/ContainerFull";
import ContainerMd from "../container/ContainerMd";
import HamburguerComponent from "../menu/Hamburguer";
import Menu from "../menu/Menu";

const HeaderComponent = () => {
  const [close, setClose] = useState(true);

  const closeMenu = () => {
    close ? setClose(false) : setClose(true);
  };
  return (
    <ContainerFull>
      <Menu click={closeMenu} close={close} />
      <Header>
        <ContainerMd>
          <Left>
            <HamburguerComponent click={closeMenu} />
            <Link to="/">
              <Logo />
            </Link>
          </Left>
          <Right>
            <ActionButton>List a Property</ActionButton>
            <ActionButton>Login</ActionButton>
          </Right>
        </ContainerMd>
      </Header>
    </ContainerFull>
  );
};

export default HeaderComponent;
