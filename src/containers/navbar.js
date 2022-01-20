import React, { useState } from "react";
import { Navbar, Burger } from "../components";
import * as ROUTES from "../constants/routes";

export function NavbarContainer() {
  const [open, setOpen] = useState(false);

  return (
    <Navbar>
      <Navbar.Title to={ROUTES.LANDING} />
      <Burger open={open} setOpen={setOpen} />
      <Burger.Menu open={open} setOpen={setOpen} className="menu">
        <Burger.Links className="links">
          <Burger.Link open={open} setOpen={setOpen} to={ROUTES.LANDING}>
            Home
          </Burger.Link>
          <Burger.Link open={open} setOpen={setOpen} to={ROUTES.BUSINESSES}>
            Find Businesses
          </Burger.Link>
          <Burger.Link open={open} setOpen={setOpen} to={ROUTES.ABOUT}>
            About Us
          </Burger.Link>
          <Burger.Link open={open} setOpen={setOpen} to={ROUTES.CRITERIA}>
            Criteria
          </Burger.Link>
          {/* <Burger.Link open={open} setOpen={setOpen} to={ROUTES.TEAM}>
            Meet The Team
          </Burger.Link> */}
          <Burger.Link open={open} setOpen={setOpen} to={ROUTES.CONTACT}>
            Contact Us
          </Burger.Link>
          {/* <Burger.Link open={open} setOpen={setOpen} to={ROUTES.SIGNUP}>
            Sign Up
          </Burger.Link> */}
        </Burger.Links>
        <Burger.Socials>
          <a href="https://www.facebook.com/SUBInitiative/" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/subinitiative/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:  info@subinitiative.com">
            <i className="fas fa-envelope"></i>
          </a>
        </Burger.Socials>
      </Burger.Menu>
      <Navbar.Links>
        <Navbar.Link to={ROUTES.BUSINESSES}>Find Businesses</Navbar.Link>
        <Navbar.Link to={ROUTES.ABOUT}>About us</Navbar.Link>
        <Navbar.Link to={ROUTES.CRITERIA}>Criteria </Navbar.Link>
        <Navbar.Link to={ROUTES.CONTACT}>Contact us</Navbar.Link>
        {/* <Navbar.Button to={ROUTES.SIGNUP}>Promote Business</Navbar.Button> */}
      </Navbar.Links>
    </Navbar>
  );
}
