import React from "react";
import styled from "styled-components";
import { Button } from "../button/styles";
import ContainerMd from "../container/container";

import { globalColor, globalBoxShadow } from "../../Styles";

import { MdClose, MdCreate } from "react-icons/md";
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
      <ContainerMd height="3.5rem" justify="flex-end">
        <CloseButtonStyled onClick={() => handleView()}>
          <MdClose />
        </CloseButtonStyled>
      </ContainerMd>
      <ContainerMd justify="flex-start">
        <MenuList>
          <Link to="/province/create">
            <ListItem>
              <MdCreate />
              <p>Insert Province</p>
            </ListItem>
          </Link>
          <Link to="/city/create">
            <ListItem>
              <MdCreate />
              <p>Insert City</p>
            </ListItem>
          </Link>
          <Link to="/ab">
            <ListItem>
              <MdCreate />
              <p>Apartments</p>
            </ListItem>
          </Link>

          <Link to="/ab">
            <ListItem>
              <MdCreate />
              <p>Apartments</p>
            </ListItem>
          </Link>
          <Link to="/ab">
            <ListItem>
              <MdCreate />
              <p>Apartments</p>
            </ListItem>
          </Link>
          <Link to="/ab">
            <ListItem>
              <MdCreate />
              <p>Apartments</p>
            </ListItem>
          </Link>
          <Link to="/ab">
            <ListItem>
              <MdCreate />
              <p>Apartments</p>
            </ListItem>
          </Link>
        </MenuList>
      </ContainerMd>
    </MenuStyled>
  );
};

export default Menu;
