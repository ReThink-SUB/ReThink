import React, { useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { SignUp3 } from "../components";
import * as ROUTES from "../constants/routes";
import { BusinessContext } from "../context/business";
import { db } from "../firebase";
import firebase from "firebase";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import "../components/signup/styles/style.scss";

const windowWidth = Dimensions.get("window").width;

const {
  REACT_APP_USER_ID,
  REACT_APP_SERVICE_ID,
  REACT_APP_TEMPLATE_ID,
} = process.env;
init(REACT_APP_USER_ID);

export function SignUp3Container() {
  const [width, setWidth] = useState(windowWidth);

  useEffect(() => {
    Dimensions.addEventListener("change", (window) => {
      setWidth(window["window"]["width"]);
    });
  }, []);
  
  const {
    businessName,
    setBusinessName,
    addressOne,
    setAddressOne,
    addressTwo,
    setAddressTwo,
    category,
    setCategory,
    city,
    setCity,
    state,
    setState,
    zipCode,
    setZipCode,
    email,
    setEmail,
    phone,
    setPhone,
    first,
    setFirst,
    last,
    setLast,
    signUpReason,
    setSignUpReason,
    sustainablePractices,
    setSustainablePractices,
    hearAboutUs,
    setHearAboutUs,
    setContact,
    contact,
    setSubmit,
    imageUrl,
    setImageUrl,
    image,
    setImage,
    progress,
    setProgress,
  } = useContext(BusinessContext);

  let templateParams = {
    name: businessName,
    address: addressOne,
    address2: addressTwo,
    city: city,
    state: state,
    zipcode: zipCode,
    firstName: first,
    lastName: last,
    contact: contact,
    phone: phone,
    email: email,
    category: category,
    hearAboutUs: hearAboutUs,
    signUpReason: signUpReason
  };

  const submitValues = () => {
    db.collection("promoteBusinesses").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // allows the most recent image to be on top
      name: businessName,
      address: addressOne,
      address2: addressTwo,
      city: city,
      state: state,
      zipcode: zipCode,
      firstName: first,
      lastName: last,
      contact: contact,
      phone: phone,
      email: email,
      category: category,
      hearAboutUs: hearAboutUs,
      signUpReason: signUpReason
    });

    emailjs
      .send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, templateParams)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    setBusinessName("");
    setAddressOne("");
    setAddressTwo("");
    setCity("");
    setState("");
    setZipCode("");
    setFirst("");
    setLast("");
    setEmail("");
    setPhone("");
    setContact("");
    setCategory("");
    setHearAboutUs("");
    setSignUpReason("");
    setSustainablePractices("");
    setSubmit(true);
    setImageUrl("");
    setProgress(4);
    setImage(null);
  };

  return (
    <>
      <SignUp3>
        <SignUp3.Main className="main">
          <SignUp3.Slogan className="slogan">
            Let's get to know your business!
          </SignUp3.Slogan>
          <SignUp3.Label>Hi {first}!</SignUp3.Label>
          <SignUp3.Description>
            Does the information below look correct?
          </SignUp3.Description>
          <SignUp3.Rectangle className="business-info">
            <SignUp3.InfoSec className="info-section">
              <SignUp3.InfoTitle className="info-title">{businessName}</SignUp3.InfoTitle>
              <SignUp3.InfoDescr style={{"width": "100%"}}>
                {addressOne}, {city}, {state}, {zipCode}
              </SignUp3.InfoDescr>
              <SignUp3.InfoDescr style={{"margin-bottom": "1.5rem"}}>
                {category}
              </SignUp3.InfoDescr>
              <SignUp3.InfoTitle className="info-title">Contact Information</SignUp3.InfoTitle>
              <SignUp3.InfoDescr>
                {first} {last}
              </SignUp3.InfoDescr>
              <SignUp3.InfoDescr>
                {email}
              </SignUp3.InfoDescr>
              <SignUp3.InfoDescr>
                {phone}
              </SignUp3.InfoDescr>
              <SignUp3.Button to={ROUTES.SIGNUP} className="edit-button">
                Edit
              </SignUp3.Button>
            </SignUp3.InfoSec>
          </SignUp3.Rectangle>
          <SignUp3.InputsAndButton className="inputs-n-buttons">
            <SignUp3.BackButton to={ROUTES.SIGNUP2} className="back-button">Back</SignUp3.BackButton>
            <SignUp3.NextButton onClick={() => submitValues()} to={ROUTES.SIGNUP4} className="submit-button">Submit</SignUp3.NextButton>
          </SignUp3.InputsAndButton>
          <SignUp3.NavigationSec className="nav-section">
            <SignUp3.Progress className="progress-section">
              <div className="complete-status second" />
              <div className="complete-status second" />
              <div className="complete-status second" />
              <SignUp3.Completed
                label="Sign up"
                align={width < 900}
              />
              <SignUp3.Completed
                label="Additional Information"
                align={width < 900}
              />
              <SignUp3.Completed
                label="Review and submit"
                align={width < 900}
              />
            </SignUp3.Progress>
          </SignUp3.NavigationSec>
          <SignUp3.DarkTallPlant />
          <SignUp3.TallPlant />
        </SignUp3.Main>
      </SignUp3>
    </>
  );
}
