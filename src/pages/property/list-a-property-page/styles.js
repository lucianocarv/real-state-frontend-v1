import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;

  & h1 {
    width: 100%;
    text-align: center;
  }
  & .__sections {
    width: 60%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;

    & > div {
      padding: 1rem;
    }
  }
`;
