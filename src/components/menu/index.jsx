import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../container/index";
import { MdClose, MdKeyboardArrowRight } from "react-icons/md";

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
          <Link to="/ab">
            <li>
              <MdKeyboardArrowRight />
              <p>Alberta</p>
            </li>
          </Link>
          <Link to="/bc">
            <li>
              <MdKeyboardArrowRight />
              <p>British Columbia</p>
            </li>
          </Link>
          <Link to="/ab/calgary">
            <li>
              <MdKeyboardArrowRight />
              <p>Calgary</p>
            </li>
          </Link>
          <Link to="/list-a-property">
            <li>
              <MdKeyboardArrowRight />
              <p>Insert Property</p>
            </li>
          </Link>

          <Link to="/manage-properties">
            <li>
              <MdKeyboardArrowRight />
              <p>Manage Properties</p>
            </li>
          </Link>
        </ul>
      </Container>
    </MStyles>
  );
};

export default Menu;
