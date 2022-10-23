import React from "react";
import { Link } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { IoLocationSharp, IoPeople } from "react-icons/io5";
import { ActionButton } from "../../button/Button";

import { FaHandshake } from "react-icons/fa";

import { MdFavoriteBorder } from "react-icons/md";

import { PropertyCardImageStyled, PropertyCardInfoListStyled, PropertyCardInfoStyled, PropertyCardPriceStyled, PropertyCardStyled, CardInfoLine, PropertyButtons } from "./Styles";

const PropertyCard = (props) => {
  return (
    <PropertyCardStyled>
      <PropertyCardInfoStyled>
        <Link to={props.link}>
          <PropertyCardPriceStyled>${props.price}</PropertyCardPriceStyled>
        </Link>
        <PropertyCardInfoListStyled>
          <CardInfoLine>
            <IoHome /> {props.type}
          </CardInfoLine>
          <CardInfoLine>
            <IoPeople /> {props.community}
          </CardInfoLine>
          <CardInfoLine>
            <IoLocationSharp /> {props.address}
          </CardInfoLine>
          <CardInfoLine>
            <FaHandshake /> {props.company}
          </CardInfoLine>
        </PropertyCardInfoListStyled>
        <PropertyButtons>
          <ActionButton>Favorite</ActionButton>
          <Link to={props.link}>
            <ActionButton invert>View</ActionButton>
          </Link>
        </PropertyButtons>
      </PropertyCardInfoStyled>
      <PropertyCardImageStyled src={props.img} alt="" />
    </PropertyCardStyled>
  );
};

export default PropertyCard;
