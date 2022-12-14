import styled from "styled-components";

export const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & .__title_animated {
    padding: 2rem;
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    flex-direction: column;

    & .__animation {
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
    }
  }

  & .__cities_section {
    max-width: 100vw;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 2rem;
    flex-wrap: wrap;
  }
`;
