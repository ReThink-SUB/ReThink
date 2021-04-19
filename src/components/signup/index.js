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

SignUp.Input = function SignUpInput({
  setValue,
  value,
  placeholder,
  children,
  ...restProps
}) {
  return (
    <Input {...restProps}>
      <input
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder={placeholder}
      ></input>
    </Input>
  );
};

SignUp.SecondaryInput = function SignUpSecondaryInput({
  setValue,
  value,
  placeholder,
  children,
  ...restProps
}) {
  return (
    <SecondaryInput {...restProps}>
      <input
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder={placeholder}
      ></input>
    </SecondaryInput>
  );
};

SignUp.HalfInput = function SignUpHalfInput({
  setValue,
  value,
  placeholder,
  children,
  ...restProps
}) {
  return (
    <HalfInput {...restProps}>
      <input
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder={placeholder}
      ></input>
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

SignUp.Select = function SignUpSelect({
  setValue,
  value,
  placeholder,
  children,
  ...restProps
}) {
  return (
    <Select {...restProps}>
      <select onChange={(event) => setValue(event.target.value)} value={value}>
        <option value="">Select:</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
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
