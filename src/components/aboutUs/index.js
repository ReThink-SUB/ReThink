import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Container,
  Side,
  Main,
  AboutSec,
  Images,
  Text,
  Title,
  Heading,
  SecDescription,
  Description,
  SubSec,
  Card,
  Frame,
  TextArea,
  InvolvedSec,
  SecTitle,
  Btn,
  OtherClubsSec,
  ClubCards,
  ClubCard,
  LocalOrgsSec,
  Organizations,
  Organization,
  WeeklySec,
  Arrow,
  FeatureArea,
  Feature,
} from "./styles/aboutUs";

export default function AboutUs({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

AboutUs.Side = function AboutUsSide({ children, ...restProps }) {
  return <Side {...restProps}>{children}</Side>;
};

AboutUs.Main = function AboutUsMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

AboutUs.AboutSec = function AboutUsAboutSec({ children, ...restProps }) {
  return <AboutSec {...restProps}>{children}</AboutSec>;
};

AboutUs.Images = function AboutUsImages({ children, ...restProps }) {
  return <Images {...restProps}>{children}</Images>;
};

AboutUs.Text = function AboutUsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

AboutUs.Title = function AboutUsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

AboutUs.Heading = function AboutUsHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

AboutUs.Description = function AboutUsDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

AboutUs.SecDescription = function AboutUsSecDescription({
  children,
  ...restProps
}) {
  return <SecDescription {...restProps}>{children}</SecDescription>;
};

AboutUs.SubSec = function AboutUsSubSec({ children, ...restProps }) {
  return <SubSec {...restProps}>{children}</SubSec>;
};

AboutUs.Card = function AboutUsCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

AboutUs.Frame = function AboutUsFrame({
  color,
  src,
  person,
  label,
  children,
  ...restProps
}) {
  return (
    <Frame color={color} {...restProps}>
      <img src={src} alt="Card" />
      <h2>{person}</h2>
      <p>{label}</p>
      <img className="circle" src="/images/CirclePattern.png" alt="Circle" />
    </Frame>
  );
};

AboutUs.TextArea = function AboutUsTextArea({
  description,
  children,
  ...restProps
}) {
  return (
    <TextArea {...restProps}>
      <p>{description}</p>
      <img src="/images/Linkedin.png" alt="Linkedin" />
      <img src="/images/Logo.png" alt="Email" />
    </TextArea>
  );
};

AboutUs.InvolvedSec = function AboutUsInvolvedSec({ children, ...restProps }) {
  return <InvolvedSec {...restProps}>{children}</InvolvedSec>;
};

AboutUs.SecTitle = function AboutUsSecTitle({ children, ...restProps }) {
  return <SecTitle {...restProps}>{children}</SecTitle>;
};

AboutUs.Btn = function AboutUsBtn({ children, ...restProps }) {
  return <Btn {...restProps}>{children}</Btn>;
};

AboutUs.OtherClubsSec = function AboutUsOtherClubsSec({
  children,
  ...restProps
}) {
  return <OtherClubsSec {...restProps}>{children}</OtherClubsSec>;
};

AboutUs.ClubCards = function AboutUsClubCards({ children, ...restProps }) {
  return <ClubCards {...restProps}>{children}</ClubCards>;
};

AboutUs.ClubCard = function AboutUsClubCard({ children, ...restProps }) {
  return <ClubCard {...restProps}>{children}</ClubCard>;
};

AboutUs.LocalOrgsSec = function AboutUsLocalOrgsSec({
  children,
  ...restProps
}) {
  return <LocalOrgsSec {...restProps}>{children}</LocalOrgsSec>;
};

AboutUs.Organizations = function AboutUsOrganizations({
  children,
  ...restProps
}) {
  return <Organizations {...restProps}>{children}</Organizations>;
};

AboutUs.Organization = function AboutUsOrganization({
  children,
  ...restProps
}) {
  return <Organization {...restProps}>{children}</Organization>;
};

AboutUs.Organizations = function AboutUsOrganizations({
  children,
  ...restProps
}) {
  return <Organizations {...restProps}>{children}</Organizations>;
};

AboutUs.WeeklySec = function AboutUsWeeklySec({ children, ...restProps }) {
  return <WeeklySec {...restProps}>{children}</WeeklySec>;
};

AboutUs.FeatureArea = function AboutUsFeatureArea({ children, ...restProps }) {
  return <FeatureArea {...restProps}>{children}</FeatureArea>;
};

AboutUs.Feature = function AboutUsFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

AboutUs.Arrow = function AboutUsArrow({ children, ...restProps }) {
  return <Arrow {...restProps}>{children}</Arrow>;
};
