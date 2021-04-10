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
  ImageInput,
  Progress,
  UploadButton,
  UploadContainer,
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

SignUp.UploadContainer = function SignUpUploadContainer({
  children,
  ...restProps
}) {
  return <UploadContainer {...restProps}>{children}</UploadContainer>;
};

SignUp.ImageInput = function SignUpImageInput({
  handleChange,
  children,
  ...restProps
}) {
  return (
    <ImageInput {...restProps}>
      <input
        type="file"
        name="file-1[]"
        id="file-1"
        data-multiple-caption="{count} files selected"
        multiple
        onChange={handleChange}
      />
      <label for="file-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          viewBox="0 0 20 17"
        >
          <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
        </svg>
        {children}
      </label>
    </ImageInput>
  );
};

SignUp.Progress = function SignUpProgress({
  progress,
  children,
  ...restProps
}) {
  return <Progress value={progress} max="100" {...restProps} />;
};

SignUp.UploadButton = function SignUpUploadButton({
  handleUpload,
  image,
  children,
  ...restProps
}) {
  return (
    <UploadButton onClick={handleUpload} disabled={!image}>
      Upload!
    </UploadButton>
  );
};
