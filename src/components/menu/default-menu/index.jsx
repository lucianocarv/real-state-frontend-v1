import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "../../container/default-container/index";
import { Button } from "../../button/button-default/styles";
import { globalColor, globalBoxShadow } from "../../../styles";

import {
  MdClose,
  MdFavorite,
  MdInsertChart,
  MdCollections,
  MdPublic,
  MdSettings,
} from "react-icons/md";

const MenuStyled = styled.div`
  position: absolute;
  background-color: #fff;
  left: ${(props) => (props.close ? "-" + props.width : "0px")};
  width: ${(props) => props.width};
  min-height: 100vh;
  z-index: 3;
  transition: all 0.4s ease;
`;

const CloseButtonStyled = styled(Button)`
  font-size: 2rem;
  background-color: transparent;
  color: ${globalColor};
`;

const MenuList = styled.ul`
  padding: 1rem 0.6rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ListItem = styled.li`
  width: 100%;
  height: 2.5rem;
  padding: 0px 10px;
  font-weight: 600;
  font-size: 25px;
  color: ${globalColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  border-radius: 5px;
  box-shadow: ${globalBoxShadow};
  background-color: #fff;
  transition: all 0.2s ease;

  p {
    font-size: 17px;
  }

  &:hover {
    transform: translate(5px);
  }
`;

const Menu = ({ menuView, handleView }) => {
  return (
    <MenuStyled width="250px" close={menuView}>
      <Container height="3.5rem" justify="flex-end">
        <CloseButtonStyled onClick={() => handleView()}>
          <MdClose />
        </CloseButtonStyled>
      </Container>
      <Container justify="flex-start">
        <MenuList>
          <Link to="">
            <ListItem>
              <MdSettings />
              <p>Manage</p>
            </ListItem>
          </Link>
          <Link to="">
            <ListItem>
              <MdFavorite />
              <p>Favorites</p>
            </ListItem>
          </Link>
          <Link to="/ab">
            <ListItem>
              <MdCollections />
              <p>Blog</p>
            </ListItem>
          </Link>

          <Link to="/ab">
            <ListItem>
              <MdPublic />
              <p>Information</p>
            </ListItem>
          </Link>
          <Link to="/ab">
            <ListItem>
              <MdInsertChart />
              <p>Graphics</p>
            </ListItem>
          </Link>
        </MenuList>
      </Container>
    </MenuStyled>
  );
};

export default Menu;
