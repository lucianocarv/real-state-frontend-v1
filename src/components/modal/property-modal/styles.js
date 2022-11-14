import styled from "styled-components";
import { AppStyles } from "../../../Styles";

export const ViewStyled = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;

  .view {
    position: absolute;
    width: 90vw;
    min-height: 80vh;
    padding-bottom: 3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 1;
    border-radius: 20px;

    &__header {
      min-height: 2rem;
      padding: 0.5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .filter {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
  }

  .align {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .property {
    max-width: 100%;
    display: flex;
    align-items: flex-start;
    align-items: flex-start;
    gap: 1rem;

    img {
      width: 50%;
    }

    .info-property {
      width: 50%;
      padding: 0rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 16px;
      font-weight: bold;
      color: ${AppStyles.primaryColor};

      & > p {
        width: 70%;
        background-color: #e0f7fa;
        padding: 0.5rem;
        border-radius: 10px;
      }

      svg {
        font-size: 25px;
      }

      .type {
      }

      .address {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }

      .utitilies-included {
        display: flex;
        align-items: center;

        .utility {
          display: flex;
          align-items: center;
          svg {
            font-size: 10px !important;
          }
        }
      }

      .contact {
        background-color: #e0f7fa;
      }
    }
  }
`;
