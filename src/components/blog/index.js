import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

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
} from "./styles/blog";

export default function Blog({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Blog.LeftSect = function BlogLeftSect({
  children,
  ...restProps
}) {
  return <LeftSect {...restProps}>{children}</LeftSect>;
};

Blog.RightSect = function BlogRightSect({
  children,
  ...restProps
}) {
  return <RightSect {...restProps}>{children}</RightSect>;
};

Blog.InnerSect = function BlogInnerSect({
  children,
  ...restProps
}) {
  return <InnerSect {...restProps}>{children}</InnerSect>;
};

Blog.LeftCard = function BlogLeftCard({
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

Blog.RightCard = function BlogRightCard({
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

Blog.MobileCard = function BlogMobileCard({
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

Blog.CardOne = function BlogCardOne({
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

Blog.CardTwo = function BlogCardTwo({
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

Blog.CardThree = function BlogCardThree({
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

Blog.CardSmall = function BlogCardSmall({
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

Blog.Navbar = function BlogNavbar({ children, ...restProps }) {
  return <Navbar {...restProps}>{children}</Navbar>;
};

Blog.Links = function BlogLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Blog.Link = function BlogLink({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Link {...restProps}>{children}</Link>
    </ReactRouterLink>
  );
};

Blog.Title = function BlogTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Blog.SubTitle = function BlogSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Blog.Description = function BlogDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

Blog.Button = function BlogButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Blog.Ellipse = function BlogEllipse({ children, ...restProps }) {
  return (
    <Ellipse {...restProps}>
      <img src="/images/Ellipse.png" alt="Ellipse" />
    </Ellipse>
  );
};

Blog.SmallEllipse = function BlogSmallEllipse({
  children,
  ...restProps
}) {
  return (
    <SmallEllipse {...restProps}>
      <img src="/images/SmallEllipse.png" alt="Small Ellipse" />
    </SmallEllipse>
  );
};

Blog.CirclePattern1 = function BlogCirclePattern1({
  children,
  ...restProps
}) {
  return (
    <CirclePattern1 {...restProps}>
      <img src="/images/CirclePattern.png" alt="Circle Pattern" />
    </CirclePattern1>
  )
}

Blog.CirclePattern2 = function BlogCirclePattern2({
  children,
  ...restProps
}) {
  return (
    <CirclePattern2 {...restProps}>
      <img src="/images/CirclePattern.png" alt="Circle Pattern" />
    </CirclePattern2>
  )
}