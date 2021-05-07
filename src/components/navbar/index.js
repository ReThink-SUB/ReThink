import React from "react";
import { NavLink as ReactRouterLink } from "react-router-dom";

import { Container, Logo, Links, Link, Signup } from "./styles/navbar";

export default function Navbar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navbar.Logo = function NavbarLogo({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Title {...restProps}>
        <img src="/images/Logo.png" alt="Logo" />
      </Title>
    </ReactRouterLink>
  );
};

Navbar.Links = function NavbarLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Navbar.Link = function NavbarLink({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to} activeClassName="active">
      <Link {...restProps}>{children}</Link>;
    </ReactRouterLink>
  );
};

Navbar.Signup = function NavBarSignup({ to, children, ...restProps }) {
  return (
    <Signup {...restProps}>
      <ReactRouterLink to={to}>
        <button>
          PROMOTE BUSINESS <i class="fas fa-caret-right"></i>
        </button>
      </ReactRouterLink>
    </Signup>
  );
};