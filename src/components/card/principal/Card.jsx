import React from "react";
import { Link } from "react-router-dom";
import { CardStyled } from "./Styles";

const Card = (props) => {
  return (
    <Link to={props.link}>
      <CardStyled image={props.image}>
        <div className="img-card-cover"></div>
        <p>{props.title}</p>
      </CardStyled>
    </Link>
  );
};

export default Card;
