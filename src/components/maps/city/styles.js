import styled from "styled-components";

export const BoxIcon = styled.span`
  transition: all 0.4s ease;
  color: ${(props) => (props.pin ? "#0b846e" : "#0b846e")};
  filter: ${(props) => (props.pin ? "contrast(10)" : "")};
  animation: ${(props) => (props.pin ? "pin-animation 1s ease" : "")};

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

  path {
    transition: inherit;
  }

  &:hover path {
    filter: ${(props) => (props.pin ? "contrast(20)" : "contrast(20)")};
  }

  &:hover {
    transform: translateY(-5px) scale(1.2);
  }
`;
