import React from "react";
import { Outlet } from "react-router";
import HeaderComponent from "../components/header/Header";
import Layout from "./Styles";

const LayoutComponent = () => {
  return (
    <Layout>
      <HeaderComponent />
      <Outlet />
    </Layout>
  );
};

export default LayoutComponent;
