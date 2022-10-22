import styled from "styled-components";

export const PropertyCardStyled = styled.div`
  padding: 0.5rem;
  max-width: 600px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  border: 2px solid white;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid #0b846e;
  }
`;

export const PropertyCardImageStyled = styled.img`
  max-width: 250px;
  max-inline-size: 50%;
  block-size: auto;
  object-fit: contain;
`;

export const PropertyCardInfoStyled = styled.div`
  padding: 0.5rem;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PropertyCardInfoListStyled = styled.ul`
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
`;

export const PropertyCardPriceStyled = styled.p`
  color: #000;
  font-weight: 600;
  font-size: 1.2rem;
  &:hover {
    color: #0b846e;
    text-decoration: underline #0b846e;
  }
`;

export const CardInfoLine = styled.li``;

export const PropertyButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
