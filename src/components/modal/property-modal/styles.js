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
  overflow: hidden;
  transition: ${AppStyles.transitions.RFPrimary};

  & .__modal {
    position: absolute;
    width: 36vw;
    min-height: 100vh;
    padding-bottom: 3rem;
    right: 0%;
    background-color: white;
    z-index: 1;
    border-radius: 20px 0px 0px 20px;
    animation: right-to-left 0.3s;

    &__header {
      min-height: 2rem;
      padding: 0.5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    & .__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      & .__img {
        padding: 0rem 4rem;
        img {
          max-inline-size: 100%;
          border-radius: 20px;
        }
      }

      & .__info,
      & .__contact {
        width: 100%;
        max-height: 440px;
        padding: 1rem 4rem 0rem 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 0.7rem;
        overflow: scroll;

        & > p {
          min-height: 2.5rem;
          padding: 0rem 0.5rem;
          width: 100%;
          background-color: #fafafa;
          color: ${AppStyles.color.RFPrimary};
          display: flex;
          align-items: center;
          font-weight: bold;
          border-radius: 10px;

          span {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-right: 0.5rem;
            font-size: 1.7rem;
          }
        }

        & .__prices {
          font-size: 1.1rem;
          background-color: ${AppStyles.color.RFPrimary};
          color: ${AppStyles.color.RFSecondary};
        }
      }

      & .__contact {
        p {
          background-color: ${AppStyles.color.RFPrimary};
          color: ${AppStyles.color.RFSecondary};
        }
      }
    }

    @keyframes right-to-left {
      0% {
        right: -50%;
      }
      100% {
        right: 0%;
      }
    }
  }

  & .__filter {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
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
