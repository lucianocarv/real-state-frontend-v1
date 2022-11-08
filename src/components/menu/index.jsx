import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../container/index";
import { MdClose, MdDeleteOutline, MdOutlineUpdate, MdOutlineCreate } from "react-icons/md";

import { MStyles } from "./styles";

const Menu = ({ menuView, handleView }) => {
  return (
    <MStyles width="250px" close={menuView}>
      <Container height="3.5rem" justify="flex-end">
        <button onClick={() => handleView()}>
          <MdClose />
        </button>
      </Container>
      <Container justify="flex-start">
        <ul>
          <Link to="/list-a-property">
            <li>
              <MdOutlineCreate />
              <p>Insert Property</p>
            </li>
          </Link>
          <Link to="">
            <li>
              <MdOutlineUpdate />
              <p>Update Property</p>
            </li>
          </Link>
          <Link to="/delete-a-property">
            <li>
              <MdDeleteOutline />
              <p>Delete Property</p>
            </li>
          </Link>
        </ul>
      </Container>
    </MStyles>
  );
};

export default Menu;
