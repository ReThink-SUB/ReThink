import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Container,
  Slogan,
  Description,
  SecondaryDescription,
  Inputs,
  Input,
  SecondaryInput,
  SecondaryInputs,
  InputsAndButton,
  HalfInputs,
  HalfInput,
  LeafDots,
  Select,
  Button,
  TallPlant,
  WebLady,
} from "./styles/signup";

export default function SignUp({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignUp.Slogan = function SignUpSlogan({ children, ...restProps }) {
  return (
    <Slogan {...restProps}>
      <h2>{children}</h2>
    </Slogan>
  );
};

SignUp.Description = function SignUpDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

SignUp.SecondaryDescription = function SignUpSecondaryDescription({
  children,
  ...restProps
}) {
  return <SecondaryDescription {...restProps}>{children}</SecondaryDescription>;
};

SignUp.HalfInputs = function SignUpHalfInputs({
  placeholder,
  children,
  ...restProps
}) {
  return <HalfInputs {...restProps}>{children}</HalfInputs>;
};

SignUp.Inputs = function SignUpInputs({ placeholder, children, ...restProps }) {
  return <Inputs {...restProps}>{children}</Inputs>;
};

SignUp.InputsAndButton = function SignUpInputsAndButton({
  placeholder,
  children,
  ...restProps
}) {
  return <InputsAndButton {...restProps}>{children}</InputsAndButton>;
};

SignUp.SecondaryInputs = function SignUpSecondaryInputs({
  placeholder,
  children,
  ...restProps
}) {
  return <SecondaryInputs {...restProps}>{children}</SecondaryInputs>;
};

SignUp.Input = function SignUpInput({ placeholder, children, ...restProps }) {
  return (
    <Input {...restProps}>
      <input placeholder={placeholder}></input>
    </Input>
  );
};

SignUp.SecondaryInput = function SignUpSecondaryInput({
  placeholder,
  children,
  ...restProps
}) {
  return (
    <SecondaryInput {...restProps}>
      <input placeholder={placeholder}></input>
    </SecondaryInput>
  );
};

SignUp.HalfInput = function SignUpHalfInput({
  placeholder,
  children,
  ...restProps
}) {
  return (
    <HalfInput {...restProps}>
      <input placeholder={placeholder}></input>
    </HalfInput>
  );
};

SignUp.LeafDots = function SignUpLeafDots({ children, ...restProps }) {
  return (
    <LeafDots {...restProps}>
      <img src="/images/LeafandDots.png" alt="LeafAndDots" />
    </LeafDots>
  );
};

SignUp.Select = function SignUpSelect({ placeholder, children, ...restProps }) {
  return (
    <Select {...restProps}>
      <select>
        <option value="0">Select:</option>
        <option value="1">Yes</option>
        <option value="2">No</option>
      </select>
    </Select>
  );
};

SignUp.Button = function SignUpButton({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Button {...restProps}>{children}</Button>;
    </ReactRouterLink>
  );
};

SignUp.TallPlant = function SignUpTallPlant({ children, ...restProps }) {
  return (
    <TallPlant {...restProps}>
      <img src="/images/TallPlant.png" alt="Tall Plant" />
    </TallPlant>
  );
};

SignUp.WebLady = function SignUpWebLady({ children, ...restProps }) {
  return (
    <WebLady {...restProps}>
      <img src="/images/WebLady.png" alt="Web Lady" />
    </WebLady>
  );
};