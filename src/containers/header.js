import React, { useState } from "react";
import { Header, Burger } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        <Header.Title to={ROUTES.LANDING}>SUB</Header.Title>
        <Burger open={open} setOpen={setOpen} />
        <Burger.Menu open={open} setOpen={setOpen}>
          <Burger.Heading>Hi there!</Burger.Heading>
          <Burger.Links>
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
            <Burger.Link open={open} setOpen={setOpen} to={ROUTES.TEAM}>
              Meet The Team
            </Burger.Link>
            <Burger.Link open={open} setOpen={setOpen} to={ROUTES.CONTACT}>
              Contact Us
            </Burger.Link>
            <Burger.Link open={open} setOpen={setOpen} to={ROUTES.SIGNUP}>
              Sign Up
            </Burger.Link>
            <Burger.Link open={open} setOpen={setOpen} to={ROUTES.BLOG}>
              Blog
            </Burger.Link>
          </Burger.Links>
          <Burger.Squiggle />
          <Burger.Socials>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fas fa-envelope"></i>
          </Burger.Socials>
        </Burger.Menu>
        <Header.Links>
          <Header.Link to={ROUTES.LANDING}>Home</Header.Link>
          <Header.Link to={ROUTES.BUSINESSES}>Find Businesses</Header.Link>
          <Header.Link to={ROUTES.ABOUT}>About Us</Header.Link>
          <Header.Link to={ROUTES.CRITERIA}>Criteria</Header.Link>
          <Header.Link to={ROUTES.TEAM}>Meet The Team</Header.Link>
          <Header.Link to={ROUTES.CONTACT}>Contact Us</Header.Link>
          <Header.Link to={ROUTES.BLOG}>Blog</Header.Link>
          <Header.Link to={ROUTES.SIGNUP}>Sign Up</Header.Link>
        </Header.Links>
      </Header>
    </>
  );
}
