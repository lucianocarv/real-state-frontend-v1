import React, { useState, useContext, useEffect } from "react";
import InputMask from "react-input-mask";
import { CoordsContext } from "../../../contexts/CoordsContext";

import { initialValues, types, utilitiesInluded, onlyNumbers } from "./supplements";

import Button from "@mui/material/Button";

import { FormControlLabel, MenuItem, AlertTitle } from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from "@mui/material/Snackbar";

import { globalColor } from "../../../styles";
import { AiOutlineForm } from "react-icons/ai";
import { Styles } from "./styles";
import Map from "../../maps/property-map";

const FormListAProperty = ({ property, update }) => {
  const { coords, setCoords } = useContext(CoordsContext);
  const [values, setValues] = useState(
    property
      ? {
          province: property.address.province,
          city: property.address.city,
          type: property.type,
          street: property.address.street,
          number: property.address.number,
          community: property.address.community,
          minprice: property.prices.min,
          maxprice: property.prices.max,
          manager: property.contact.manager,
          website: property.contact.website,
          phone: property.contact.phone,
          utilities: property.utilitiesIncluded,
          img_cover: property.img_cover,
        }
      : initialValues
  );
  const [utilities, setUtilities] = useState([]);
  const [province, setProvince] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [communities, setCommunities] = useState([]);
  const [propCreate, setPropCreate] = useState({ response: {} });
  const [propUpdate, setPropUpdate] = useState({ response: {} });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}`)
      .then((data) => data.json())
      .then((prov) => {
        setProvinces(prov);
      });

    if (property) {
      try {
        fetch(
          `${
            import.meta.env.VITE_BASE_URL
          }/${values.province.toLowerCase()}/${values.city.toLowerCase()}`
        )
          .then((resp) => {
            return resp.json();
          })
          .then((city) => {
            setCommunities(city[0].communities);
            setCoords({ lat: city[0].coords.lat, lng: city[0].coords.lng });
          });
      } catch (error) {
        console.log(error.message);
      }
    }
    fetch(`${import.meta.env.VITE_BASE_URL}/${province.toLowerCase()}`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setCities(data[0].cities);
      });
    try {
      fetch(`${import.meta.env.VITE_BASE_URL}/${province.toLowerCase()}/${city.toLowerCase()}`)
        .then((resp) => {
          return resp.json();
        })
        .then((city) => {
          setCommunities(city[0].communities);
          setCoords({ lat: city[0].coords.lat, lng: city[0].coords.lng });
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [province, city]);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function clearForm() {
    setValues(initialValues);
    setUtilities([]);
    setRespStatus(false);
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

    if (update) {
      let bodyUpdate = {
        address: {
          street: values.street.length > 2 ? values.street : undefined,
          number: values.number.length > 0 ? values.number : undefined,
          communityID: property.address.communityID,
          community: property.address.community,
          city: values.city,
          province: values.province,
          coords: property.address.coords,
        },
        type: values.type != "" ? values.type : undefined,
        prices: {
          min: Number(onlyNumbers(String(values.minprice))),
          max: Number(onlyNumbers(String(values.maxprice))),
        },
        utilitiesIncluded: property.utilitiesIncluded,
        contact: {
          manager: values.manager,
          website: values.website,
          phone: values.phone,
        },
        img_cover: values.img_cover,
      };
      bodyUpdate = JSON.stringify(bodyUpdate);
      fetch(`${import.meta.env.VITE_BASE_URL}/manage-properties/c/p/change/${property._id}`, {
        method: "PUT",
        mode: "cors",
        body: bodyUpdate,
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          setPropUpdate({ response: resp });
          setTimeout(() => {
            setPropUpdate({ response: {} });
          }, 4000);
        });
      return;
    } else {
      let bodyCreate = {
        address: {
          street: values.street.length > 2 ? values.street : undefined,
          number: values.number.length > 0 ? values.number : undefined,
          communityID: values.community != "" ? values.community.split("$$$")[0] : undefined,
          community: values.community != "" ? values.community.split("$$$")[1] : undefined,
          city: city,
          province: province,
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
      bodyCreate = JSON.stringify(bodyCreate);
      fetch("http://localhost:3001/province/city/community/create", {
        method: "POST",
        mode: "cors",
        body: bodyCreate,
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((resp) => {
          return resp.json();
        })
        .then((resp) => {
          setPropCreate({ response: resp });
          setTimeout(() => {
            setPropCreate({ response: {} });
          }, 4000);
        });
    }
  }

  return property ? (
    <Styles>
      <form>
        <h5>
          <AiOutlineForm />
          Property
        </h5>
        <div id="location-section" className="form-section">
          <TextField
            name="province"
            disabled
            id="outlined-basic"
            label="Province"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setProvince(e.target.value)}
            value={values.province}
          ></TextField>
          <TextField
            name="city"
            disabled
            id="outlined-basic"
            label="City"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setCity(e.target.value)}
            value={values.city}
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
            value={values.type}
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
            disabled
            id="outlined-basic"
            label="Community"
            variant="outlined"
            size="small"
            fullWidth
            value={values.community}
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
                  disabled
                  name={utility.toLowerCase()}
                  control={<Checkbox style={{ color: globalColor }} />}
                  label={utility}
                  checked={values.utilities.includes(utility) ? true : false}
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
        <div className="form-section"></div>
        <div id="buttons-section" className="form-section">
          <Button fullWidth variant="outlined" onClick={handleSubmit}>
            Update Property
          </Button>
        </div>
      </form>
      <span className="snackbar">
        {propUpdate.response.status == "updated" ? (
          <span className="success">
            <Snackbar
              className="success"
              anchorOrigin={{ vertical: "center", horizontal: "center" }}
              open={propCreate}
              message={`Property updated successfully!`}
              key={"top" + "left"}
            />
          </span>
        ) : propUpdate.response.errors ? (
          <span className="failure">
            <Snackbar
              className="failure"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={propCreate}
              message={`Unable to updated property, check required listed fields!`}
              key={"top" + "left"}
            />
          </span>
        ) : (
          ""
        )}
      </span>
    </Styles>
  ) : (
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
            value={province}
            children={provinces.map((province) => (
              <MenuItem key={province.initials} value={province.initials}>
                {province.initials}
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
            value={city}
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
        <div className="form-section">
          <Map />
        </div>
        <div id="buttons-section" className="form-section">
          <Button fullWidth variant="outlined" onClick={clearForm}>
            Clear Form
          </Button>
          <Button fullWidth variant="outlined" onClick={handleSubmit}>
            Create property
          </Button>
        </div>
      </form>

      <span className="snackbar">
        {propCreate.response.name == "success" ? (
          <span className="success">
            <Snackbar
              className="success"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={propCreate}
              message={`Property listed successfully!`}
              key={"top" + "left"}
            />
          </span>
        ) : propCreate.response.errors ? (
          <span className="failure">
            <Snackbar
              className="failure"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={propCreate}
              message={`Unable to list property, check required listed fields!`}
              key={"top" + "left"}
            />
          </span>
        ) : (
          ""
        )}
      </span>
    </Styles>
  );
};

export default FormListAProperty;
