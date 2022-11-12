import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(2.5rem, 8vh) 1fr auto;
  max-height: 100vh;
`;

export default Layout;
