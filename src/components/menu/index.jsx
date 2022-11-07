import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../container/index";
import {
  MdClose,
  MdFavorite,
  MdInsertChart,
  MdCollections,
  MdPublic,
  MdSettings,
} from "react-icons/md";

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
          <Link to="">
            <li>
              <MdSettings />
              <p>Manage</p>
            </li>
          </Link>
          <Link to="">
            <li>
              <MdFavorite />
              <p>Favorites</p>
            </li>
          </Link>
          <Link to="/ab">
            <li>
              <MdCollections />
              <p>Blog</p>
            </li>
          </Link>

          <Link to="/ab">
            <li>
              <MdPublic />
              <p>Information</p>
            </li>
          </Link>
          <Link to="/ab">
            <li>
              <MdInsertChart />
              <p>Graphics</p>
            </li>
          </Link>
        </ul>
      </Container>
    </MStyles>
  );
};

export default Menu;
