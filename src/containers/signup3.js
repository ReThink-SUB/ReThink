import React, { useContext } from "react";
import { SignUp3 } from "../components";
import * as ROUTES from "../constants/routes";
import { BusinessContext } from "../context/business";
import { db } from "../firebase";
import firebase from "firebase";

export function SignUp3Container() {
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
  } = useContext(BusinessContext);

  const submitValues = () => {
    db.collection("businesses").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // allows the most recent image to be on top
      address: addressOne,
      address2: addressTwo,
      category: category,
      city: city,
      contact: contact,
      email: email,
      firstName: first,
      lastName: last,
      name: businessName,
      signUpReason: signUpReason,
      state: state,
      sustainablePractices: sustainablePractices,
      zipcode: zipCode,
      imageUrl: imageUrl,
    });

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
  };

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
        <SignUp3.Button onClick={() => submitValues()} to={ROUTES.SIGNUP}>
          Submit
        </SignUp3.Button>
        <SignUp3.DarkTallPlant />
        <SignUp3.TallPlant />
      </SignUp3>
    </>
  );
}
