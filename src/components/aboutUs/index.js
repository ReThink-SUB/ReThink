import React, { useEffect, useState } from "react";
// import { Link as ReactRouterLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./styles/style.css";
import { db, storage } from "../../firebase";
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
  Cards,
  Circles,
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
  ImageSec,
  TextSec,
  Donate,
  LinkS,
  Image,
  ClubImage,
  ClubName,
  ClubDescription,
  LearnMore,
  Links,
  IceCream,
  Water,
  ToothBrush,
  SecCircles,
  DownloadBtn,
} from "./styles/aboutUs";
import { securityRules } from "firebase-admin";

export default function AboutUs({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

AboutUs.Side = function AboutUsSide({ children, ...restProps }) {
  return <Side {...restProps}>{children}</Side>;
};

AboutUs.Links = function AboutUsLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

AboutUs.Link = function AboutUsLink({ children, myID, ...restProps }) {
  return (
    <Link {...restProps} to={myID}>
      <LinkS>{children}</LinkS>
    </Link>
  );
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

AboutUs.Image = function AboutUsImage({
  width,
  src,
  top,
  left,
  children,
  ...restProps
}) {
  return (
    <Image top={top} left={left} {...restProps}>
      <img width={width} src={`/images/${src}.png`} alt="about" />
    </Image>
  );
};

AboutUs.IceCream = function AboutUsIceCream({ src, children, ...restProps }) {
  return (
    <IceCream {...restProps}>
      <img src={`/images/${src}.png`} alt="about" />
    </IceCream>
  );
};

AboutUs.Water = function AboutUsWater({ src, children, ...restProps }) {
  return (
    <Water {...restProps}>
      <img src={`/images/${src}.png`} alt="about" />
    </Water>
  );
};

AboutUs.ToothBrush = function AboutUsToothBrush({
  src,
  children,
  ...restProps
}) {
  return (
    <ToothBrush {...restProps}>
      <img src={`/images/${src}.png`} alt="about" />
    </ToothBrush>
  );
};

AboutUs.Circles = function AboutUsCircles({
  top,
  left,
  children,
  ...restProps
}) {
  return (
    <Circles top={top} left={left} {...restProps}>
      <img src="/images/CirclePattern.png" alt="circles" />
    </Circles>
  );
};

AboutUs.SecCircles = function AboutUsSecCircles({ children, ...restProps }) {
  return (
    <SecCircles {...restProps}>
      <img src="/images/CirclePattern.png" alt="SecCircles" />
    </SecCircles>
  );
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

AboutUs.Cards = function AboutUsCards({ children, ...restProps }) {
  return <Cards {...restProps}>{children}</Cards>;
};

AboutUs.Card = function AboutUsCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

AboutUs.Frame = function AboutUsFrame({
  color,
  background,
  src,
  person,
  position,
  children,
  ...restProps
}) {
  // const path = storage().ref(`img/profiles/${src}`).getDownloadURL()
  const [imgURL, setURL] = useState([]);

  useEffect(() => {
    var ref = storage.ref(`img/profiles/${src}.jpg`);
    ref.getDownloadURL().then(function (url) {
      setURL(url);
    })
  });
  return (
    <Frame color={color} background={background} {...restProps}>
      <img src={imgURL} alt="Card" />
      <h2>{person}</h2>
      <p color={color}>{position}</p>
      {children}
    </Frame>
  );
};

AboutUs.TextArea = function AboutUsTextArea({
  linkedin,
  description,
  children,
  ...restProps
}) {
  return (
    <TextArea {...restProps}>
      <p>{children}</p>
      <div>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src="/images/Linkedin.png" alt="Linkedin" />
        </a>
        <img src="/images/Mail.png" alt="Email" />
      </div>
    </TextArea>
  );
};

AboutUs.InvolvedSec = function AboutUsInvolvedSec({ children, ...restProps }) {
  return <InvolvedSec {...restProps}>{children}</InvolvedSec>;
};

AboutUs.SecTitle = function AboutUsSecTitle({ children, ...restProps }) {
  return <SecTitle {...restProps}>{children}</SecTitle>;
};

AboutUs.Btn = function AboutUsBtn({ href, children, ...restProps }) {
  return (
    <a href={href} target="_new" {...restProps}>
      <Btn>{children}</Btn>
    </a>
  );
};

AboutUs.DownloadBtn = function AboutUsDownloadBtn({
  downloadImage,
  href,
  children,
  ...restProps
}) {
  return (
    <a onClick={() => downloadImage(href)} {...restProps}>
      <DownloadBtn>{children}</DownloadBtn>
    </a>
  );
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

AboutUs.ClubImage = function AboutUsClubImage({ src, children, ...restProps }) {
  return (
    <ClubImage {...restProps}>
      <img src={`/images/${src}.png`} alt="club" />
    </ClubImage>
  );
};

AboutUs.ClubName = function AboutUsClubName({ src, children, ...restProps }) {
  return <ClubName {...restProps}>{children}</ClubName>;
};

AboutUs.ClubDescription = function AboutUsClubDescription({
  src,
  children,
  ...restProps
}) {
  return <ClubDescription {...restProps}>{children}</ClubDescription>;
};

AboutUs.LearnMore = function AboutUsLearnMore({ src, children, ...restProps }) {
  return <LearnMore {...restProps}>{children}</LearnMore>;
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
  src,
  children,
  ...restProps
}) {
  return (
    <Organization {...restProps}>
      <img src={`/images/${src}.png`} alt="Organization" />
      <h3>{children}</h3>
    </Organization>
  );
};

AboutUs.WeeklySec = function AboutUsWeeklySec({ children, ...restProps }) {
  return <WeeklySec {...restProps}>{children}</WeeklySec>;
};

AboutUs.FeatureArea = function AboutUsFeatureArea({ children, ...restProps }) {
  return <FeatureArea {...restProps}>{children}</FeatureArea>;
};

AboutUs.Feature = function AboutUsFeature({
  action,
  description,
  children,
  ...restProps
}) {
  return (
    <Feature {...restProps}>
      <ImageSec>{children}</ImageSec>
      <TextSec>
        <h3>{description}</h3>
        <h2>Our Key Priorities: </h2>
        <p>{action}</p>
        <Donate>Donate Now</Donate>
      </TextSec>
    </Feature>
  );
};

AboutUs.Arrow = function AboutUsArrow({ rotate, children, ...restProps }) {
  return (
    <Arrow rotate={rotate} {...restProps}>
      <img src="/images/SecArrow.png" alt="Arrow" />
    </Arrow>
  );
};
