import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Container,
  Slogan,
  Description,
  Inputs,
  Input,
  SecondaryInputs,
  InputsAndButton,
  Select,
  Button,
  TallPlant,
  WebLady,
} from "./styles/signup2";

export default function SignUp2({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignUp2.Slogan = function SignUp2Slogan({ children, ...restProps }) {
  return (
    <Slogan {...restProps}>
      <h2>{children}</h2>
    </Slogan>
  );
};

SignUp2.Description = function SignUp2Description({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

SignUp2.Inputs = function SignUp2Inputs({
  placeholder,
  children,
  ...restProps
}) {
  return <Inputs {...restProps}>{children}</Inputs>;
};

SignUp2.InputsAndButton = function SignUp2InputsAndButton({
  placeholder,
  children,
  ...restProps
}) {
  return <InputsAndButton {...restProps}>{children}</InputsAndButton>;
};

SignUp2.SecondaryInputs = function SignUp2SecondaryInputs({
  placeholder,
  children,
  ...restProps
}) {
  return <SecondaryInputs {...restProps}>{children}</SecondaryInputs>;
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
        <option value="">Select:</option>
        <option value="Retailer">Retailer</option>
        <option value="Food Services">Food Service</option>
      </select>
    </Select>
  );
};

SignUp2.Button = function SignUp2Button({ to, children, ...restProps }) {
  return (
    <Button {...restProps}>
      <ReactRouterLink to={to}>
        <button>{children}</button>;
      </ReactRouterLink>
    </Button>
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
