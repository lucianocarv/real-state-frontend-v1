import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ActionButton, MenuButton } from "../button/Button";
import ContainerMd from "../container/ContainerMd";
import Logo from "../logo/Logo";
import HamburguerComponent from "../menu/Hamburguer";
import Left from "./Left";
import Right from "./Right";

const Header = styled.header`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #ddd;
`;

const linkStyle = {
  textDecoration: "none",
};

const HeaderComponent = () => {
  return (
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
          <ActionButton>List a Property</ActionButton> | <ActionButton>Login</ActionButton>
        </Right>
      </ContainerMd>
    </Header>
  );
};

export default HeaderComponent;
