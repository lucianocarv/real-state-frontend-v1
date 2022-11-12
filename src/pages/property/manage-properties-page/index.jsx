import React, { Fragment, useEffect, useState } from "react";
import { Container } from "../../../components/container";

import Card from "../../../components/card/delete-property-card/index";
import { Styles } from "./styles";
import { Outlet } from "react-router-dom";

import Alert from "@mui/material/Alert";
import { BiCheck } from "react-icons/bi";

import Snackbar from "@mui/material/Snackbar";

const ManageProperties = () => {
  document.title = `Rentfaster Clone | Manage Properties`;

  const [properties, setProperties] = useState([]);
  const [propDeleted, setPropDeleted] = useState({ bool: false, id: "" });
  // const [deleteResponse, setDeleteResponse] = useState();

  function deleteProp(id) {
    fetch(`http://localhost:3001/manage-properties/c/p/delete/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((resp) => {
        // setDeleteResponse(resp.status);
      });
    setPropDeleted({ bool: true, id: id });

    setTimeout(() => {
      setPropDeleted(false);
    }, 3000);
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/province/city/community/properties/all`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setProperties(data);
      });
  }, [propDeleted]);

  return (
    <Fragment>
      <Container full>
        <Styles>
          <div className="status">
            {propDeleted.bool ? (
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={deleteProp}
                message={`A propriedade ${propDeleted.id} foi deletada com sucesso!`}
                key={"top" + "left"}
              />
            ) : (
              ""
            )}
          </div>
          {properties.map((property) => {
            return <Card key={property._id} property={property} eventDelete={deleteProp} />;
          })}
        </Styles>
      </Container>
      <Outlet />
    </Fragment>
  );
};

export default ManageProperties;
