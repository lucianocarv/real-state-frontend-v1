import styled from "styled-components";

import { AppStyles } from "../../../styles";

export const Card = styled.div`
  position: relative;
  height: 350px;
  min-width: 280px;
  background-color: black;
  flex-grow: 1;
  border-radius: 10px;
  box-shadow: ${AppStyles.box_shadow.RFSecondary};
  cursor: pointer;
  overflow: hidden;

  & .__img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    background-color: #00000092;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${AppStyles.transitions.RFPrimary};
  }

  &:hover .__img {
    transform: scale(1.1);
  }

  & p {
    width: 100%;
    text-align: center;
    position: absolute;
    color: white;
    font-size: 30px;
    font-weight: bold;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
