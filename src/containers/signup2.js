import React, { useContext } from "react";
import { SignUp2 } from "../components";
import * as ROUTES from "../constants/routes";
import { BusinessContext } from "../context/business";

export function SignUp2Container() {
  const {
    signUpReason,
    setSignUpReason,
    sustainablePractices,
    setSustainablePractices,
    category,
    setCategory,
  } = useContext(BusinessContext);

  return (
    <>
      <SignUp2>
        <SignUp2.Slogan>
          Sign up <br />
          <span>with us, you'll like it here</span>
        </SignUp2.Slogan>
        <SignUp2.Description>
          What category best describes your business?
        </SignUp2.Description>
        <SignUp2.Select setValue={setCategory} value={category} />
        <SignUp2.Description>
          Why do you want to sign up with us?
        </SignUp2.Description>
        <SignUp2.Input setValue={setSignUpReason} value={signUpReason} />
        <SignUp2.Description>
          What sustainable practices does your company follow?
        </SignUp2.Description>
        <SignUp2.Input
          setValue={setSustainablePractices}
          value={sustainablePractices}
        />
        <SignUp2.Button to={ROUTES.SIGNUP3}>Next</SignUp2.Button>
        <SignUp2.TallPlant />
        <SignUp2.WebLady />
      </SignUp2>
    </>
  );
}
