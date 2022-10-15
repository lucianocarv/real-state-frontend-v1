import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProvinceCardStyles = styled.div`
  position: relative;
  height: 350px;
  width: 300px;
  background-color: red;
  flex-grow: 1;
  overflow: hidden;

  .img-card-province {
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

  border-radius: 10px;
  cursor: pointer;

  &:hover .img-card-province {
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

const ProvinceCard = (props) => {
  return (
    <Link to={props.link}>
      <ProvinceCardStyles image={props.image}>
        <div className="img-card-province"></div>
        <p>{props.title}</p>
      </ProvinceCardStyles>
    </Link>
  );
};

export default ProvinceCard;
