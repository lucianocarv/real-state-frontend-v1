import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./styles";

const PrincipalCard = (props) => {
  return (
    <Link to={props.link}>
      <Card image={props.image}>
        <div className="img"></div>
        <p>{props.title}</p>
      </Card>
    </Link>
  );
};

export default PrincipalCard;
