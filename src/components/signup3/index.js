import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Container,
  Main,
  Slogan,
  Description,
  Label,
  Button,
  InputsAndButton,
  BackButton,
  NextButton,
  NavigationSec,
  Progress,
  Completed,
  DarkTallPlant,
  TallPlant,
  Rectangle,
  InfoSec,
  InfoTitle,
  InfoDescr,
  InfoSecDescr,
} from "./styles/signup3";

export default function SignUp3({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignUp3.Main = function SignUp3Main({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

SignUp3.Slogan = function SignUp3Slogan({ children, ...restProps }) {
  return (
    <Slogan {...restProps}>
      <h2>{children}</h2>
    </Slogan>
  );
};

SignUp3.Label = function SignUp3Label({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

SignUp3.Description = function SignUp3Description({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

SignUp3.InfoSec = function SignUp3InfoSec({ children, ...restProps }) {
  return <InfoSec {...restProps}>{children}</InfoSec>;
};

SignUp3.InfoTitle = function SignUp3InfoTitle({ children, ...restProps }) {
  return <InfoTitle {...restProps}>{children}</InfoTitle>;
};

SignUp3.InfoDescr = function SignUp3InfoDescr({ children, ...restProps }) {
  return <InfoDescr {...restProps}>{children}</InfoDescr>;
};

SignUp3.InfoSecDescr = function SignUp3InfoSecDescr({
  children,
  ...restProps
}) {
  return <InfoSecDescr {...restProps}>{children}</InfoSecDescr>;
};

SignUp3.Rectangle = function SignUp3Rectangle({ children, ...restProps }) {
  return <Rectangle {...restProps}>{children}</Rectangle>;
};

SignUp3.Button = function SignUp3Button({ to, children, ...restProps }) {
  return (
    <Button {...restProps}>
      <ReactRouterLink to={to}>
        <button>{children}</button>
      </ReactRouterLink>
    </Button>
  );
};

SignUp3.InputsAndButton = function SignUp3InputsAndButton({
  placeholder,
  children,
  ...restProps
}) {
  return <InputsAndButton {...restProps}>{children}</InputsAndButton>;
};

SignUp3.BackButton = function SignUp3BackButton({ to, children, ...restProps }) {
  return (
    <BackButton {...restProps}>
      <ReactRouterLink to={to}>
        <button>{children}</button>
      </ReactRouterLink>
    </BackButton>
  );
};

SignUp3.NextButton = function SignUp3NextButton({ to, children, ...restProps }) {
  return (
    <NextButton {...restProps}>
      <ReactRouterLink to={to}>
        <button>{children}</button>
      </ReactRouterLink>
    </NextButton>
  );
};

SignUp3.NavigationSec = function SignUp3NavigationSec({ placeholder, children, ...restProps }) {
  return <NavigationSec {...restProps}>{children}</NavigationSec>;
};

SignUp3.Progress = function SignUp3Progress({
  placeholder,
  children,
  ...restProps
}) {
  return <Progress {...restProps}>{children}</Progress>;
};

SignUp3.Completed = function SignUp3Completed({
  setValue,
  value,
  type,
  label,
  align,
  children,
  ...restProps
}) {
  return (
    <>
    <Completed {...restProps} className="completed">
      <input type="radio" checked disabled/>{align ? <br/> : null }
      <label>{label}</label>
    </Completed>
    </>
  );
};

SignUp3.DarkTallPlant = function SignUp3DarkTallPlant({
  children,
  ...restProps
}) {
  return (
    <DarkTallPlant {...restProps}>
      <img src="/images/DarkTallPlant.png" alt="Dark Tall Plant" />
    </DarkTallPlant>
  );
};

SignUp3.TallPlant = function SignUp3DarkTallPlant({ children, ...restProps }) {
  return (
    <TallPlant {...restProps}>
      <img src="/images/TallPlant.png" alt="Tall Plant" />
    </TallPlant>
  );
};
