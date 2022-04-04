import React from "react";
import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import "./styles/style.scss";
import {
  Container,
  Main,
  Slogan,
  BenefitSec,
  SecCircles,
  FormCircles,
  Description,
  SecondaryDescription,
  Inputs,
  Input,
  SecondaryInput,
  SecondaryInputs,
  InputsAndButton,
  HalfInputs,
  HalfInput,
  ThirdInput,
  LeafDots,
  Select,
  Button,
  NavigationSec,
  Progress,
  Completed,
  Incompleted,
  TallPlant,
  WebLady,
  ImageInput,
  UploadButton,
  UploadContainer,
  BusinessImg,
} from "./styles/signup";

export default function SignUp({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignUp.Main = function SignUpMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

SignUp.Slogan = function SignUpSlogan({ children, ...restProps }) {
  return (
    <Slogan {...restProps}>
      <h2>{children}</h2>
    </Slogan>
  );
};

SignUp.BenefitSec = function SignUpBenefitSec({
  children,
  ...restProps
}) {
  return <BenefitSec {...restProps}>{children}</BenefitSec>;
};

SignUp.SecCircles = function SignUpSecCircles({ children, ...restProps }) {
  return (
    <SecCircles {...restProps}>
      <img src="/images/CirclePattern.png" alt="SecCircles" />
    </SecCircles>
  );
};

SignUp.FormCircles = function SignUpFormCircles({
  bottom,
  right,
  children,
  ...restProps }) {
  return (
    <FormCircles bottom={bottom} right={right} {...restProps}>
      <img src="/images/CirclePattern.png" alt="SecCircles" />
    </FormCircles>
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
  type,
  label,
  children,
  ...restProps
}) {
  
  const setInputs = () => {
    if (type === "tel") {
      return (
        <input
          onChange={(event) => setValue(event.target.value)}
          value={value} type={type} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        ></input>
      );
    } else if (type === "preffered") {
      let defaultSel = <option selected hidden value="">Select</option>;

      return (
        <select onChange={(event) => setValue(event.target.value)} value={value} defaultValue={defaultSel} required>
          {defaultSel}
          <option value="email">Email</option>
          <option value="phone">Phone Number</option>
        </select>
      )
    } else {
      return (
        <input
          onChange={(event) => setValue(event.target.value)}
          value={value}
        ></input>
      )
    }
  }
  
  return (
    <Input {...restProps} className="input">
      <label>{label}</label><br/><br/>
      {setInputs()}
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
  label,
  children,
  ...restProps
}) {
  return (
    <HalfInput {...restProps} className="half-input">
      <label>{label}</label>
      <input
        onChange={(event) => setValue(event.target.value)}
        value={value}
      ></input>
    </HalfInput>
  );
};

SignUp.ThirdInput = function SignUpThirdInput({
  setValue,
  value,
  label,
  children,
  ...restProps
}) {
  return (
    <ThirdInput {...restProps} className="third-input">
      <label>{label}</label>
      <input
        onChange={(event) => setValue(event.target.value)}
        value={value}
      ></input>
    </ThirdInput>
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
      <Button {...restProps}>{children}</Button>
    </ReactRouterLink>
  );
};

SignUp.NavigationSec = function SignUpNavigationSec({ placeholder, children, ...restProps }) {
  return <NavigationSec {...restProps}>{children}</NavigationSec>;
};

SignUp.Progress = function SignUpProgress({
  placeholder,
  children,
  ...restProps
}) {
  return <Progress {...restProps}>{children}</Progress>;
};

SignUp.Completed = function SignUpCompleted({
  setValue,
  value,
  type,
  label,
  children,
  ...restProps
}) {
  return (
    <>
    <Completed {...restProps} className="completed">
      <input type="radio" checked disabled/>
      <label>{label}</label>
    </Completed>
    </>
  );
};

SignUp.Incompleted = function SignUpIncompleted({
  setValue,
  value,
  type,
  label,
  children,
  ...restProps
}) {
  return (
    <Incompleted {...restProps} className="incompleted">
      <input type="radio" disabled/>
      <label>{label}</label>
    </Incompleted>
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
