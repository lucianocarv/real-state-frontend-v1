import styled from "styled-components";

export const Styles = styled.div`
  .form-section {
    padding: 0.5rem 0;
  }

  #location-section {
    display: flex;
    gap: 1rem;
  }

  #address-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    .add-inp-street {
      grid-column-end: span 2;
    }
    .add-inp-community {
      grid-column-end: span 3;
    }
  }

  #price-section {
    display: flex;
    gap: 1rem;
  }

  #contact-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #buttons-section {
    display: flex;
    gap: 1rem;
  }

  p {
    padding: 1rem 0rem 0rem;
  }
`;
