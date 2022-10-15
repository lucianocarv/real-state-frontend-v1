import styled from "styled-components";

const ContainerMd = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : "space-between")};
  align-self: ${(props) => (props.self ? "center" : "")};
  gap: 1rem;
  flex-wrap: wrap;
`;

export default ContainerMd;
