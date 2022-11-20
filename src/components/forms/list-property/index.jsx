import { Button, ButtonGroup, MenuItem, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import InputMask from "react-input-mask";
import _ from "lodash";

import { CoordsContext } from "../../../contexts/CoordsContext";

import { Input } from "../../input/default-input";
import Map from "../../maps/property-map";
import { Property, property, types } from "./main";

import { Styles } from "./styles";

export const Form = () => {
  const { coords, setCoords } = useContext(CoordsContext);
  const [inputs, setInputs] = useState(property);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    (async function () {
      const provinces = await getProvinces();
      setProvinces(provinces);
    })();
    try {
      (async function () {
        const cities = await getCities(inputs.address.province.toLowerCase());
        setCities(cities);
      })();
    } catch (error) {
    } finally {
      console.log("Fetch to Cities Finalizado");
    }
    if (inputs.address.city.length > 1) {
      try {
        (async function () {
          const city = await getCommunities(_.kebabCase(inputs.address.province), _.kebabCase(inputs.address.city));
          city?.coords ? setCoords({ lat: city.coords.lat, lng: city.coords.lng }) : undefined;
          city?.communities ? setCommunities(city.communities) : undefined;
        })();
      } catch (error) {
      } finally {
        console.log("Fetch to City Finalizado");
      }
    }
    (async function () {
      try {
        const id = await getCommunityId(
          _.kebabCase(inputs.address.province),
          _.kebabCase(inputs.address.city),
          _.kebabCase(inputs.address.community)
        );
        setInputs({ ...inputs, address: { ...inputs.address, communityID: id } });
      } catch (error) {
      } finally {
        console.log("Fetch Community ID Finalizado");
      }
    })();
  }, [inputs.address.province, inputs.address.city, inputs.address.community]);

  function handleChange(e) {
    let [target_name, target_value] = [e.target.name, e.target.value];
    if (
      target_name == "province" ||
      target_name == "city" ||
      target_name == "community" ||
      target_name == "street" ||
      target_name == "number"
    ) {
      setInputs({ ...inputs, address: { ...inputs.address, [target_name]: target_value } });
    } else if (target_name == "type" || target_name == "img_cover") {
      setInputs({ ...inputs, [target_name]: target_value });
    } else if (target_name == "min" || target_name == "max") {
      setInputs({ ...inputs, prices: { ...inputs.prices, [target_name]: target_value } });
    } else if (target_name == "manager" || target_name == "website" || target_name == "phone") {
      setInputs({ ...inputs, contact: { ...inputs.contact, [target_name]: target_value } });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newProperty = new Property(inputs, coords);
    console.log(newProperty);
    const create = await createProperty(newProperty);
    console.log(create);
  }

  return (
    <Styles>
      <form onSubmit={handleSubmit}>
        <div className="__section_2">
          <Input
            label="Province"
            name="province"
            select
            changeEvent={handleChange}
            value={inputs.address.province}
            children={provinces.map((province) => (
              <MenuItem key={province.initials} value={province.initials}>
                {province.initials}
              </MenuItem>
            ))}
          />
          <Input
            label="City"
            name="city"
            select
            changeEvent={handleChange}
            value={inputs.address.city}
            children={cities.map(({ name, _id }) => (
              <MenuItem key={_id} value={name}>
                {name}
              </MenuItem>
            ))}
          />
        </div>
        <div className="__section">
          <Input
            label="Type"
            name="type"
            select
            changeEvent={handleChange}
            value={inputs.type}
            children={types.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          />
        </div>
        <div className="__section_2">
          <Input label="Street" name="street" changeEvent={handleChange} value={inputs.address.street} />
          <Input label="Number" name="number" type="number" value={inputs.address.number} changeEvent={handleChange} />
        </div>

        <div className="__section">
          <Input
            label="Community"
            name="community"
            select
            fullWidth
            changeEvent={handleChange}
            value={inputs.address.community}
            children={communities?.map(({ name, _id }) => (
              <MenuItem key={_id} value={name}>
                {name}
              </MenuItem>
            ))}
          />
        </div>

        <div className="__section_2">
          <InputMask mask={"CAD 9999"} maskChar={null} value={inputs.prices.min} onChange={handleChange}>
            {() => (
              <TextField
                className="__special_input"
                name="min"
                id="outlined-basic"
                label="Price Min"
                variant="outlined"
                size="small"
              />
            )}
          </InputMask>
          <InputMask mask={"CAD 9999"} maskChar={null} value={inputs.prices.max} onChange={handleChange}>
            {() => (
              <TextField
                className="__special_input"
                name="max"
                id="outlined-basic"
                label="Price Max"
                variant="outlined"
                size="small"
              />
            )}
          </InputMask>
        </div>
        <div className="__section">
          <Input label="Manager" name="manager" changeEvent={handleChange} value={inputs.contact.manager} />
          <Input label="Website" name="website" changeEvent={handleChange} value={inputs.contact.website} />
          <InputMask mask={"(999) 999-9999"} maskChar={null} value={inputs.contact.phone} onChange={handleChange}>
            {() => (
              <TextField
                className="__special_input"
                name="phone"
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                size="small"
              />
            )}
          </InputMask>
        </div>
        <div className="__section">
          <Input label="Image Link" name="img_cover" changeEvent={handleChange} value={inputs.img_cover} />
        </div>
        <div className="__section">
          <Map />
        </div>
        <span className="__buttons">
          <ButtonGroup fullWidth>
            <Button size="large" variant="contained" color="primary">
              Clear
            </Button>
            <Button size="large" variant="contained" color="success" onClick={handleSubmit}>
              Create
            </Button>
          </ButtonGroup>
        </span>
      </form>
    </Styles>
  );
};

async function getProvinces() {
  try {
    const provinces = await fetch(`${import.meta.env.VITE_BASE_URL}/`).then((d) => d.json());
    return provinces;
  } catch (error) {
    return error;
  }
}
async function getCities(provinceInitials) {
  try {
    const province = await fetch(`${import.meta.env.VITE_BASE_URL}/${provinceInitials}`).then((d) => d.json());
    return province[0].cities;
  } catch (error) {
    return error;
  }
}
async function getCommunities(province, city) {
  const regex = {
    p: /\w\w/.exec(province),
    c: /\w{1,10}/.exec(city),
  };

  if (regex.p && regex.c) {
    const data = await fetch(`${import.meta.env.VITE_BASE_URL}/${province}/${city}`).then((d) => d.json());
    return data[0];
  }
}

async function getCommunityId(province, city, community) {
  const regex = {
    pr: /\w\w/.exec(province),
    ci: /\w{1,20}/.exec(city),
    co: /\w{1,20}/.exec(community),
  };

  if (regex.pr && regex.ci && regex.co) {
    console.log("Regex Funcionou Buscando o Community ID" + province + city + community);
    const data = await fetch(`${import.meta.env.VITE_BASE_URL}/${province}/${city}/${community}`).then((d) => d.json());
    console.log(data);
    return data[0]._id;
  }
}
async function createProperty(property) {
  let propertyJSON = JSON.stringify(property);
  return await fetch(`${import.meta.env.VITE_BASE_URL}/p/c/c/create`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: propertyJSON,
  }).then((response) => response.json());
}
