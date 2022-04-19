import React, { useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { SignUp } from "../components";
import * as ROUTES from "../constants/routes";
import { BusinessContext } from "../context/business";
import { Alert } from "@material-ui/lab";
import { db, storage } from "../firebase";
import "../components/signup/styles/style.scss";

const windowWidth = Dimensions.get("window").width;

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
    imageUrl,
    setImageUrl,
    submit,
    setSubmit,
    image,
    setImage,
    progress,
    setProgress,
    phone,
    setPhone,
    contact,
    setContact
  } = useContext(BusinessContext);

  const [benefits, setBenefits] = useState([]);
  const [width, setWidth] = useState(windowWidth);
  const [click, setClicked] = useState('')
  const [alert, setAlert] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("timeout for 5 sec");
      setSubmit(true);
    }, 5000);

    let benefitsHolder = [];
    db.collection("benefits")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          benefitsHolder.push(
            <Benefit
              data={doc.data()}
            />
          );
        });
        setBenefits(benefitsHolder);
    });

    Dimensions.addEventListener("change", (window) => {
      setWidth(window["window"]["width"]);
    });

    return () => clearTimeout(timeout);
  }, [submit]);

  const AlertMessage = () => {
    return (
      <SignUp.Description>
        Please fill out all the required questions!
      </SignUp.Description>
    )
  }

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function...
        alert(error.message);
      },
      () => {
        // when the upload completes...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL() // thet image is already uploaded, this gives us a download link for the uploaded image
          .then((url) => {
            // post image inside database
            setImageUrl(url);
          });
      }
    );
  };

  const getAddressInputs = (dimm) => {
    if (dimm < 800) {
      return (
        <>
        <SignUp.Input
          setValue={setAddressOne}
          value={addressOne}
          label="Address Line 1"
          name="address"
        />
        <SignUp.Input
          setValue={setAddressTwo}
          value={addressTwo}
          label="Address Line 2"
          name="address"
        />
        <SignUp.Input
          setValue={setCity}
          value={city}
          label="City"
        />
        <SignUp.HalfInputs>
          <SignUp.HalfInput
            setValue={setState}
            value={state}
            label="State"
          />
          <SignUp.HalfInput
            setValue={setZipCode}
            value={zipCode}
            label="Zip Code"
          />
        </SignUp.HalfInputs>
        </>
      );
    } else {
      let thirdWidth = {"width" : "32%"};
      return (
        <>
        <SignUp.HalfInputs>
          <SignUp.HalfInput
            setValue={setAddressOne}
            value={addressOne}
            label="Address Line 1"
          />
          <SignUp.HalfInput
            setValue={setAddressTwo}
            value={addressTwo}
            label="Address Line 2"
          />
        </SignUp.HalfInputs>
        <SignUp.HalfInputs>
          <SignUp.HalfInput
            setValue={setCity}
            value={city}
            label="City"
            style={thirdWidth}
          />
          <SignUp.HalfInput
            setValue={setState}
            value={state}
            label="State"
            style={thirdWidth}
          />
          <SignUp.HalfInput
            setValue={setZipCode}
            value={zipCode}
            label="Zip Code"
            style={thirdWidth}
          />
        </SignUp.HalfInputs>
        </>
      );
    }
  }

  return (
    <>
      <SignUp>
        <SignUp.Main className="signup-main">
          <SignUp.Slogan className="signup-slogan">
            Here's why you should join!
          </SignUp.Slogan>
          <SignUp.BenefitSec className="benefit-section">
            <div className="benefit-cards">
              {benefits}
            </div>
          </SignUp.BenefitSec>
          <SignUp.Slogan className="signup-slogan">
            Let's get to know your business {/*width*/}
          </SignUp.Slogan>
          <SignUp.Inputs className="signup-inputs">
            <SignUp.Input
              setValue={setBusinessName}
              value={businessName}
              label="Name of business"
            />
            {getAddressInputs(width)}
            <SignUp.HalfInputs>
              <SignUp.HalfInput
                setValue={setFirst}
                value={first}
                label="First Name"
              />
              <SignUp.HalfInput
                setValue={setLast}
                value={last}
                label="Last Name"
              />
            </SignUp.HalfInputs>
            <SignUp.Input
              setValue={setEmail}
              value={email}
              label="Email Address"
            />
            <SignUp.Input
              setValue={setPhone}
              value={phone}
              type="tel"
              label="Phone Number"
            />
            <SignUp.Input
              setValue={setContact}
              value={contact}
              type="preffered"
              label="Preffered Method of Contact"
            ></SignUp.Input>
          </SignUp.Inputs>
          {alert ? AlertMessage() : null}
          <SignUp.InputsAndButton className="next-section">
            <SignUp.Button className="button" to={ROUTES.SIGNUP2} setAlert={setAlert} alert={alert}
            disabled={!businessName || !addressOne || !city || !state || !zipCode || !first || !last || !email || !phone || !contact}>Next</SignUp.Button>
          </SignUp.InputsAndButton>
          <SignUp.NavigationSec className="navSec">
            <SignUp.Progress className="progressSec">
              <div className="complete-status" />
              <div className="incomplete-status" />
              <div className="incomplete-status" />
              <SignUp.Completed
                label="Sign up"
              />
              <SignUp.Incompleted
                label="Additional Information"
              />
              <SignUp.Incompleted
                label="Review and submit"
              />
            </SignUp.Progress>
          </SignUp.NavigationSec>
          {/* <SignUp.FormCircles className="form-circles" bottom="10%" right="35%" /> */}
          <SignUp.LeafDots />
          <SignUp.TallPlant />
          <SignUp.WebLady />
        </SignUp.Main>
      </SignUp>
    </>
  );
}

function Benefit(props) {
  let data = props.data;
  const [imgURL, setURL] = useState([]);

  useEffect(() => {
    var ref = storage.ref(`img/${data.img}.jpg`);
    ref.getDownloadURL().then(function (url) {
      setURL(url);
    });
  });

  return (
    <>
    <div className="benefit-card">
      <div className="benefit-image">
        <img src={imgURL} alt="club" />
      </div>
      <h3 className="benefit-title">{data.title}</h3>
      <p className="benefit-desc">
        {data.desc}
      </p>
    </div>
    <SignUp.SecCircles />
    </>
  );
}