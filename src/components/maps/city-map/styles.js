import styled from "styled-components";

import { AppStyles } from "../../../styles";

export const BoxIcon = styled.span`
  transition: ${AppStyles.primaryTransition};
  color: ${AppStyles.primaryColor};
  filter: ${(props) => (props.pin ? "contrast(10)" : "none")};
  animation: ${(props) => (props.pin ? "pin-animation 1s ease" : "none")};

  @keyframes pin-animation {
    0% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(-10px);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(-10px);
    }
    80% {
      transform: translateY(0px);
    }
  }

  &:hover {
    transform: translateY(-5px) scale(1.1);
  }
`;
