import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Styles } from "./styles";

import { BarLoader } from "react-spinners";

import {
  MdClose,
  MdFavoriteBorder,
  MdAssignmentTurnedIn,
  MdCall,
  MdGroups,
  MdOutlinePublic,
  MdLocationCity,
  MdMap,
  MdPin,
  MdLocationPin,
  MdCallMade,
  MdGrade,
  MdLocationOn,
} from "react-icons/md";

import { FaMapMarkerAlt } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";
import { BsFillHouseFill } from "react-icons/bs";
import { LoaderContainer } from "../../loading";

import IconButton from "@mui/material/IconButton";
import _ from "lodash";

const Modal = () => {
  const { province, city, community, property } = useParams();
  const [currentProperty, setCurrentProperty] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (property) {
      fetch(`${import.meta.env.VITE_BASE_URL}/${province}/${city}/${_.kebabCase(community)}/${property}`)
        .then((resp) => resp.json())
        .then((property) => {
          setCurrentProperty(property);
          setLoading(true);
        });
    }
  }, [property]);

  return property ? (
    <Styles>
      <div className="__modal">
        {loading ? (
          <Fragment>
            <header className="__modal__header">
              <Link>
                <IconButton>
                  <MdFavoriteBorder fontSize={30} />
                </IconButton>
              </Link>
              <Link to={`/${province}/${city}`}>
                <IconButton
                  onClick={() => {
                    setLoading(false);
                    setCurrentProperty({});
                  }}
                >
                  <MdClose fontSize={30} />
                </IconButton>
              </Link>
            </header>
            <div className="__container">
              <div className="__img">
                <img src={currentProperty.img_cover} alt="" />
              </div>
              <div className="__info">
                <p className="__prices">
                  <span></span>${currentProperty.prices.min + "-" + currentProperty.prices.max}
                </p>
                <p>
                  <span>
                    <MdMap />
                  </span>
                  {currentProperty.address.city + ", " + currentProperty.address.province}
                </p>
                <p>
                  <span>
                    <MdLocationOn />
                  </span>
                  {currentProperty.address.number + ", " + currentProperty.address.street}
                </p>
              </div>
              <div className="__contact">
                <p>
                  <span>
                    <MdGrade />
                  </span>
                  {currentProperty.contact.manager}
                </p>
                <p>
                  <span>
                    <MdCall />
                  </span>
                  {currentProperty.contact.phone}
                </p>
              </div>

              <div className="__medias">
                <a href={currentProperty.contact.website} target="_blank">
                  Website
                </a>
              </div>
            </div>
          </Fragment>
        ) : (
          <LoaderContainer>
            <BarLoader />
          </LoaderContainer>
        )}
      </div>
      <div className="__filter"></div>
    </Styles>
  ) : (
    ""
  );
};

export default Modal;
