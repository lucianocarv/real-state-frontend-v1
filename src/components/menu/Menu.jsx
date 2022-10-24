import React from "react";
import styled from "styled-components";
import { Button } from "../button/styles";
import ContainerMd from "../container/container";

import { globalColor } from "../../Styles";

import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

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
`;

const MenuList = styled.ul`
  padding: 0px 5px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ListItem = styled.li`
  width: 100%;
  height: 3rem;
  padding: 0px 10px;
  font-weight: 600;
  color: ${globalColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s ease;
  border-radius: 3px;
  border: 2px solid ${globalColor};

  &:hover {
    color: #fff;
    background-color: ${globalColor};
  }
`;

const Menu = (props) => {
  return (
    <MenuStyled width="290px" close={props.close}>
      <ContainerMd height="4.5rem" justify="flex-end">
        <CloseButtonStyled onClick={() => props.click()}>
          <MdClose />
        </CloseButtonStyled>
      </ContainerMd>
      <ContainerMd justify="flex-start">
        <MenuList>
          <Link to="/province/create">
            <ListItem>Insert Province</ListItem>
          </Link>
          <Link to="/ab">
            <ListItem>Apartments</ListItem>
          </Link>
          <Link to="/ab">
            <ListItem>Houses</ListItem>
          </Link>

          <Link to="/ab">
            <ListItem>All Cities</ListItem>
          </Link>
          <Link to="/ab">
            <ListItem>Estatistics</ListItem>
          </Link>
          <Link to="/ab">
            <ListItem>Price Comparision</ListItem>
          </Link>
          <Link to="/ab">
            <ListItem>Monst Rented</ListItem>
          </Link>
        </MenuList>
      </ContainerMd>
    </MenuStyled>
  );
};

export default Menu;
