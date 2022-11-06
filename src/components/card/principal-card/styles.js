import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  height: 350px;
  min-width: 280px;
  background-color: black;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  .img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    background-color: #00000092;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
  }
  &:hover .img {
    transform: scale(1.1);
  }
  p {
    width: 100%;
    text-align: center;
    position: absolute;
    color: white;
    font-size: 30px;
    font-weight: bold;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
