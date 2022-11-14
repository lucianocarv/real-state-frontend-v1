import styled from "styled-components";
import { AppStyles } from "../../../styles";

export const Card = styled.div`
  max-width: 600px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  border: 1px solid white;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid #0b846e;
  }

  .info {
    width: 100%;
    padding: 0.5rem;
    max-width: 100%;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    &__price {
      color: #000;
      font-weight: 600;
      font-size: 1.2rem;
      &:hover {
        color: #0b846e;
        text-decoration: underline #0b846e;
      }
    }

    &__list {
      padding: 0.5rem 0;
      list-style-type: none;
      font-weight: 600;
      font-size: 0.8rem;
      color: #0b846e;
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
        background-color: ${AppStyles.secondaryColor};
        color: ${AppStyles.primaryColor};
        border-color: ${AppStyles.primaryColor};
      }
      button:hover {
        background-color: ${AppStyles.primaryColor};
        color: ${AppStyles.secondaryColor};
        border-color: ${AppStyles.primaryColor};
      }
    }
  }

  .img {
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
