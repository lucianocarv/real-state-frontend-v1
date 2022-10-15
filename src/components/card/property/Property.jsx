import React from "react";
import { Link } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { ActionButton } from "../../button/Button";

import { PropertyCardImageStyled, PropertyCardInfoListStyled, PropertyCardInfoStyled, PropertyCardPriceStyled, PropertyCardStyled, CardInfoLine } from "./Styles";

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
            <FaMapMarkerAlt /> {props.address}
          </CardInfoLine>
          <CardInfoLine>
            <IoIosPeople /> {props.community}
          </CardInfoLine>
          <ActionButton>Contact</ActionButton>
          <ActionButton invert>Hide</ActionButton>
        </PropertyCardInfoListStyled>
      </PropertyCardInfoStyled>
    </PropertyCardStyled>
  );
};

export default PropertyCard;
