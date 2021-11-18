import React, { useState, useEffect, Suspense, lazy } from "react";
import * as ROUTES from "./constants/routes";
import { db } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loading } from "./components";
import { BusinessContext } from "./context/business";
import { ScrollToTop } from "./components";

const LandingPage = lazy(() => import("./pages/landingPage"));
const SignUp = lazy(() => import("./pages/signup"));
const Contact = lazy(() => import("./pages/contact"));
const SignUp2 = lazy(() => import("./pages/signup2"));
const SignUp3 = lazy(() => import("./pages/signup3"));
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
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [signUpReason, setSignUpReason] = useState("");
  const [sustainablePractices, setSustainablePractices] = useState("");
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
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./profiles.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    db.collection("businesses")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setBusinesses(doc.data());
        });
      });
  }, []);

  // console.log(businesses);

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
          contact,
          setContact,
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
        <Router>
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
              <Route path={ROUTES.CONTACT} exact>
                <Contact />
              </Route>
              <Route path={ROUTES.CRITERIA} exact>
                <Criteria />
              </Route>
              {/* FOR DEBUGGING ONLY */}
              <Route exact path={ROUTES.DETAILS + "/:business"} component={Details}>
                {/* <Details /> */}
              </Route>
              <Route
                path={ROUTES.TEAM}
                render={(...routerProps) => (
                  <Team {...routerProps} profiles={data} />
                )}
              />
              <Route path={ROUTES.BUSINESSES} component={Businesses} />
              <Route path={ROUTES.ABOUT} component={About} />
            </Suspense>
          </Switch>
        </Router>
      </BusinessContext.Provider>
      <ScrollToTop/>
    </>
  );
}
