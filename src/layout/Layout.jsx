import React, { Fragment, useState } from "react";
import { Outlet } from "react-router";

import HeaderComponent from "../components/header/Header";
import Layout from "./Styles";
import View from "../components/view/View";

import Container from "../components/container/container";
const LayoutComponent = () => {
  return (
    <Fragment>
      <Container block full justify="flex-start">
        <Layout>
          <HeaderComponent />
          <Outlet />
        </Layout>
        <View />
      </Container>
    </Fragment>
  );
};

export default LayoutComponent;
