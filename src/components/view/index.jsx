import React from "react";
import { Link, useParams } from "react-router-dom";

import { ActionButton } from "../button/button-default/styles";
import { ViewStyled } from "./styles";

const View = () => {
  const { province, city, property } = useParams();

  return property ? (
    <ViewStyled>
      <div className="view">
        <header className="view__header">
          <Link to={`/${province}/${city}`}>
            <ActionButton invert>Favorite</ActionButton>
          </Link>
          <Link to={`/${province}/${city}`}>
            <ActionButton>Close</ActionButton>
          </Link>
        </header>
      </div>
      <div className="filter" />
    </ViewStyled>
  ) : (
    ""
  );
};

export default View;
