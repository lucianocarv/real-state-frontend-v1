import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { CoordsContextProvider } from "../../../contexts/CoordsContext";

import { LoaderContainer } from "../../../components/loading/index";

import { Styles } from "./styles";
import { Form } from "../../../components/forms/update-property";

const ChangePropertyPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_BASE_URL}/p/c/c/${id}`)
        .then((data) => data.json())
        .then((property) => {
          setProperty(property);
          setLoading(false);
          console.log(property);
        });
    }
  }, [id]);

  return (
    <Styles>
      <div className="__container_display">
        <header>
          <Link to="/manage-properties">
            <IconButton>
              <MdClose />
            </IconButton>
          </Link>
        </header>
        <CoordsContextProvider>
          {loading ? (
            <LoaderContainer>
              <BarLoader />
            </LoaderContainer>
          ) : (
            <Form property={property} setProperty={setProperty} id={id} />
          )}
        </CoordsContextProvider>
      </div>
      <div className="__container"></div>
    </Styles>
  );
};

export default ChangePropertyPage;
