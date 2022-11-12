import styled from "styled-components";

export const ViewStyled = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;

  .view {
    position: absolute;
    width: 90vw;
    height: 90vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 5;
    border-radius: 20px;
    animation: display 0.3s ease;

    &__header {
      min-height: 2rem;
      padding: 0.5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .filter {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
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
