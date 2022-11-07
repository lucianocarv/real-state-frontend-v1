import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../container/index";
import { Button } from "../button/styles";
import { Logo } from "../logo/default-logo/index";

import { Header, Left, Right, Hamburguer } from "./styles";
import { CgMenu } from "react-icons/cg";

const HeaderComponent = ({ handleView }) => {
  return (
    <Container full>
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
            <Button>
              <Link to="/list-a-property">List a Property</Link>
            </Button>
          </Right>
        </Container>
      </Header>
    </Container>
  );
};

export default HeaderComponent;
