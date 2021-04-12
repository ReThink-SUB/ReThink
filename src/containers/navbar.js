import { Navbar } from "../components";
import * as ROUTES from "../constants/routes";

export function NavbarContainer() {
  return (
    <Navbar>
      <Navbar.Title to={ROUTES.LANDING}>SUB</Navbar.Title>
      <Navbar.Links>
        <Navbar.Link to={ROUTES.LANDING}>Home</Navbar.Link>
        <Navbar.Link to={ROUTES.BUSINESSES}>Find Businesses</Navbar.Link>
        <Navbar.Link to={ROUTES.ABOUT}>About us</Navbar.Link>
        <Navbar.Link to={ROUTES.SIGNUP}>Criteria </Navbar.Link>
        <Navbar.Link to={ROUTES.TEAM}>Meet the team</Navbar.Link>
        <Navbar.Link to={ROUTES.CONTACT}>Contact us</Navbar.Link>
      </Navbar.Links>
      <Navbar.Button to={ROUTES.SIGNUP}>Promote Business</Navbar.Button>
    </Navbar>
  );
}
