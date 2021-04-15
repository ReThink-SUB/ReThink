import React from "react";
import { Navbar } from "../components";
import * as ROUTES from "../constants/routes";

export function NavbarContainer() {
  return (
    <Navbar>
      <Navbar.Logo />

      <Navbar.Links>
        <Navbar.Link to={ROUTES.BUSINESSES}>FIND BUSINESSES</Navbar.Link>
        <Navbar.Link to={ROUTES.ABOUT}>ABOUT US</Navbar.Link>
        <Navbar.Link to={ROUTES.CRITERIA}>CRITERIA</Navbar.Link>
        <Navbar.Link to={ROUTES.CONTACT}>CONTACT US</Navbar.Link>
      </Navbar.Links>

      <Navbar.Signup to={ROUTES.SIGNUP} />
    </Navbar>
  );
}
