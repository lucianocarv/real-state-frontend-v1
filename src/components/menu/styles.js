import styled from "styled-components";

import { AppStyles } from "../../styles";

export const MStyles = styled.div`
  position: absolute;
  background-color: #fff;
  left: ${(props) => (props.close ? "-" + props.width : "0px")};
  width: ${(props) => props.width};
  min-height: 100vh;
  z-index: 3;
  transition: all 0.4s ease;

  button {
    padding: 1rem;
    font-size: 2rem;
    background-color: transparent;
    color: ${AppStyles.primaryColor};
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
      color: ${AppStyles.primaryColor};
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      border-radius: 5px;
      box-shadow: ${AppStyles.primaryBoxShadow};
      background-color: #fff;
      transition: all 0.2s ease;

      p {
        font-size: 17px;
      }

      &:hover {
        transform: translate(5px);
      }
    }
  }
`;
