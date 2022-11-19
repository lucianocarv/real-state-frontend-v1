import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../container/index";
import { Logo } from "../logo/default-logo/index";

import Button from "@mui/material/Button";

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
            <Link to="/list-a-property">
              <span className="__btn">
                <Button variant="outlined">List a Property</Button>
              </span>
            </Link>
          </Right>
        </Container>
      </Header>
    </Container>
  );
};

export default HeaderComponent;
