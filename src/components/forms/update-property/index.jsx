import React from "react";
import InputMask from "react-input-mask";

import { Input } from "../../input/default-input/index";
import { Button, TextField } from "@mui/material";

import { Styles } from "./styles";
import { Property } from "../list-property/main";
import { useContext } from "react";
import { CoordsContext } from "../../../contexts/CoordsContext";

export const Form = ({ property, setProperty, id }) => {
  const { coords } = useContext(CoordsContext);

  function handleChange(e) {
    let [target_name, target_value] = [e.target.name, e.target.value];
    if (
      target_name == "province" ||
      target_name == "city" ||
      target_name == "community" ||
      target_name == "street" ||
      target_name == "number"
    ) {
      setProperty({ ...property, address: { ...property.address, [target_name]: target_value } });
    } else if (target_name == "type" || target_name == "img_cover") {
      setProperty({ ...property, [target_name]: target_value });
    } else if (target_name == "min" || target_name == "max") {
      setProperty({ ...property, prices: { ...property.prices, [target_name]: target_value } });
    } else if (target_name == "manager" || target_name == "website" || target_name == "phone") {
      setProperty({ ...property, contact: { ...property.contact, [target_name]: target_value } });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(property);
    let bodyPropertyUpdated = new Property(property, property.address.coords);
    console.log(bodyPropertyUpdated);
    bodyPropertyUpdated = JSON.stringify(bodyPropertyUpdated);
    fetch(`${import.meta.env.VITE_BASE_URL}/manage-properties/c/p/change/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: bodyPropertyUpdated,
    }).then((response) => console.log(response));
  }

  return (
    <Styles>
      <form>
        <div className="__section_2">
          <Input disabled label="Province" name="province" value={property?.address?.province} />
          <Input disabled label="City" name="city" value={property?.address?.city} />
        </div>
        <div className="__section">
          <Input disabled label="Type" name="type" value={property?.type} />
        </div>
        <div className="__section_2">
          <Input disabled label="Street" name="street" value={property?.address?.street} />
          <Input disabled label="Number" name="number" value={property?.address?.number} />
        </div>
        <div className="__section">
          <Input disabled label="Community" name="community" value={property?.address?.community} />
        </div>
        <div className="__section_2 __prices">
          <InputMask mask={"CAD 9999"} maskChar={null} value={property.prices.min} onChange={(e) => handleChange(e)}>
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
          <InputMask mask={"CAD 9999"} maskChar={null} value={property.prices.max} onChange={(e) => handleChange(e)}>
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
          <Input label="Manager" name="manager" value={property?.contact?.manager} changeEvent={handleChange} />
        </div>
        <div className="__section">
          <Input label="Website" name="website" value={property?.contact?.website} changeEvent={handleChange} />
        </div>
        <div className="__section">
          <InputMask mask={"(999) 999-9999"} maskChar={null} value={property?.contact?.phone} onChange={(e) => handleChange(e)}>
            {() => <TextField name="phone" id="outlined-basic" label="Phone" variant="outlined" size="small" />}
          </InputMask>
        </div>
        <div className="__section">
          <Input label="Image Link" name="img_cover" value={property?.img_cover} changeEvent={handleChange} />
        </div>
        <div className="__section __buttons">
          <Button onClick={handleSubmit} variant="contained">
            Save
          </Button>
        </div>
      </form>
    </Styles>
  );
};
