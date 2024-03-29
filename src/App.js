import React, { useState, useEffect, Suspense, lazy } from "react";
import * as ROUTES from "./constants/routes";
import { db } from "./firebase";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Loading, ScrollToTop } from "./components";
import { BusinessContext } from "./context/business";
import usePageTracking from "./googleanalytics";

const LandingPage = lazy(() => import("./pages/landingPage"));
const SignUp = lazy(() => import("./pages/signup"));
const Contact = lazy(() => import("./pages/contact"));
const SignUp2 = lazy(() => import("./pages/signup2"));
const SignUp3 = lazy(() => import("./pages/signup3"));
const SignUp4 = lazy(() => import("./pages/signup4"));
const Team = lazy(() => import("./pages/team"));
const Businesses = lazy(() => import("./pages/businesses"));
const Criteria = lazy(() => import("./pages/criteria"));
const About = lazy(() => import("./pages/about"));
const Details = lazy(() => import("./pages/businessDetails"));

export default function App() {
  const [businesses, setBusinesses] = useState([]);
  const [businessName, setBusinessName] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [category, setCategory] = useState("Retailer");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [signUpReason, setSignUpReason] = useState("");
  const [sustainablePractices, setSustainablePractices] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [contact, setContact] = useState("Yes");
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [contactAlert, setContactAlert] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
 

  // fetch profiles json
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("./profiles.json")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  usePageTracking();

  useEffect(() => {
    db.collection("businesses")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setBusinesses(doc.data());
        });
      });
  }, []);

  return (
    <>
      <BusinessContext.Provider
        value={{
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
          first,
          setFirst,
          last,
          setLast,
          email,
          setEmail,
          phone,
          setPhone,
          contact,
          setContact,
          category,
          setCategory,
          signUpReason,
          setSignUpReason,
          sustainablePractices,
          setSustainablePractices,
          hearAboutUs,
          setHearAboutUs,
          submit,
          setSubmit,
          name,
          setName,
          subject,
          setSubject,
          message,
          setMessage,
          contactAlert,
          setContactAlert,
          imageUrl,
          setImageUrl,
          progress,
          setProgress,
          image,
          setImage,
        }}
      >
        
          <Switch>
            <Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Loading />
                </div>
              }
            >
              <Route path={ROUTES.LANDING} exact>
                <LandingPage />
              </Route>
              <Route path={ROUTES.SIGNUP} exact>
                <SignUp />
              </Route>
              <Route path={ROUTES.SIGNUP2} exact>
                <SignUp2 businesses={businesses} />
              </Route>
              <Route path={ROUTES.SIGNUP3} exact>
                <SignUp3 />
              </Route>
              <Route path={ROUTES.SIGNUP4} exact>
                <SignUp4 />
              </Route>
              <Route path={ROUTES.CONTACT} exact>
                <Contact />
              </Route>
              <Route path={ROUTES.CRITERIA} exact>
                <Criteria />
              </Route>
              {/* FOR DEBUGGING ONLY */}
              <Route
                exact
                path={ROUTES.DETAILS + "/:business"}
                key=""
                component={Details}
              />
              {/* <Details /> */}
              {/* <Route
                path={ROUTES.TEAM}
                render={(...routerProps) => (
                  <Team {...routerProps} profiles={data} />
                )}
              /> */}
              <Route path={ROUTES.BUSINESSES} component={Businesses} />
              <Route path={ROUTES.ABOUT} component={About} />
            </Suspense>
          </Switch>
        <ScrollToTop />
      </BusinessContext.Provider>
      <ScrollToTop />
      
    </>
  );
}
