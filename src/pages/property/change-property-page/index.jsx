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

  const [property, setPorperty] = useState({});

  useEffect(() => {
    async function getProperty() {
      const data = await fetch(`${import.meta.env.VITE_BASE_URL}/province/city/community/${id}`);
      const property = await data.json();
      setPorperty(property);
    }
    if (id) {
      getProperty();
    }
  }, [id]);

  console.log(property);

  return property ? (
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
          <LoaderContainer>
            <BarLoader />
          </LoaderContainer>
          <Form />
        </CoordsContextProvider>
      </div>
      <div className="__container"></div>
    </Styles>
  ) : (
    ""
  );
};

export default ChangePropertyPage;
