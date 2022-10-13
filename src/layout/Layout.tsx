import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "../components/container/Container";
import { LayoutStyled } from "./Styles";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
