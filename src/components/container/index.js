import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => (props.padding ? props.padding : "0")};
  height: ${(props) => (props.height ? "92vh" : "")};
  max-width: ${(props) => (props.full == true ? "100vw" : "1240px")};
  width: 100%;
  display: ${(props) => (props.block ? "block" : "flex")};
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  flex-wrap: wrap;
  gap: 1rem;
  overflow: ${(props) => (props.scroll ? "scroll" : "hidden")};
`;
