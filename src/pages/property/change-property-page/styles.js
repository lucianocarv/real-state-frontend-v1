import styled from "styled-components";

export const Styles = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  & .__container {
    position: absolute;
    min-height: 100vh;
    width: 100vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-blend-mode: darken;
    background-color: black;
    opacity: 0.6;
    overflow: hidden;
  }

  & .__container_display {
    position: absolute;
    height: 90vh;
    width: 90vw;

    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    z-index: 1;
    animation: display 0.3s ease;
  }

  @keyframes display {
    0% {
      width: 0;
    }
    100% {
      width: 90vw;
    }
  }
`;
