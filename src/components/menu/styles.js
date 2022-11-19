import styled from "styled-components";

import { AppStyles } from "../../styles";

export const Styles = styled.div`
  position: absolute;
  background-color: ${AppStyles.color.RFSecondary};
  left: ${(props) => (props.close ? "-" + props.width : "0px")};
  width: ${(props) => props.width};
  min-height: 100vh;
  z-index: 3;
  transition: ${AppStyles.transitions.RFPrimary};

  button {
    padding: 1rem;
    font-size: 2rem;
    background-color: transparent;
    color: ${AppStyles.color.RFPrimary};
    border: none;
    outline: none;
    cursor: pointer;
  }

  ul {
    padding: 1rem 0.6rem;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;

    li {
      width: 100%;
      height: 2.5rem;
      padding: 0px 10px;
      font-weight: 600;
      font-size: 25px;
      color: ${AppStyles.color.RFPrimary};
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      border-radius: 5px;
      box-shadow: ${AppStyles.box_shadow.RFPrimary};
      background-color: #fff;
      transition: ${AppStyles.transitions.RFPrimary};

      p {
        font-size: 17px;
      }

      &:hover {
        transform: translate(5px);
      }
    }
  }
`;
