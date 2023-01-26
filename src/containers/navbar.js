import React, { useState } from "react";
import { Navbar, Burger } from "../components";
import * as ROUTES from "../constants/routes";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export function NavbarContainer() {
  const [open, setOpen] = useState(false);

  function reloadHomePage(){
    if(window.location.pathname === ROUTES.LANDING){
      window.location.reload(false);
    }
  }

  return (
    <Navbar>
      <Navbar.Title to={ROUTES.LANDING} onClick={reloadHomePage}/>
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
          <Burger.Link open={open} setOpen={setOpen} to={ROUTES.SIGNUP} className="promote">
            <span>
            Promote Business
            </span>
          </Burger.Link>
        </Burger.Links>
        <Burger.Socials>
          <a href="https://www.facebook.com/ReThinkUW/" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/rethinkuw/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:  info@rethinkuw.org">
            <i className="fas fa-envelope"></i>
          </a>
        </Burger.Socials>
      </Burger.Menu>
      <Navbar.Links className="links">
        <Navbar.Link to={ROUTES.BUSINESSES}>Find Businesses</Navbar.Link>
        <Navbar.Link to={ROUTES.ABOUT}>About us</Navbar.Link>
        <Navbar.Link to={ROUTES.CRITERIA}>Criteria </Navbar.Link>
        <Navbar.Link to={ROUTES.CONTACT}>Contact us</Navbar.Link>
        <Navbar.Button to={ROUTES.SIGNUP}>Promote Business  <PlayArrowIcon style={{position: 'relative', left: '0.5rem', color: '#324F52', height: '1.2rem', width: '1.5rem'}} /> </Navbar.Button>
      </Navbar.Links>
    </Navbar>
  );
}
