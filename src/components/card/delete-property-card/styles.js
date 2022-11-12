import styled from "styled-components";

import { AppStyles } from "../../../styles";

export const Styles = styled.div`
  border-radius: 8px;
  box-shadow: ${AppStyles.terciaryBoxShadow};
  display: flex;
  justify-content: space-between;

  #__info {
    padding: 1rem 1rem 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: ${AppStyles.primaryColor};
      font-size: 14px;
      font-weight: 500;

      span {
        padding-left: 0.5rem;
      }

      svg {
        font-size: 20px;
      }
    }
  }

  #__bottom {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 0.5rem;

    svg {
      font-size: 20px;
    }
  }
  #__img {
    display: flex;
    img {
      max-inline-size: 250px;
      aspect-ratio: 16/10;
      border-radius: 0px 8px 8px 0px;
    }
  }
`;

export const Button = styled.button`
  outline: 0;
  border: 0;
  width: 40px;
  height: 40px;
  color: ${AppStyles.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  cursor: pointer;
  background-color: ${AppStyles.secondaryColor};
  transition: ${AppStyles.primaryTransition};
  box-shadow: ${AppStyles.terciaryBoxShadow};

  &:hover {
    box-shadow: ${AppStyles.secondaryBoxShadow};
  }
`;
