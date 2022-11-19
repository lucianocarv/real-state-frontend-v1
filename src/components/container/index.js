import styled from "styled-components";
import { AppStyles } from "../../styles";

export const Container = styled.div`
  padding: ${(props) => (props.padding ? props.padding : "0")};
  height: ${(props) => (props.height ? props.height : "")};
  max-width: ${(props) => (props.full == true ? "100%" : AppStyles.widths.RF1240)};
  width: 100%;
  display: ${(props) => (props.block ? "block" : "flex")};
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  flex-wrap: wrap;
  gap: 1rem;
  overflow: ${(props) => (props.scroll ? "scroll" : "hidden")};
  overflow-x: hidden;
`;
