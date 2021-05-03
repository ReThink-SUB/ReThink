import React from "react";
import Navbar from "../components/navbar";
import * as ROUTES from "../constants/routes";

export function NavbarContainer() {
  return (
    <Navbar>
      <Navbar.Links>
        <Navbar.Logo to={ROUTES.LANDING}/>
        <Navbar.Link to={ROUTES.BUSINESSES}>FIND BUSINESSES</Navbar.Link>
        <Navbar.Link to={ROUTES.TEAM}>ABOUT US</Navbar.Link>
        <Navbar.Link to={ROUTES.CRITERIA}>CRITERIA</Navbar.Link>
        <Navbar.Link to={ROUTES.CONTACT}>CONTACT US</Navbar.Link>
      </Navbar.Links>

      <Navbar.Signup to={ROUTES.SIGNUP} />
    </Navbar>
  );
}
