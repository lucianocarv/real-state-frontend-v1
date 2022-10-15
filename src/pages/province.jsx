import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProvincePage = () => {
  const { province } = useParams();
  console.log(province);
  const [prov, setProvince] = useState([{}]);
  const [cities, setCities] = useState([{}]);
  useEffect(() => {
    fetch(`http://localhost:3001/${province}`)
      .then((data) => data.json())
      .then((data) => {
        setProvince(data);
        setCities(data[0].cities);
      });
  }, []);

  const Name = styled.p`
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin: 3rem 0rem;
  `;

  return (
    <div>
      <Name>{prov[0].name}</Name>
      <div>
        {cities.map((city) => (
          <p>{city.name}</p>
        ))}
      </div>
    </div>
  );
};

export default ProvincePage;
