import React from "react";
import { Link } from "react-router-dom";

import { FooterFullContainerStyled, FooterStyled, FooterSectionStyled, FooterSectionTitleStyled, FooterSectionUlStyled } from "./Styles";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterFullContainerStyled>
      <FooterStyled>
        <FooterSectionStyled>
          <FooterSectionTitleStyled>POPULAR SEARCHES</FooterSectionTitleStyled>
          <FooterSectionUlStyled>
            <Link to="/">Apartments Near Me</Link>
            <Link to="/">Condos Near Me</Link>
            <Link to="/">Houses Near Me</Link>
            <Link to="/">Rooms Near Me</Link>
            <Link to="/">All Rentals Near Me</Link>
          </FooterSectionUlStyled>
        </FooterSectionStyled>
        <FooterSectionStyled>
          <FooterSectionTitleStyled>RENTAL INFO</FooterSectionTitleStyled>
          <FooterSectionUlStyled>
            <Link to="/">FAQ</Link>
            <Link to="/">Helpful Links</Link>
            <Link to="/">List Of Cities</Link>
            <Link to="/">Community Info and Stts</Link>
          </FooterSectionUlStyled>
        </FooterSectionStyled>
        <FooterSectionStyled>
          <FooterSectionTitleStyled>LANDLORDS</FooterSectionTitleStyled>
          <FooterSectionUlStyled>
            <Link to="/">List a Property</Link>
            <Link to="/">My Listings</Link>
            <Link to="/">Prices</Link>
            <Link to="/">Property Management Companies</Link>
          </FooterSectionUlStyled>
        </FooterSectionStyled>
        <FooterSectionStyled media>
          <FooterSectionTitleStyled>SOCIAL MEDIA</FooterSectionTitleStyled>
          <FooterSectionUlStyled media>
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
          </FooterSectionUlStyled>
        </FooterSectionStyled>
      </FooterStyled>
    </FooterFullContainerStyled>
  );
};

export default Footer;
