import styled from "styled-components";

export const BoxIcon = styled.span`
  transition: all 0.2s ease;

  path {
    color: #0b846e;
    transition: inherit;
  }

  &:hover path {
    filter: contrast(20);
  }

  &:hover {
    transform: translateY(-5px) scale(1.2);
  }
`;
