import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { ViewStyled } from "./styles";

import IconButton from "@mui/material/IconButton";

import { MdClose, MdFavoriteBorder } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { VscCircleFilled } from "react-icons/vsc";
import { BsFillHouseFill } from "react-icons/bs";
import { LoaderContainer } from "../../loading";
import { BarLoader, BeatLoader, ClipLoader, GridLoader, PuffLoader } from "react-spinners";

const PropertyModal = () => {
  const { province, city, community, property } = useParams();
  const [prop, setProp] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (property) {
      fetch(`${import.meta.env.VITE_BASE_URL}/${province}/${city}/${community}/${property}`)
        .then((resp) => resp.json())
        .then((property) => {
          setProp(property);
          setLoading(true);
          console.log(property);
        });
    }
  }, [property]);

  return property ? (
    <ViewStyled>
      <div className="view">
        {loading == true ? (
          <Fragment>
            <header className="view__header">
              <Link>
                <IconButton>
                  <MdFavoriteBorder fontSize={30} />
                </IconButton>
              </Link>
              <Link to={`/${province}/${city}`}>
                <IconButton
                  onClick={() => {
                    setLoading(false);
                    setProp({});
                  }}
                >
                  <MdClose fontSize={30} />
                </IconButton>
              </Link>
            </header>
            <div className="property">
              <img className="img" src={prop.img_cover} alt="" />
              <div className="info-property">
                <p className="align type">
                  <BsFillHouseFill />
                  {prop.type}
                </p>
                <p className="address">
                  <FaMapMarkerAlt />
                  <span className="align">{`${prop.address.number}, ${prop.address.street}`}</span>
                </p>
                <p className="align">
                  <IoIosPeople />
                  {`${prop.address.community}, Calgary, AB`}
                </p>

                <p className="align">
                  <IoIosPeople />
                  {`$${prop.prices.min} - $${prop.prices.max}`}
                </p>

                <p className="utitilies-included align">
                  <IoIosPeople />
                  {prop.utilitiesIncluded.map((util) => {
                    return (
                      <Fragment>
                        <span className="utility">{util}</span>

                        <span className="utility">
                          <VscCircleFilled fontSize={5} />
                        </span>
                      </Fragment>
                    );
                  })}
                </p>
                <div className="contact">
                  <p className="align">
                    {" "}
                    <IoIosPeople />
                    {prop.contact.manager}
                  </p>
                  <a className="align" href={`${prop.contact.website}`}>
                    <IoIosPeople /> website
                  </a>

                  <p className="align">
                    <IoIosPeople /> {prop.contact.phone}
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
      <div className="filter"></div>
    </ViewStyled>
  ) : (
    ""
  );
};

export default PropertyModal;