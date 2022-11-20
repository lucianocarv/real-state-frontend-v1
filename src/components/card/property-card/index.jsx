import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PinContext } from "../../../contexts/PinContext";

import { IoLocationSharp, IoPeople, IoHome } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";

import Button from "@mui/material/Button";

import { Card } from "./styles";
import _ from "lodash";

const PropertyCard = ({ property }) => {
  const { setCurrentPin } = useContext(PinContext);

  const handleCurrentPin = () => {
    setCurrentPin(property._id);
  };
  return (
    <Card onMouseEnter={handleCurrentPin}>
      <div className="__info">
        <Link to={property.address.community + "/" + property._id}>
          <p className="__info__price">${property.prices.min + "-" + property.prices.max}</p>
        </Link>
        <ul className="__info__list">
          <li>
            <IoHome /> {property.type}
          </li>
          <li>
            <IoPeople /> {property.address.community}
          </li>
          <li>
            <IoLocationSharp /> {property.address.street}
          </li>
          <li>
            <FaHandshake /> {property.contact.manager}
          </li>
        </ul>
        <div className="__info__buttons">
          <Link to={_.kebabCase(property.address.community) + "/" + property._id}>
            <Button fullWidth variant="outlined">
              View
            </Button>
          </Link>
        </div>
      </div>
      <div className="__img">
        <img src={property.img_cover} alt={property.address.street + " / " + property.address.community} />
      </div>
    </Card>
  );
};

export default PropertyCard;
