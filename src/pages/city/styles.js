import styled from "styled-components";

export const CityPageStyled = styled.div`
  margin: 0rem auto;
  width: 100%;
`;

export const CityPagePropertiesContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 5px;
  @media screen and (max-width: 1280px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const CityGridMap = styled.div`
  width: 100%;
  max-height: 100%;
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 550px;
  grid-template-rows: 92vh;
`;

export const CityMap = styled.div`
  background-color: #fff;

  .map-marker-price {
    font-size: 18px;
    height: 30px;
    width: 80px;
    border-radius: 50px;
    color: yellow;

    background-color: green;
  }
`;

export const CityList = styled.div`
  position: relative;
  background-color: white;
  overflow-y: scroll;
  padding: 0.4rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 5px;
`;

export const NotFound = styled.div`
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
`;
