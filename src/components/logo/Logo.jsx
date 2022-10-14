import React, { Fragment } from "react";
import styled from "styled-components";

const LogoWord = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => (props.first ? "black" : "#0b846e ")};
  transform: ${(props) => (props.first ? "" : "skew(-12deg)")};
  font-size: 28px;
  font-weight: 800;
`;

const styl = {
  display: "flex",
  textDecoration: "none",
};

const Logo = () => {
  return (
    <Fragment>
      <LogoWord first>real</LogoWord>
      <LogoWord>state</LogoWord>
    </Fragment>
  );
};

export default Logo;
