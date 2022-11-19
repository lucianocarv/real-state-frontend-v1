import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "../../../components/container";
import Card from "../../../components/card/manage-property-card/index";

import Snackbar from "@mui/material/Snackbar";

import { Styles } from "./styles";

const ManagePropertiesPage = () => {
  document.title = `Rentfaster Clone | Manage Properties`;

  const [properties, setProperties] = useState([]);
  const [propDeleted, setPropDeleted] = useState({ wasDelete: 1, response: "" });
  // const [deleteResponse, setDeleteResponse] = useState();

  function deleteProp(id) {
    fetch(`http://localhost:3001/manage-properties/c/p/delete/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setPropDeleted({ wasDelete: 2, response: resp.status });
      });

    setTimeout(() => {
      setPropDeleted({ wasDelete: 1, response: "initial" });
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
    <Container height="91vh" scroll full>
      <header></header>
      <Styles>
        <span className="__snackbar">
          {propDeleted.response == "deleted" ? (
            <span className="__success">
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={deleteProp}
                message={`Propriedade deletada com sucesso!`}
                key={"top" + "left"}
              />
            </span>
          ) : propDeleted.wasDelete !== 1 && propDeleted.wasDelete !== 2 ? (
            <span className="__failure">
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={deleteProp}
                message={`Nao foi possivel deletar a propriedade`}
                key={"top" + "left"}
              />
            </span>
          ) : (
            ""
          )}
        </span>
        {properties.map((property) => {
          return <Card key={property._id} property={property} eventDelete={deleteProp} />;
        })}
      </Styles>
      <Outlet />
    </Container>
  );
};

export default ManagePropertiesPage;
