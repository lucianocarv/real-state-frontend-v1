import styled from "styled-components";

export const Styles = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  & header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

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
  }

  & .__container_display {
    position: absolute;
    height: 90vh;
    width: 60vw;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: scroll;

    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px 0px 0px 20px;
    z-index: 1;
  }

  & ::-webkit-scrollbar {
    border-radius: 50px;
    background-color: transparent !important;
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
