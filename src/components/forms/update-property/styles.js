import styled from "styled-components";

import { AppStyles } from "../../../styles";

export const Styles = styled.div`
  width: 80%;
  height: 100%;
  overflow-y: scroll;

  form {
    .__section {
      width: 100%;
      display: grid;
      padding: 0.5rem;
      fieldset {
        border-color: ${AppStyles.color.RFPrimary} !important;
      }
    }

    .__section_2 {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      padding: 0.5rem;
    }

    .__prices {
      fieldset {
        border-color: ${AppStyles.color.RFPrimary} !important;
      }
    }

    .__buttons {
      button {
        background-color: ${AppStyles.color.RFPrimary};
      }
    }
  }
`;
