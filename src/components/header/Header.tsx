import React from "react";

import { HeaderStyle } from "./Styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Header</h1>
      <ul>
        <Link to="/ab">Alberta</Link>
      </ul>
    </HeaderStyle>
  );
};

export default Header;
