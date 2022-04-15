import React, { useContext, useEffect, useState } from "react";
import { SignUp4 } from "../components";
import * as ROUTES from "../constants/routes";
import { db, storage } from "../firebase";
import "../components/signup/styles/style.scss";

export function SignUp4Container() {
  const [checkImg, setCheckImg] = useState([]);
  
  useEffect(() => {
    var ref = storage.ref(`img/checkmark.jpg`);
    ref.getDownloadURL().then(function (url) {
      setCheckImg(url);
    });
  }, []);

  return (
    <>
      <SignUp4>
        <SignUp4.Main className="main">
          <SignUp4.Slogan className="slogan">
            Thanks for signing up!
          </SignUp4.Slogan>
          <SignUp4.Description>
          We have received your application.
          </SignUp4.Description>
          <div className="checkmark-finished">
            <img src={checkImg} alt="checkmark" />
          </div>
          <SignUp4.Rectangle className="rectangle">
            <SignUp4.InfoSec className="info-section">
              <div className="bullet-list">
                <div className="bullet">
                  <div className="circle completed"/>
                </div>
                <SignUp4.InfoDescr className="first-step" style={{"color": "#96B479"}}>
                  1. We'll verify your business
                </SignUp4.InfoDescr>
                <div className="bullet">
                  <div className="circle"/>
                </div>
                <SignUp4.InfoDescr className="second-step">
                  2. Contact you via email
                </SignUp4.InfoDescr>
                <div className="bullet">
                  <div className="circle"/>
                </div>
                <SignUp4.InfoDescr className="third-step">
                  3. Schedule an interview
                </SignUp4.InfoDescr>
                <div className="bullet">
                  <div className="circle"/>
                </div>
                <SignUp4.InfoDescr className="fourth-step">
                  4. Onboard
                </SignUp4.InfoDescr>
              </div>
              {/* <div className="step-line" /> */}
            </SignUp4.InfoSec>
          </SignUp4.Rectangle>
          <SignUp4.InputsAndButton className="inputs-n-buttons">
            <SignUp4.Button to={ROUTES.LANDING}>Return to Home</SignUp4.Button>
          </SignUp4.InputsAndButton>
          <SignUp4.DarkTallPlant />
          <SignUp4.TallPlant />
        </SignUp4.Main>
      </SignUp4>
    </>
  );
}
