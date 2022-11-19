import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Styles } from "./styles";

import { BarLoader } from "react-spinners";

import {
  MdClose,
  MdFavoriteBorder,
  MdOutlineAttachMoney,
  MdAssignmentTurnedIn,
  MdCall,
  MdGroups,
  MdOutlinePublic,
  MdLocationCity,
} from "react-icons/md";

import { FaMapMarkerAlt } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";
import { BsFillHouseFill } from "react-icons/bs";
import { LoaderContainer } from "../../loading";

import IconButton from "@mui/material/IconButton";

const Modal = () => {
  const { province, city, community, property } = useParams();
  const [currentProperty, setCurrentProperty] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (property) {
      fetch(`${import.meta.env.VITE_BASE_URL}/${province}/${city}/${community}/${property}`)
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
        {loading == true ? (
          <Fragment>
            <header className="__modal_header">
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
            <div className="__property">
              <img className="__img" src={currentProperty.img_cover} alt="" />
              <div className="__info_property">
                <p className="__align __type">
                  <BsFillHouseFill />
                  {currentProperty.type}
                </p>
                <p className="__address">
                  <FaMapMarkerAlt />
                  <span className="__align">{`${currentProperty.address.number}, ${currentProperty.address.street}`}</span>
                </p>
                <p className="__align">
                  <MdGroups />
                  {`${currentProperty.address.community}, ${currentProperty.address.city}, ${currentProperty.address.province}`}
                </p>

                <p className="__align">
                  <MdOutlineAttachMoney />
                  {`$${currentProperty.prices.min} - $${currentProperty.prices.max}`}
                </p>

                <p className="__utitilies_included __align">
                  <MdAssignmentTurnedIn />
                  {currentProperty.utilitiesIncluded.map((utility) => {
                    return (
                      <Fragment>
                        <span className="__utility">{utility}</span>

                        <span className="__utility">
                          <VscCircleFilled fontSize={5} />
                        </span>
                      </Fragment>
                    );
                  })}
                </p>
                <div className="__contact">
                  <p className="__align">
                    <MdLocationCity />
                    {currentProperty.contact.manager}
                  </p>
                  <a
                    className="__align"
                    target="_blank"
                    href={`${currentProperty.contact.website}`}
                  >
                    <MdOutlinePublic /> website
                  </a>

                  <p className="__align">
                    <MdCall /> {currentProperty.contact.phone}
                  </p>
                </div>
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
