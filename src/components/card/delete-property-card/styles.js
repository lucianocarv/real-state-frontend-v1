import styled from "styled-components";

import { AppStyles } from "../../../styles";

export const Styles = styled.div`
  border-radius: 8px;
  box-shadow: ${AppStyles.primaryBoxShadow};
  display: flex;
  justify-content: space-between;
  border: 1px solid ${AppStyles.primaryColor};

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
      font-size: 15px;
      font-weight: 600;

      span {
        padding-left: 0.5rem;
      }

      svg {
        font-size: 25px;
      }
    }
  }

  #__bottom {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding-bottom: 0.5rem;

    svg {
      font-size: 20px;
    }
  }
  #__img {
    display: flex;
    img {
      max-inline-size: 300px;
      aspect-ratio: 16/10;
      border-radius: 0px 8px 8px 0px;
    }
  }
`;
