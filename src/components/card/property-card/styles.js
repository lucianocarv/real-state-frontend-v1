import styled from "styled-components";
import { AppStyles } from "../../../styles";

export const Card = styled.div`
  max-width: 600px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  box-shadow: ${AppStyles.box_shadow.RFPrimary};
  border: 1px solid ${AppStyles.color.RFSecondary};
  border-radius: 8px;
  transition: ${AppStyles.transitions.RFPrimary};

  &:hover {
    border: 1px solid ${AppStyles.color.RFPrimary};
  }

  & .__info {
    width: 100%;
    padding: 0.5rem;
    max-width: 100%;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    &__list {
      padding: 0.5rem 0;
      list-style-type: none;
      font-weight: 600;
      font-size: 0.8rem;
      color: ${AppStyles.color.RFPrimary};
      display: flex;
      flex-direction: column;

      li {
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }

      svg {
        font-size: 20px;
      }
    }

    &__price {
      color: ${AppStyles.color.RFTerciary};
      font-weight: 600;
      font-size: 1.2rem;
      &:hover {
        color: ${AppStyles.color.RFPrimary};
        text-decoration: underline ${AppStyles.color.RFPrimary};
      }
    }

    &__buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 0.8rem;

      a {
        width: 100%;
      }

      button {
        text-transform: capitalize;
        font-size: 14px;
        background-color: ${AppStyles.color.RFSecondary};
        color: ${AppStyles.color.RFPrimary};
        border-color: ${AppStyles.color.RFPrimary};
      }
      button:hover {
        background-color: ${AppStyles.color.RFPrimary};
        color: ${AppStyles.color.RFSecondary};
        border-color: ${AppStyles.color.RFPrimary};
      }
    }
  }

  & .__img {
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    img {
      max-inline-size: 280px;
      aspect-ratio: 16/10;
      border-radius: 0px 8px 8px 0px;
    }
  }
`;
