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
  DarkTallPlant,
  TallPlant,
  Rectangle,
  InfoSec,
  InfoTitle,
  InfoDescr,
  InfoSecDescr,
} from "./styles/signup4";

export default function SignUp4({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignUp4.Main = function SignUp4Main({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

SignUp4.Slogan = function SignUp4Slogan({ children, ...restProps }) {
  return (
    <Slogan {...restProps}>
      <h2>{children}</h2>
    </Slogan>
  );
};

SignUp4.Label = function SignUp4Label({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

SignUp4.Description = function SignUp4Description({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

SignUp4.InfoSec = function SignUp4InfoSec({ children, ...restProps }) {
  return <InfoSec {...restProps}>{children}</InfoSec>;
};

SignUp4.InfoTitle = function SignUp4InfoTitle({ children, ...restProps }) {
  return <InfoTitle {...restProps}>{children}</InfoTitle>;
};

SignUp4.InfoDescr = function SignUp4InfoDescr({ children, ...restProps }) {
  return <InfoDescr {...restProps}>{children}</InfoDescr>;
};

SignUp4.InfoSecDescr = function SignUp4InfoSecDescr({
  children,
  ...restProps
}) {
  return <InfoSecDescr {...restProps}>{children}</InfoSecDescr>;
};

SignUp4.Rectangle = function SignUp4Rectangle({ children, ...restProps }) {
  return <Rectangle {...restProps}>{children}</Rectangle>;
};

SignUp4.Button = function SignUp4Button({ to, children, ...restProps }) {
  return (
    <Button {...restProps}>
      <ReactRouterLink to={to}>
        <button>{children}</button>
      </ReactRouterLink>
    </Button>
  );
};

SignUp4.InputsAndButton = function SignUp4InputsAndButton({
  placeholder,
  children,
  ...restProps
}) {
  return <InputsAndButton {...restProps}>{children}</InputsAndButton>;
};

SignUp4.DarkTallPlant = function SignUp4DarkTallPlant({
  children,
  ...restProps
}) {
  return (
    <DarkTallPlant {...restProps}>
      <img src="/images/DarkTallPlant.png" alt="Dark Tall Plant" />
    </DarkTallPlant>
  );
};

SignUp4.TallPlant = function SignUp4DarkTallPlant({ children, ...restProps }) {
  return (
    <TallPlant {...restProps}>
      <img src="/images/TallPlant.png" alt="Tall Plant" />
    </TallPlant>
  );
};
