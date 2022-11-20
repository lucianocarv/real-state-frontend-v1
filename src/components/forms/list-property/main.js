export const property = {
  address: {
    province: "",
    city: "",
    community: "",
    communityId: "",
    street: "",
    number: "",
  },
  type: "",
  prices: {
    min: "",
    max: "",
  },
  contact: {
    manager: "",
    website: "",
    phone: "",
  },
  img_cover: "",
};

export class Property {
  constructor(property, coords) {
    this.address = {
      province: property.address.province,
      city: property.address.city,
      community: property.address.community,
      communityID: property.address.communityId,
      street: property.address.street,
      number: property.address.number,
      coords: {
        lat: coords.lat,
        lng: coords.lng,
      },
    };
    this.type = property.type;
    this.prices = {
      min: onlyNumbers(String(property.prices.min)),
      max: onlyNumbers(String(property.prices.max)),
    };
    this.contact = {
      manager: property.contact.manager,
      website: property.contact.website,
      phone: property.contact.phone,
    };
    this.img_cover = property.img_cover;
  }
}

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
