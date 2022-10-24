import styled from "styled-components";

export const FooterFullContainerStyled = styled.div`
  width: 100%;
  min-height: 20rem;
  background-color: #212121;
  display: flex;
  justify-content: center;

  .footer {
    max-width: 1240px;
    width: 100%;
    height: 100%;
    padding: 1rem 0rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    section {
      min-width: 280px;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: ${(props) => (props.media ? "center" : "flex-start")};
      color: white;

      h2 {
        font-size: 1.3rem;
        font-weight: 600;
        padding: 1rem 0;
        text-align: center;
      }

      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        font-size: ${(props) => (props.media ? "30px" : "")};
        a {
          font-size: 0.8rem;
          color: #aaa;
          padding: 0.4rem 0rem;
          transition: all 0.1s ease;
          &:hover {
            color: #fff;
          }
        }
      }
    }
    #social-media {
      h2,
      ul {
        width: 100%;

        a {
          color: white;
          justify-content: center;
          font-size: 30px;
          &:hover {
            color: #0b846e;
          }
        }
      }
    }
  }
`;
