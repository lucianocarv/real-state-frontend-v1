import styled from "styled-components";

export const FooterFullContainerStyled = styled.div`
  width: 100%;
  min-height: 20rem;
  background-color: #212121;
  display: flex;
  justify-content: center;
`;

export const FooterStyled = styled.footer`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  padding: 1rem 0rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 1rem;
`;

export const FooterSectionStyled = styled.div`
  min-width: 280px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${(props) => (props.media ? "center" : "flex-start")};
  color: white;
`;

export const FooterSectionUlStyled = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => (props.media ? "30px" : "")};

  a {
    color: white;
    padding: 0.5rem 0rem;
    transition: all 0.2s ease;
    &:hover {
      color: #0b846e;
    }
  }
`;

export const FooterSectionTitleStyled = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 1rem 0;
  text-align: center;
`;
