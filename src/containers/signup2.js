import React, { useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { SignUp2 } from "../components";
import * as ROUTES from "../constants/routes";
import { BusinessContext } from "../context/business";
import "../components/signup/styles/style.scss";

const windowWidth = Dimensions.get("window").width;

export function SignUp2Container() {
  const {
    signUpReason,
    setSignUpReason,
    sustainablePractices,
    setSustainablePractices,
    hearAboutUs,
    setHearAboutUs,
    category,
    setCategory,
  } = useContext(BusinessContext);

  const [width, setWidth] = useState(windowWidth);

  useEffect(() => {
    Dimensions.addEventListener("change", (window) => {
      setWidth(window["window"]["width"]);
    });
  }, []);

  return (
    <>
      <SignUp2>
        <SignUp2.Main className="signup-main">
          <SignUp2.Slogan>
            Let's get to know your business! {/*width*/}
          </SignUp2.Slogan>
          <SignUp2.Inputs className="inputs">
            <SignUp2.Description>
              What category best describes your business?
            </SignUp2.Description>
            <SignUp2.Select setValue={setCategory} value={category} />
            <SignUp2.Description>
              How did you hear about us?
            </SignUp2.Description>
            <SignUp2.Select setValue={setHearAboutUs} value={hearAboutUs} />
            <SignUp2.Description>
              Why do you want to sign up with us?
            </SignUp2.Description>
            <SignUp2.Select setValue={setSignUpReason} value={signUpReason} />
          </SignUp2.Inputs>
          <SignUp2.InputsAndButton className="inputs-n-buttons">
            <SignUp2.BackButton to={ROUTES.SIGNUP} className="back-button">Back</SignUp2.BackButton>
            <SignUp2.NextButton to={ROUTES.SIGNUP3} className="next-button">Next</SignUp2.NextButton>
          </SignUp2.InputsAndButton>
          <SignUp2.NavigationSec className="navSec">
            <SignUp2.Progress className="progressSec">
              <div className="complete-status second" />
              <div className="complete-status second" />
              <div className="incomplete-status second" />
              <SignUp2.Completed
                label="Sign up"
                align={width < 900}
              />
              <SignUp2.Completed
                label="Additional Information"
                align={width < 900}
              />
              <SignUp2.Incompleted
                label="Review and submit"
                align={width < 900}
              />
            </SignUp2.Progress>
          </SignUp2.NavigationSec>
          <SignUp2.TallPlant />
          <SignUp2.WebLady />
        </SignUp2.Main>
      </SignUp2>
    </>
  );
}
