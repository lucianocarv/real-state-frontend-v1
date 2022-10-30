import styled from "styled-components";

export const Card = styled.div`
  padding: 0.5rem;
  max-width: 600px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  border: 2px solid white;
  border-radius: 5px;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid #0b846e;
  }

  .info {
    padding: 0.5rem;
    max-width: 50%;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    &__price {
      color: #000;
      font-weight: 600;
      font-size: 1.2rem;
      &:hover {
        color: #0b846e;
        text-decoration: underline #0b846e;
      }
    }

    &__list {
      padding: 0.5rem 0;
      list-style-type: none;
      font-weight: 600;
      font-size: 0.8rem;
      color: #0b846e;
      display: flex;
      flex-direction: column;

      li {
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }

      svg {
        font-size: 20px;
      }
    }

    &__buttons {
      display: flex;
      justify-content: space-between;
      gap: 0.8rem;
    }
  }

  .img {
    max-width: 250px;
    max-inline-size: 50%;
    block-size: auto;
    object-fit: contain;
  }
`;
