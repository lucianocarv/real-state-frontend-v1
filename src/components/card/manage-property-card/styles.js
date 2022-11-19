import styled from "styled-components";

import { AppStyles } from "../../../styles";

export const Styles = styled.div`
  border-radius: 8px;
  box-shadow: ${AppStyles.box_shadow.RFterciary};
  display: flex;
  justify-content: space-between;

  & #__info {
    padding: 1rem 1rem 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: ${AppStyles.color.RFPrimary};
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

  & #__bottom {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 0.5rem;

    svg {
      font-size: 20px;
    }
  }
  & #__img {
    display: flex;
    img {
      max-inline-size: 250px;
      aspect-ratio: 16/10;
      border-radius: 0px 8px 8px 0px;
    }
  }

  & .__btn {
    border: 1px solid ${AppStyles.color.RFPrimary};
    color: ${AppStyles.color.RFPrimary};
  }

  & .__btn:hover {
    color: ${AppStyles.color.RFPrimary};
  }
`;
