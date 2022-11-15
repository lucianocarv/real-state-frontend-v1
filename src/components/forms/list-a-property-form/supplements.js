export const initialValues = {
  type: "",
  province: "",
  city: "",
  street: "",
  number: "",
  community: "",
  minprice: "",
  maxprice: "",
  utilities: "",
  manager: "",
  website: "",
  phone: "",
  img_cover: "",
};

export const types = [
  "Apartment",
  "Duplex",
  "Acreage",
  "Condo",
  "Main Floor",
  "Office Space",
  "Loft",
  "Basement",
  "Parking Spot",
  "House",
  "Shared",
  "Storage",
  "Townhouse",
  "Mobile",
  "Vacation",
];

export const utilitiesInluded = ["Heat", "Water", "Eletricity", "Internet", "Television"];

export const onlyNumbers = (str) => str.replace(/[^0-9]/g, "");
