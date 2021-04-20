import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Container, Title, Links, Link } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = function HeaderTitle({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Title {...restProps}>{children}</Title>;
    </ReactRouterLink>
  );
};

Header.Links = function HeaderLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Header.Link = function HeaderLink({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Link {...restProps}>{children}</Link>;
    </ReactRouterLink>
  );
};
