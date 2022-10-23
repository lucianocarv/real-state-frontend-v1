import styled from "styled-components";

export const ViewStyled = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 99.4vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;

export const ViewHeader = styled.header`
  min-height: 2rem;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ViewFilter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`;

export const ViewProperty = styled.div`
  position: absolute;
  width: 80vw;
  height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 5;
  border-radius: 10px;

  animation: surge 0.2s;

  @keyframes surge {
    0% {
      height: 0;
      width: 50vw;
    }
    100% {
      height: 90vh;
      width: 80vw;
    }
  }
`;
