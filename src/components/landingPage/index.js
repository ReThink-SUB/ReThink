import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Container,
  Links,
  Link,
  Navbar,
  LeftSect,
  RightSect,
  Title,
  SubTitle,
  Description,
  Button,
  Card,
} from "./styles/landingPage";

export default function LandingPage({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

LandingPage.LeftSect = function LandingPageLeftSect({
  children,
  ...restProps
}) {
  return <LeftSect {...restProps}>{children}</LeftSect>;
};

LandingPage.RightSect = function LandingPageRightSect({
  children,
  ...restProps
}) {
  return <RightSect {...restProps}>{children}</RightSect>;
};

LandingPage.Card = function LandingPageCard({
  top,
  bottom,
  type,
  label,
  src,
  children,
  ...restProps
}) {
  return (
    <Card top={top} bottom={bottom} {...restProps}>
      <img src={src} alt="card" />
      <h2>{label}</h2>
      <div>
        <p>{type}</p>
        <i class="fas fa-lightbulb"></i>
        <i class="fas fa-leaf"></i>
      </div>
    </Card>
  );
};

LandingPage.Navbar = function LandingPageNavbar({ children, ...restProps }) {
  return <Navbar {...restProps}>{children}</Navbar>;
};

LandingPage.Links = function LandingPageLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

LandingPage.Link = function LandingPageLink({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Link {...restProps}>{children}</Link>;
    </ReactRouterLink>
  );
};

LandingPage.Title = function LandingPageTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

LandingPage.SubTitle = function LandingPageSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

LandingPage.Description = function LandingPageDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

LandingPage.Button = function LandingPageButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
