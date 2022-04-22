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
    email: email,
    phone: phone,
    address: addressOne,
    category: category,
    city: city,
    state: state,
    zipCode: zipCode,
    signUpReason: signUpReason,
    sustainablePractices: sustainablePractices,
  };

  const submitValues = () => {
    console.log("i was submitted?")
    db.collection("promoteBusinesses").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // allows the most recent image to be on top
      address: addressOne,
      address2: addressTwo,
      // category: category,
      city: city,
      // contact: contact,
      // // phone: phone,
      email: email,
      firstName: first,
      lastName: last,
      name: businessName,
      // signUpReason: signUpReason,
      state: state,
      // sustainablePractices: sustainablePractices,
      zipcode: zipCode,
      // imageUrl: imageUrl,
    });
    console.log("address:", addressOne)
    console.log("address2:", addressTwo)
    
    console.log("city:", city)
    
    
    console.log("email:", email)
    console.log("firstName:", first)
    console.log("lastName:", last)
    console.log("name:", businessName)
    console.log("state:", state)
    
    console.log("zipcode:", zipCode)
    // console.log("imageUrl:", imageUrl)

    // console.log("category:", category)
    // console.log("contact:", contact)
    // console.log("phone:", phone)
    // console.log("signUpReason:", signUpReason)
    // console.log("sustainablePractices:", sustainablePractices)

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
    setCategory("");
    setCity("");
    setState("");
    setZipCode("");
    setEmail("");
    setFirst("");
    setLast("");
    setSignUpReason("");
    setSustainablePractices("");
    setContact("");
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
                {email} {phone}
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
