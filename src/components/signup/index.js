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
  BusinessImg,
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

SignUp.BusinessImg = function SignUpBusinessImg({ src,children, ...restProps }) {
  return (
    <BusinessImg {...restProps}>
      <img src={src} alt="Business" />
    </BusinessImg>
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
      <label for="file-1">{children}</label>
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
