import React from "react";
import { Styles } from "./styles";

import { Button } from "../../button/styles";
import { MdDelete, MdEdit, MdHome, MdGroups, MdOutlineAttachMoney, MdPerson } from "react-icons/md";

const Card = ({ property }) => {
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
          <Button invert>
            <MdEdit />
          </Button>
          <Button invert>
            <MdDelete />
          </Button>
        </div>
      </div>
      <div id="__img">
        <img src={property.img_cover} alt="" />
      </div>
    </Styles>
  );
};

export default Card;
