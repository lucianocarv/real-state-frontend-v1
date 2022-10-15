import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { PulseLoader } from "react-spinners";
import styled from "styled-components";

import HeaderComponent from "../components/header/Header";
import Layout from "./Styles";

const LayoutComponent = () => {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <Layout>
      <HeaderComponent />
      <Outlet />
    </Layout>
  );
};

export default LayoutComponent;
