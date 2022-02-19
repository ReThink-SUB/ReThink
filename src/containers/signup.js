import React, { useContext, useEffect, useState } from "react";
import { SignUp } from "../components";
import * as ROUTES from "../constants/routes";
import { BusinessContext } from "../context/business";
import { Alert } from "@material-ui/lab";
import { db, storage } from "../firebase";
import "../components/signup/styles/style.scss";

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
  } = useContext(BusinessContext);

  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("timeout for 5 sec");
      setSubmit(false);
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
        console.log(benefitsHolder);
        setBenefits(benefitsHolder);
    });

    return () => clearTimeout(timeout);
  }, [submit]);

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

  return (
    <>
      <SignUp>
        {submit && (
          <Alert
            style={{ marginBottom: "15px" }}
            onClose={() => setSubmit(false)}
          >
            Business information Sent!
          </Alert>
        )}
        <SignUp.Slogan>
          Here's why you should join!
        </SignUp.Slogan>
        <SignUp.BenefitSec className="benefit-section">
          <div className="benefit-cards">
            {benefits}
          </div>
        </SignUp.BenefitSec>
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
        <SignUp.SecondaryDescription>
          Upload an image for your business profile
        </SignUp.SecondaryDescription>
        <SignUp.UploadContainer>
          <SignUp.ImageInput handleChange={handleChange}>
            {image ? <span>Ready to Upload</span> : <span>Upload image</span>}
          </SignUp.ImageInput>
          <SignUp.Progress progress={progress} />
          <SignUp.UploadButton handleUpload={handleUpload} image={image} />
        </SignUp.UploadContainer>
        {imageUrl && <SignUp.BusinessImg src={imageUrl} />}
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
      {/* <AboutUs.LearnMore>Learn More</AboutUs.LearnMore> */}
    </div>
    <SignUp.SecCircles />
    </>
  );
}