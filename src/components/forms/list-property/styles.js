import styled from "styled-components";

import { AppStyles } from "../../../styles";

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
      fieldset {
        border-color: ${AppStyles.color.RFPrimary} !important;
      }
    }

    .__section_form {
      width: 100%;
      display: flex;
    }
    .__section_2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      fieldset {
        border-color: ${AppStyles.color.RFPrimary} !important;
      }
    }

    .__buttons {
      button {
        background-color: ${AppStyles.color.RFPrimary};
        border-color: ${AppStyles.color.RFPrimary};
      }

      button:nth-child(1) {
        color: ${AppStyles.color.RFPrimary};
        background-color: ${AppStyles.color.RFSecondary};
      }
    }
  }
`;
