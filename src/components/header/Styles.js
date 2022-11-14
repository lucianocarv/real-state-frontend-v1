import styled from "styled-components";
import { AppStyles } from "../../styles";

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #ddd;
`;

export const Left = styled.div`
  max-width: 50%;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Right = styled.div`
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  .btn button {
    text-transform: capitalize;
    color: ${AppStyles.secondaryColor};
    background-color: ${AppStyles.primaryColor};
    border-color: ${AppStyles.primaryColor};
  }

  .btn button:hover {
    text-transform: capitalize;
    color: ${AppStyles.primaryColor};
    background-color: ${AppStyles.secondaryColor};
  }
`;

export const Hamburguer = styled.button`
  height: 100%;
  min-width: 80px;
  display: flex;
  align-items: center;
  font-size: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-right: 2rem;
`;
