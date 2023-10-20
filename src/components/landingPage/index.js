import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./styles/landingPage.css";

import {
  Container,
  Links,
  Link,
  Navbar,
  LeftSect,
  RightSect,
  InnerSect,
  Title,
  SubTitle,
  Description,
  Button,
  CardOne,
  CardTwo,
  CardThree,
  CardSmall,
  Ellipse,
  SmallEllipse,
  LeftCard,
  RightCard,
  MobileCard,
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

LandingPage.InnerSect = function LandingPageInnerSect({
  children,
  ...restProps
}) {
  return <InnerSect {...restProps}>{children}</InnerSect>;
};

LandingPage.LeftCard = function LandingPageLeftCard({
  src, type, label, children, ...restProps
}) {
  return (
    <LeftCard {...restProps}>
      <CardOne>
        <img src={`/images/${src}`} alt="CardThree" />
        <h2>{label}</h2>
        <div>
          <p>{type}</p>
          <i className="fas fa-lightbulb"></i>
          <i className="fas fa-leaf"></i>
        </div>
      </CardOne>
      <img src="/images/CirclePattern.png" alt="Circle Pattern" />
    </LeftCard>
  )
}

LandingPage.RightCard = function LandingPageRightCard({
  type,
  label,
  src,
  children, ...restProps
}) {
  return (
    <RightCard {...restProps}>
     <CardThree>
      <img src={`/images/${src}`} alt="CardThree" />
      <h2>{label}</h2>
      <div>
        <p>{type}</p>
        <i className="fas fa-lightbulb"></i>
        <i className="fas fa-leaf"></i>
      </div>
    </CardThree>
    <img src="/images/CirclePattern.png" alt="Circle Pattern" />
    </RightCard>
  )
}

LandingPage.MobileCard = function LandingPageMobileCard({
  type,
  label,
  src,
  children, ...restProps
}) {
  return (
    <MobileCard {...restProps}>
      <CardSmall>
        <img src={`/images/${src}`} alt="CardThree" />
        <h2>{label}</h2>
        <div>
          <p>{type}</p>
          <i className="fas fa-lightbulb"></i>
          <i className="fas fa-leaf"></i>
        </div>
      </CardSmall>
    </MobileCard>
  )
}

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

LandingPage.CardSmall = function LandingPageCardSmall({
  type,
  label,
  src,
  children,
  ...restProps
}) {
  return (
    <CardSmall {...restProps}>
      <img src={`/images/${src}`} alt="CardThree" />
      <h2>{label}</h2>
      <div>
        <p>{type}</p>
        <i className="fas fa-lightbulb"></i>
        <i className="fas fa-leaf"></i>
      </div>
    </CardSmall>
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
      <Link {...restProps}>{children}</Link>
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

export const ImageCarousel = () => {
  const items = [
    <img src="/images/carousel-image1.png" className="sliderimg" alt="Slider Image 1" />,
    <img src="/images/Banner.png" className="sliderimg" alt="Slider Image 2" />,
    <img src="/images/fb.png" className="sliderimg" alt="Slider Image 1" />,
  ];

  return (
    <AliceCarousel 
      autoPlay 
      autoPlayInterval={300000} // Change image every 3 seconds
      items={items}
      disableButtonsControls
    />
  );
};