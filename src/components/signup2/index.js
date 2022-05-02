import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Container,
  Main,
  Slogan,
  Inputs,
  Description,
  Input,
  Select,
  InputsAndButton,
  NavigationSec,
  Progress,
  Completed,
  Incompleted,
  BackButton,
  NextButton,
  TallPlant,
  WebLady,
} from "./styles/signup2";

export default function SignUp2({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignUp2.Main = function SignUp2Main({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

SignUp2.Slogan = function SignUp2Slogan({ children, ...restProps }) {
  return (
    <Slogan {...restProps}>
      <h2>{children}</h2>
    </Slogan>
  );
};

SignUp2.Inputs = function SignUp2Inputs({ placeholder, children, ...restProps }) {
  return <Inputs {...restProps}>{children}</Inputs>;
};

SignUp2.Description = function SignUp2Description({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

SignUp2.Input = function SignUp2Input({
  value,
  setValue,
  placeholder,
  children,
  ...restProps
}) {
  return (
    <Input {...restProps}>
      <textarea
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder={placeholder}
      >
        {children}
      </textarea>
    </Input>
  );
};

SignUp2.Select = function SignUp2Select({
  setValue,
  value,
  placeholder,
  children,
  ...restProps
}) {
  return (
    <Select {...restProps}>
      <select onChange={(event) => setValue(event.target.value)} value={value}>
        <option selected disabled hidden value="">Select</option>
        <option value="Retailer">Retailer</option>
        <option value="Food Services">Food Service</option>
      </select>
    </Select>
  );
};

SignUp2.InputsAndButton = function SignUp2InputsAndButton({
  placeholder,
  children,
  ...restProps
}) {
  return <InputsAndButton {...restProps}>{children}</InputsAndButton>;
};

SignUp2.BackButton = function SignUp2BackButton({ to, children, ...restProps }) {
  return (
    <BackButton {...restProps}>
      <ReactRouterLink to={to}>
        <button>{children}</button>
      </ReactRouterLink>
    </BackButton>
  );
};

SignUp2.NextButton = function SignUp2NextButton({ to, children, ...restProps }) {
  return (
    <NextButton {...restProps}>
      <ReactRouterLink to={to}>
        <button>{children}</button>
      </ReactRouterLink>
    </NextButton>
  );
};

SignUp2.NavigationSec = function SignUp2NavigationSec({ placeholder, children, ...restProps }) {
  return <NavigationSec {...restProps}>{children}</NavigationSec>;
};

SignUp2.Progress = function SignUp2Progress({
  placeholder,
  children,
  ...restProps
}) {
  return <Progress {...restProps}>{children}</Progress>;
};

SignUp2.Completed = function SignUp2Completed({
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

SignUp2.Incompleted = function SignUp2Incompleted({
  setValue,
  value,
  type,
  label,
  align,
  children,
  ...restProps
}) {
  return (
    <Incompleted {...restProps} className="incompleted">
      <input type="radio" disabled/>{align ? <br/> : null }
      <label>{label}</label>
    </Incompleted>
  );
};

SignUp2.TallPlant = function SignUp2TallPlant({ children, ...restProps }) {
  return (
    <TallPlant {...restProps}>
      <img src="/images/RotatedTallPlant.png" alt="Tall Plant" />
    </TallPlant>
  );
};

SignUp2.WebLady = function SignUp2WebLady({ children, ...restProps }) {
  return (
    <WebLady {...restProps}>
      <img src="/images/WebLady2.png" alt="Web Lady" />
    </WebLady>
  );
};
