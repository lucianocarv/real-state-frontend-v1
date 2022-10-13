import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <Link to="/calgary">Calgary</Link>
      <Link to="/edmonton">Edmonton</Link>
    </ul>
  );
};

export default Nav;
