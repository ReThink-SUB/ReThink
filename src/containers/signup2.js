import React, { useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { SignUp, SignUp2 } from "../components";
import * as ROUTES from "../constants/routes";
import { BusinessContext } from "../context/business";
import { db, storage } from "../firebase";
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
  const [fakeAnswer, setFakeAnswer] = useState([]);
  const [fakeAnswer2, setFakeAnswer2] = useState([]);
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    let selectionHolder = []
    db.collection("selections")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let options = doc.data()["options"]
          if (doc.id === "hearAboutUs") {
            console.log(options, "hearAboutUs")
            console.log(hearAboutUs)
            selectionHolder.push(
              <SignUp2.Select
                options={options} id={doc.id}
                setValue={setHearAboutUs} value={hearAboutUs} 
              />
            );
          } else if (doc.id === "signUpReason") {
            console.log(options, "signUpReason")
            selectionHolder.push(
              <SignUp2.Select
              options={options} id={doc.id}
                setValue={setSignUpReason} value={signUpReason}
              />
            );
          } else {
            console.log("type")
            console.log(options)
            selectionHolder.push(
              <SignUp2.Select
              options={doc.data()["options"]} id={doc.id}
                setValue={setCategory} value={category}
              />
            );
          }
        });
        setSelections(selectionHolder);
        // console.log(selectionHolder)
    });
    Dimensions.addEventListener("change", (window) => {
      setWidth(window["window"]["width"]);
    });
  }, []);
  let fakeArr = ["a", "b", "c"]
  let fakeArr2 = ["1", "2", "3", "4"]
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
            {selections[2]}
            <SignUp2.Description>
              How did you hear about us?
            </SignUp2.Description>
            <SignUp2.Select setValue={setFakeAnswer} value={fakeAnswer} id={"type"} options={fakeArr}/>
            {console.log(selections)}
            {selections[0]}
            <SignUp2.Description>
              Why do you want to sign up with us?
            </SignUp2.Description>
            <SignUp2.Select setValue={setFakeAnswer2} value={fakeAnswer2} id={"signUpReason"} options={fakeArr2}/>
            {selections[1]}
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
