import React from "react";

import { BsEmojiFrown } from "react-icons/bs";
import styled from "styled-components";

const NoProperties = () => {
  return (
    <NoPropertiesStyled>
      <BsEmojiFrown />
      <p>Sorry, no properties were found for this city.</p>
    </NoPropertiesStyled>
  );
};

const NoPropertiesStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    width: 350px;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export default NoProperties;
