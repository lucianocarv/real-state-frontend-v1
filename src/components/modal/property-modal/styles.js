import styled from "styled-components";
import { AppStyles } from "../../../Styles";

export const Styles = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;

  & .__modal {
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

  & .__filter {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
  }

  & .__align {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & .__property {
    max-width: 100%;
    display: flex;
    padding-left: 7rem;
    gap: 1rem;

    img {
      width: 50%;
      border-radius: 15px;
    }

    .__info_property {
      width: 50%;
      padding: 0rem 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      font-size: 16px;
      font-weight: bold;
      color: ${AppStyles.primaryColor};

      & > p {
        width: 80%;
        background-color: #e0f7fa;
        padding: 0.5rem;
        border-radius: 10px;
        display: flex;
        align-items: center;
      }

      svg {
        font-size: 25px;
        display: flex;
        align-items: center;
      }

      .__type {
      }

      .__address {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }

      .__utitilies_included {
        display: flex;
        align-items: center;
        overflow-x: scroll;

        .__utility {
          display: flex;
          align-items: center;
          svg {
            font-size: 10px !important;
          }
        }
      }

      .__contact {
        width: 80%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: ${AppStyles.primaryColor};
        color: ${AppStyles.secondaryColor};
        border-radius: 10px;

        a {
          color: whitesmoke;
        }
      }
    }
  }
`;
