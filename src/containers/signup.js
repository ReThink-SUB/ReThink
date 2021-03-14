import React, { useContext } from "react";
import { SignUp } from "../components";
import * as ROUTES from "../constants/routes";
import { BusinessContext } from "../context/business";

export function SignUpContainer() {
  const {
    businessName,
    setBusinessName,
    addressOne,
    setAddressOne,
    addressTwo,
    setAddressTwo,
    city,
    setCity,
    state,
    setState,
    zipCode,
    setZipCode,
    email,
    setEmail,
    first,
    setFirst,
    last,
    setLast,
    contact,
    setContact,
  } = useContext(BusinessContext);

  return (
    <>
      <SignUp>
        <SignUp.Slogan>
          Sign up <br />
          <span>with us, you'll like it here</span>
        </SignUp.Slogan>
        <SignUp.Description>
          Start by entering details about your business
        </SignUp.Description>
        <SignUp.Inputs>
          <SignUp.Input
            setValue={setBusinessName}
            value={businessName}
            placeholder="Name of business"
          />
          <SignUp.HalfInputs>
            <SignUp.HalfInput
              setValue={setAddressOne}
              value={addressOne}
              placeholder="Address Line 1"
            />
            <SignUp.HalfInput
              setValue={setAddressTwo}
              value={addressTwo}
              placeholder="Address Line 2"
            />
          </SignUp.HalfInputs>
          <SignUp.HalfInputs>
            <SignUp.HalfInput
              setValue={setCity}
              value={city}
              placeholder="City"
            />
            <SignUp.HalfInput
              setValue={setState}
              value={state}
              placeholder="State"
            />
            <SignUp.HalfInput
              setValue={setZipCode}
              value={zipCode}
              placeholder="Zip Code"
            />
          </SignUp.HalfInputs>
        </SignUp.Inputs>
        <SignUp.SecondaryDescription setValue={setContact} value={contact}>
          Can we contact you?
        </SignUp.SecondaryDescription>
        <SignUp.Select />
        <SignUp.SecondaryDescription>
          How should we contact you?
        </SignUp.SecondaryDescription>
        <SignUp.InputsAndButton>
          <SignUp.SecondaryInputs>
            <SignUp.Input
              setValue={setEmail}
              value={email}
              placeholder="Email Address"
            />
            <SignUp.HalfInputs>
              <SignUp.HalfInput
                setValue={setFirst}
                value={first}
                placeholder="First Name"
              />
              <SignUp.HalfInput
                setValue={setLast}
                value={last}
                placeholder="Last Name"
              />
            </SignUp.HalfInputs>
          </SignUp.SecondaryInputs>
          <SignUp.Button to={ROUTES.SIGNUP2}>Next</SignUp.Button>
        </SignUp.InputsAndButton>
        <SignUp.LeafDots />
        <SignUp.TallPlant />
        <SignUp.WebLady />
      </SignUp>
    </>
  );
}
