import React from "react";
import { Link } from "react-router-dom";
import { Styles } from "./styles";

import IconButton from "@mui/material/IconButton";

import { MdDelete, MdEdit, MdHome, MdGroups, MdOutlineAttachMoney, MdPerson } from "react-icons/md";

const Card = ({ property, eventDelete }) => {
  return (
    <Styles>
      <div id="__info">
        <div id="___details">
          <p>
            <MdHome />
            <span>{property.type}</span>
          </p>
          <p>
            <MdGroups />
            <span>{property.address.community}</span>
          </p>
          <p>
            <MdOutlineAttachMoney /> <span>{property.prices.min}</span>
          </p>
          <p>
            <MdPerson />
            <span>{property.contact.manager}</span>
          </p>
        </div>
        <div id="__bottom">
          <Link to={`/manage-properties/c/c/p/change/${property._id}`}>
            <IconButton className="__btn">
              <MdEdit />
            </IconButton>
          </Link>
          <IconButton className="__btn" onClick={() => eventDelete(property._id)}>
            <MdDelete />
          </IconButton>
        </div>
      </div>
      <div id="__img">
        <img src={property.img_cover} alt="" />
      </div>
    </Styles>
  );
};

export default Card;
