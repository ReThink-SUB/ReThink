import React from "react";

import {
  Container,
  Slogan,
  Inputs,
  MessageInput,
  Input,
  Label,
  Button,
  Plant,
} from "./styles/contact";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Plant = function ContactPlant({ children, ...restProps }) {
  return (
    <Plant {...restProps}>
      <img src="/images/TallPlant.png" alt="TallPlant" />
    </Plant>
  );
};

Contact.Slogan = function ContactSlogan({ children, ...restProps }) {
  return <Slogan {...restProps}>{children}</Slogan>;
};

Contact.Inputs = function ContactInputs({ children, ...restProps }) {
  return (
    <Inputs {...restProps}>
      {children}
    </Inputs>
  );
};

Contact.Input = function ContactInput({
  value,
  setValue,
  label,
  placeholder,
  children,
  ...restProps
}) {
  return (
    <Input {...restProps}>
      <Label>{label}</Label>
      <input
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder={placeholder}
      ></input>
      <img src="/images/CirclePattern.png" alt="Circle Pattern" />
    </Input>
  );
};

Contact.MessageInput = function ContactMessageInput({
  setValue,
  value,
  label,
  placeholder,
  children,
  ...restProps
}) {
  return (
    <MessageInput {...restProps}>
      <Label>{label}</Label>
      <textarea
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder={placeholder}
      ></textarea>
      <img src="/images/CirclePattern.png" alt="Circle Pattern" />
    </MessageInput>
  );
};

Contact.Button = function SignUp3Button({ to, children, ...restProps }) {
  return (
    <Button {...restProps}>
      <button>{children}</button>
    </Button>
  );
};
