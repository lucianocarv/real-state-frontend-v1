import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    .__section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .__section_form {
      width: 100%;
      display: flex;
    }
    .__section_2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;