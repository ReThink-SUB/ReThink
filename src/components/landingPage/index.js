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
  CardOne,
  CardTwo,
  CardThree,
  Ellipse,
  SmallEllipse,
  CirclePattern1,
  CirclePattern2,
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

LandingPage.CardOne = function LandingPageCardOne({
  type,
  label,
  src,
  children,
  ...restProps
}) {
  return (
    <CardOne {...restProps}>
      <img src={`/images/${src}`} alt="CardOne" />
      <h2>{label}</h2>
      <div>
        <p>{type}</p>
        <i className="fas fa-lightbulb"></i>
        <i className="fas fa-leaf"></i>
      </div>
    </CardOne>
  );
};

LandingPage.CardTwo = function LandingPageCardTwo({
  type,
  label,
  src,
  children,
  ...restProps
}) {
  return (
    <CardTwo {...restProps}>
      <img src={`/images/${src}`} alt="CardTwo" />
      <h2>{label}</h2>
      <div>
        <p>{type}</p>
        <i className="fas fa-lightbulb"></i>
        <i className="fas fa-leaf"></i>
      </div>
    </CardTwo>
  );
};

LandingPage.CardThree = function LandingPageCardThree({
  type,
  label,
  src,
  children,
  ...restProps
}) {
  return (
    <CardThree {...restProps}>
      <img src={`/images/${src}`} alt="CardThree" />
      <h2>{label}</h2>
      <div>
        <p>{type}</p>
        <i className="fas fa-lightbulb"></i>
        <i className="fas fa-leaf"></i>
      </div>
    </CardThree>
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

LandingPage.Ellipse = function LandingPageEllipse({ children, ...restProps }) {
  return (
    <Ellipse {...restProps}>
      <img src="/images/Ellipse.png" alt="Ellipse" />
    </Ellipse>
  );
};

LandingPage.SmallEllipse = function LandingPageSmallEllipse({
  children,
  ...restProps
}) {
  return (
    <SmallEllipse {...restProps}>
      <img src="/images/SmallEllipse.png" alt="Small Ellipse" />
    </SmallEllipse>
  );
};

LandingPage.CirclePattern1 = function LandingPageCirclePattern1({
  children,
  ...restProps
}) {
  return (
    <CirclePattern1 {...restProps}>
      <img src="/images/CirclePattern.png" alt="Circle Pattern" />
    </CirclePattern1>
  )
}

LandingPage.CirclePattern2 = function LandingPageCirclePattern2({
  children,
  ...restProps
}) {
  return (
    <CirclePattern2 {...restProps}>
      <img src="/images/CirclePattern.png" alt="Circle Pattern" />
    </CirclePattern2>
  )
}