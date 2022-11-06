import React, { useState, useContext, useEffect } from "react";

import InputMask from "react-input-mask";
import { initialValues, types, utilitiesInluded, provinces } from "./info";

import { Button, FormControlLabel, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

import { CoordsContext } from "../../../contexts/CoordsContext";

import { globalColor } from "../../../styles";
import { AiOutlineForm } from "react-icons/ai";
import { Styles } from "./styles";

const onlyNumbers = (str) => str.replace(/[^0-9]/g, "");

const FormListAProperty = () => {
  const { coords } = useContext(CoordsContext);
  const [values, setValues] = useState(initialValues);
  const [utilities, setUtilities] = useState([]);
  const [province, setProvince] = useState("");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [communities, setCommunities] = useState([]);

  const [btDisabled, setBtDisabled] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/${province.toLowerCase()}`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setCities(data[0].cities);
      });

    try {
      fetch(`http://localhost:3001/${province.toLowerCase()}/${city.toLowerCase()}`)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          console.log(data);
          setCommunities(data[0].communities);
          console.log(data[0]);
        });
    } catch (error) {
      console.log("Nao tem cidade ainda");
    }
  }, [province, city]);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function clearForm() {
    setValues(initialValues);
    setUtilities([]);
  }

  function handleChangeCheckboxes(e) {
    if (utilities.includes(e.target.value)) {
      const value = utilities.indexOf(e.target.value);
      utilities.splice(value, 1);
    } else {
      setUtilities([...utilities, ([e.target.name] = e.target.checked ? e.target.value : "")]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let body = {
      address: {
        street: values.street.length > 2 ? values.street : undefined,
        number: values.number.length > 0 ? values.number : undefined,
        communityID: values.community != "" ? values.community.split("$$$")[0] : undefined,
        community: values.community != "" ? values.community.split("$$$")[1] : undefined,
        coords: coords,
      },
      type: values.type != "" ? values.type : undefined,
      prices: {
        min: Number(onlyNumbers(values.minprice)),
        max: Number(onlyNumbers(values.maxprice)),
      },
      utilitiesIncluded: utilities,
      contact: {
        manager: values.manager,
        website: values.website,
        phone: values.phone,
      },
      img_cover: values.img_cover,
    };
    body = JSON.stringify(body);
    fetch("http://localhost:3001/province/city/community/inserproperty", {
      method: "POST",
      mode: "cors",
      body: body,
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => console.log(resp));
  }

  return (
    <Styles>
      <form>
        <h5>
          <AiOutlineForm />
          Property
        </h5>
        <div id="location-section" className="form-section">
          <TextField
            name="province"
            required
            select
            id="outlined-basic"
            label="Province"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setProvince(e.target.value)}
            children={provinces.map((initials) => (
              <MenuItem key={initials + "22"} value={initials}>
                {initials}
              </MenuItem>
            ))}
          ></TextField>
          <TextField
            name="city"
            required
            select
            id="outlined-basic"
            label="City"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setCity(e.target.value)}
            children={cities.map((city) => (
              <MenuItem key={city._id} value={city.name}>
                {city.name}
              </MenuItem>
            ))}
          ></TextField>
        </div>
        <div className="form-section">
          <TextField
            name="type"
            required
            select
            id="outlined-basic"
            label="Type"
            variant="outlined"
            size="small"
            onChange={handleChange}
            fullWidth
            style={{ width: "50%" }}
            SelectProps={{ defaultValue: "" }}
            children={types.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          ></TextField>
        </div>
        <div id="address-section" className="form-section">
          <TextField
            name="street"
            className="add-inp-street"
            required
            id="outlined-basic"
            label="Street"
            variant="outlined"
            size="small"
            fullWidth
            autoComplete="none"
            value={values.street}
            onChange={handleChange}
          />
          <TextField
            name="number"
            required
            id="outlined-basic"
            type="number"
            label="Number"
            variant="outlined"
            size="small"
            fullWidth
            autoComplete="none"
            value={values.number}
            onChange={handleChange}
          />
          <TextField
            name="community"
            className="add-inp-community"
            required
            select
            id="outlined-basic"
            label="Community"
            variant="outlined"
            size="small"
            fullWidth
            SelectProps={{ defaultValue: "", children: true }}
            value={values.community}
            onChange={handleChange}
            children={
              communities
                ? communities.map((community) => (
                    <MenuItem key={community._id} value={community._id + "$$$" + community.name}>
                      {community.name}
                    </MenuItem>
                  ))
                : ""
            }
          ></TextField>
        </div>
        <div id="price-section" className="form-section">
          <InputMask
            mask={"$ CAD 9999"}
            maskChar={null}
            value={values.minprice}
            onChange={handleChange}
          >
            {() => (
              <TextField
                name="minprice"
                required
                id="outlined-basic"
                type="text"
                label="Min Price"
                variant="outlined"
                size="small"
                fullWidth
                autoComplete="none"
              />
            )}
          </InputMask>
          <InputMask
            mask={"$ CAD 9999"}
            maskChar={null}
            value={values.maxprice}
            onChange={handleChange}
          >
            {() => (
              <TextField
                name="maxprice"
                required
                id="outlined-basic"
                type="text"
                label="Max Price"
                variant="outlined"
                size="small"
                fullWidth
                autoComplete="none"
              />
            )}
          </InputMask>
        </div>
        <div className="form-section">
          <TextField
            name="img_cover"
            required
            id="outlined-basic"
            type="text"
            label="Link Image of Property"
            variant="outlined"
            size="small"
            fullWidth
            autoComplete="none"
            value={values.img_cover}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <h5>
            <AiOutlineForm />
            Utilities Included
          </h5>
          <div>
            {utilitiesInluded.map((utility) => {
              return (
                <FormControlLabel
                  key={utility}
                  name={utility.toLowerCase()}
                  control={<Checkbox style={{ color: globalColor }} />}
                  label={utility}
                  value={utility}
                  onChange={handleChangeCheckboxes}
                />
              );
            })}
          </div>
        </div>
        <div id="contact-section" className="form-section">
          <h5>
            <AiOutlineForm />
            Contact
          </h5>
          <TextField
            name="manager"
            required
            id="outlined-basic"
            label="Manager"
            variant="outlined"
            size="small"
            fullWidth
            autoComplete="none"
            value={values.manager}
            onChange={handleChange}
          />
          <TextField
            name="website"
            required
            id="outlined-basic"
            label="Web Site"
            variant="outlined"
            size="small"
            fullWidth
            autoComplete="none"
            value={values.website}
            onChange={handleChange}
          />
          <InputMask
            mask={"(999) 999-9999"}
            maskChar={null}
            value={values.phone}
            onChange={handleChange}
          >
            {() => (
              <TextField
                name="phone"
                type="text"
                required
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                size="small"
                fullWidth
                autoComplete="none"
              />
            )}
          </InputMask>
        </div>
        <div id="buttons-section" className="form-section">
          <Button
            fullWidth
            style={{ color: globalColor, borderColor: globalColor }}
            type="button"
            variant="outlined"
            label="Send"
            onClick={clearForm}
          >
            Clear Form
          </Button>
          <Button
            fullWidth
            style={btDisabled ? { backgroundColor: "white" } : { backgroundColor: globalColor }}
            type="button"
            disabled={btDisabled}
            variant="contained"
            label="Send"
            onClick={handleSubmit}
          >
            List A Property
          </Button>
        </div>
      </form>
    </Styles>
  );
};

export default FormListAProperty;
