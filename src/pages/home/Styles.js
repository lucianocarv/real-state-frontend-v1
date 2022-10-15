import styled from "styled-components";

export const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const HomePageTitleStyled = styled.h1`
  margin-top: 1rem;
  padding: 2rem;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

export const HomePageTitleAnimationStyled = styled.span`
  color: #0b846e;
  padding: 0rem 0.8rem;
  animation: init 5s;
  animation-iteration-count: infinite;
  @keyframes init {
    0% {
      transform: translateY(600px) skew(-40deg);
    }
    20% {
      transform: translate(0px);
    }
    80% {
      transform: translate(0px);
    }
    100% {
      transform: translateX(400px) skew(-60deg);
    }
  }
`;

export const HomePageCitiesSectionStyled = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
