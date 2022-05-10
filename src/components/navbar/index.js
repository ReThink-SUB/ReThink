import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Container, Links, Title, Link, Button } from "./styles/navbar";

export default function Navbar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navbar.Title = function NavbarTitle({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Title {...restProps}>
        <img
          src="/images/dark_rethink_full_logo.png"
          alt="Logo"
          className="mobile-logo"
        />
        <img
          src="/images/dark_rethink_horizontal_transparent_logo.png"
          alt="Logo"
          className="desktop-logo"
        />
      </Title>
    </ReactRouterLink>
  );
};

Navbar.Links = function NavbarLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Navbar.Link = function NavbarLink({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Link {...restProps}>{children}</Link>
    </ReactRouterLink>
  );
};

Navbar.Button = function NavbarButton({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Button {...restProps}>{children}</Button>
    </ReactRouterLink>
  );
};
