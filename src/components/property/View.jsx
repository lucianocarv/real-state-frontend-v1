import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { ActionButton } from "../button/Button";

import { ViewStyled, ViewProperty, ViewFilter, ViewHeader } from "./Styles";

const View = () => {
  const { property, city, province } = useParams();

  return property ? (
    <Fragment>
      <ViewStyled>
        <ViewProperty>
          <ViewHeader>
            <Link to={`/${province}/${city}`}>
              <ActionButton invert>Favorite</ActionButton>
            </Link>
            <Link to={`/${province}/${city}`}>
              <ActionButton>Close</ActionButton>
            </Link>
          </ViewHeader>
        </ViewProperty>
        <ViewFilter />
      </ViewStyled>
    </Fragment>
  ) : (
    ""
  );
};

export default View;
