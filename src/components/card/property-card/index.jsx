import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { PinContext } from "../../../contexts/PinContext";

import { IoLocationSharp, IoPeople, IoHome } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import Button from "@mui/material/Button";

import { Card } from "./styles";

const PropertyCard = ({ link, type, price, community, address, img, manager, id }) => {
  const { setCurrentPin } = useContext(PinContext);

  const handleCurrentPin = () => {
    setCurrentPin(id);
  };
  return (
    <Card onMouseEnter={handleCurrentPin}>
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
            <FaHandshake /> {manager}
          </li>
        </ul>
        <div className="info__buttons">
          <Link to={link}>
            <Button fullWidth variant="outlined">
              View
            </Button>
          </Link>
        </div>
      </div>
      <div className="img">
        <img src={img} alt={address + " / " + community} />
      </div>
    </Card>
  );
};

export default PropertyCard;
