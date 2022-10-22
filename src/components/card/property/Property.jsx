import React from "react";
import { Link } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { IoLocationSharp, IoCheckmarkCircleSharp, IoPeople } from "react-icons/io5";
import { ActionButton } from "../../button/Button";

import { PropertyCardImageStyled, PropertyCardInfoListStyled, PropertyCardInfoStyled, PropertyCardPriceStyled, PropertyCardStyled, CardInfoLine, PropertyButtons } from "./Styles";
import View from "../../property/View";

const PropertyCard = (props) => {
  return (
    <PropertyCardStyled>
      <PropertyCardImageStyled src={props.img} alt="" />
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
            <IoLocationSharp /> 1515 12th Street SW
          </CardInfoLine>
          <CardInfoLine>
            <IoCheckmarkCircleSharp /> Unfurnished | Long Term
          </CardInfoLine>
        </PropertyCardInfoListStyled>
        <PropertyButtons>
          <ActionButton invert>Contact</ActionButton>
          <ActionButton invert>View</ActionButton>
        </PropertyButtons>
      </PropertyCardInfoStyled>
    </PropertyCardStyled>
  );
};

export default PropertyCard;
