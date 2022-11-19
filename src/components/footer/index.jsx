import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { Styles } from "./styles";

const Footer = () => {
  return (
    <Styles>
      <footer>
        <section>
          <h2>POPULAR SEARCHES</h2>
          <ul>
            <Link to="/">Apartments Near Me</Link>
            <Link to="/">Condos Near Me</Link>
            <Link to="/">Houses Near Me</Link>
            <Link to="/">Rooms Near Me</Link>
            <Link to="/">All Rentals Near Me</Link>
          </ul>
        </section>
        <section>
          <h2>RENTAL INFO</h2>
          <ul>
            <Link to="/">FAQ</Link>
            <Link to="/">Helpful Links</Link>
            <Link to="/">List Of Cities</Link>
            <Link to="/">Community Info and Stts</Link>
          </ul>
        </section>
        <section>
          <h2>LANDLORDS</h2>
          <ul>
            <Link to="/">List a Property</Link>
            <Link to="/">My Listings</Link>
            <Link to="/">Prices</Link>
            <Link to="/">Property Management Companies</Link>
          </ul>
        </section>
        <section id="__social-media">
          <h2>SOCIAL MEDIA</h2>
          <ul>
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
          </ul>
        </section>
      </footer>
    </Styles>
  );
};

export default Footer;
