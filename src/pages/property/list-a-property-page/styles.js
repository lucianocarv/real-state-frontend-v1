import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  min-height: 10rem;

  h1 {
    width: 100%;
    text-align: center;
  }
  .sections {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;

    & > div {
      padding: 1rem;
    }
  }
`;
