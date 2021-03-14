import React, { useContext } from "react";
import { SignUp3 } from "../components";
import * as ROUTES from "../constants/routes";
import { BusinessContext } from "../context/business";

export function SignUp3Container() {
  const {
    businessName,
    addressOne,
    addressTwo,
    category,
    city,
    state,
    zipCode,
    email,
    first,
    last,
    signUpReason,
    sustainablePractices,
    contact,
  } = useContext(BusinessContext);

  return (
    <>
      <SignUp3>
        <SignUp3.Slogan>
          Sign up <br />
          <span>with us, you'll like it here</span>
        </SignUp3.Slogan>
        <SignUp3.Label>Hi {first}</SignUp3.Label>
        <SignUp3.Description>
          Does the information below look correct?
        </SignUp3.Description>
        <SignUp3.Rectangle>
          <SignUp3.InfoSec>
            <SignUp3.InfoTitle>{businessName}</SignUp3.InfoTitle>
            <SignUp3.InfoDescr>
              {addressOne}, {city}, {state}, {zipCode}
            </SignUp3.InfoDescr>
            <SignUp3.InfoSecDescr>{category}</SignUp3.InfoSecDescr>
          </SignUp3.InfoSec>
          <SignUp3.InfoTitle>Contact Information</SignUp3.InfoTitle>
          <SignUp3.InfoDescr>
            {first} {last}
          </SignUp3.InfoDescr>
          <SignUp3.InfoSecDescr>{email}</SignUp3.InfoSecDescr>
        </SignUp3.Rectangle>
        <SignUp3.Button to={ROUTES.SIGNUP}>Submit</SignUp3.Button>
        <SignUp3.DarkTallPlant />
        <SignUp3.TallPlant />
      </SignUp3>
    </>
  );
}
