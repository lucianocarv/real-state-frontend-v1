import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CityPage = () => {
  const { city } = useParams();
  console.log(city);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/${city}`);
  });
  return (
    <div>
      <p>City</p>
    </div>
  );
};

export default CityPage;
