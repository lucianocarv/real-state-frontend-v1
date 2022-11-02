import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  min-height: 400px;

  .property-map {
    min-height: 400px;
    width: 100%;
    border-radius: 10px;
    & div {
      cursor: pointer;
    }
  }

  .coords-section {
    padding: 1rem 0rem;
    display: flex;
    gap: 1rem;
  }
`;
