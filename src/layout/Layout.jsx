import React from "react";
import { Outlet } from "react-router";

import HeaderComponent from "../components/header/Header";
import ContainerFull from "../components/container/ContainerFull";
import Layout from "./Styles";

const LayoutComponent = () => {
  return (
    <ContainerFull>
      <Layout>
        <HeaderComponent />
        <Outlet />
      </Layout>
    </ContainerFull>
  );
};

export default LayoutComponent;
