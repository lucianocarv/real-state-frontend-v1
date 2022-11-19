import styled from "styled-components";

export const Styles = styled.div`
  margin: 0rem auto;
  width: 100%;

  & .__city_container {
    width: 100%;
    max-height: 100%;
    background-color: black;
    display: grid;
    grid-template-columns: 1fr 550px;
    grid-template-rows: 92vh;

    & .__map {
      background-color: #fff;

      .map-marker-price {
        font-size: 18px;
        height: 30px;
        width: 80px;
        border-radius: 50px;
        color: yellow;

        background-color: green;
      }
    }

    & .__property_list {
      position: relative;
      background-color: white;
      overflow-y: scroll;
      padding: 0.4rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: min-content;
      gap: 5px;

      & .__not_found {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        p {
          width: 350px;
        }

        svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
`;
