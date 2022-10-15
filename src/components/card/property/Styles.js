import styled from "styled-components";

export const PropertyCardStyled = styled.div`
  padding: 0.5rem 1rem;
  min-height: 280px;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 12px;
  overflow: hidden;

  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  border: 3px solid white;
  transition: all 0.2s ease;

  &:hover {
    border: 3px solid #0b846e;
  }
`;

export const PropertyCardImageStyled = styled.img`
  width: 260px;
  height: 15rem;
  border-radius: 5px;
`;

export const PropertyCardInfoStyled = styled.div`
  padding: 0.7rem;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PropertyCardInfoListStyled = styled.ul`
  padding: 1rem 0;
  list-style-type: none;
  font-weight: 600;
  font-size: 0.8rem;
  color: #0b846e;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  svg {
    font-size: 18px;
  }
`;

export const PropertyCardPriceStyled = styled.p`
  color: #000;
  font-weight: 600;
  font-size: 1.5rem;
  &:hover {
    color: #0b846e;
    text-decoration: underline #0b846e;
  }
`;

export const CardInfoLine = styled.li`
  padding: 0.5rem;
`;
