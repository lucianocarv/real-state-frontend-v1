import React from "react";
import { Link, useParams } from "react-router-dom";

import { Button } from "../button/styles";
import { ViewStyled } from "./styles";

const View = () => {
  const { province, city, property } = useParams();

  return property ? (
    <ViewStyled>
      <div className="view">
        <header className="view__header">
          <Link to={`/${province}/${city}`}>
            <Button invert>Favorite</Button>
          </Link>
          <Link to={`/${province}/${city}`}>
            <Button>Close</Button>
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
