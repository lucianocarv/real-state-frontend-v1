import styled from "styled-components";

export const CityPageStyled = styled.div`
  margin: 1rem auto;
  width: 100%;
  min-height: 50vh;
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

export const CityPageFilterContainer = styled.div`
  width: 70%;
  height: 3.5rem;
  border: 2px solid #0b846e;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const CityGridMap = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 550px;
  grid-template-rows: 1fr;
`;

export const CityMap = styled.div`
  background-color: red;
`;

export const CityList = styled.div`
  background-color: blue;
`;
