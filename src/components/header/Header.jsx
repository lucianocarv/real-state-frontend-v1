import React from "react";
import { Link } from "react-router-dom";

import { ActionButton, MenuButton } from "../button/Button";
import Logo from "../logo/Logo";

import { Header } from "./Styles";
import Left from "./Left";
import Right from "./Right";

import ContainerFull from "../container/ContainerFull";
import ContainerMd from "../container/ContainerMd";
import HamburguerComponent from "../menu/Hamburguer";

const HeaderComponent = () => {
  return (
    <ContainerFull>
      <Header>
        <ContainerMd>
          <Left>
            <MenuButton outlined>
              <HamburguerComponent />
            </MenuButton>
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
