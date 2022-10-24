import React from "react";
import { Link } from "react-router-dom";

import { IoLocationSharp, IoPeople, IoHome } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";

import { ActionButton } from "../../button/styles";
import { Card } from "./styles";

const PropertyCard = ({ link, type, price, community, address, img, company }) => {
  return (
    <Card>
      <div className="info">
        <Link to={link}>
          <p className="info__price">${price}</p>
        </Link>
        <ul className="info__list">
          <li>
            <IoHome /> {type}
          </li>
          <li>
            <IoPeople /> {community}
          </li>
          <li>
            <IoLocationSharp /> {address}
          </li>
          <li>
            <FaHandshake /> {company}
          </li>
        </ul>
        <div className="info__buttons">
          <ActionButton>Favorite</ActionButton>
          <Link to={link}>
            <ActionButton invert>View</ActionButton>
          </Link>
        </div>
      </div>
      <img className="img" src={img} alt="" />
    </Card>
  );
};

export default PropertyCard;
