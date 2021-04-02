import React, { useState, useEffect } from "react";
import * as ROUTES from "./constants/routes";
import { db } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUp, Contact, SignUp2, SignUp3 } from "./pages";
import { BusinessContext } from "./context/business";
import { LandingPageContainer } from "./containers";

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

  useEffect(() => {
    db.collection("businesses")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setBusinesses(doc.data());
        });
      });
  }, []);

  console.log(businesses);

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
        }}
      >
        <Router>
          <Switch>
            <Route path={ROUTES.HOME} exact>
              <LandingPageContainer />
            </Route>
            <Route path={ROUTES.SIGNUP} exact>
              <SignUp />
            </Route>
          </Switch>
          <Switch>
            <Route path={ROUTES.SIGNUP2} exact>
              <SignUp2 businesses={businesses} />
            </Route>
          </Switch>
          <Switch>
            <Route path={ROUTES.SIGNUP3} exact>
              <SignUp3 />
            </Route>
          </Switch>
          <Switch>
            <Route path={ROUTES.CONTACT} exact>
              <Contact />
            </Route>
          </Switch>
        </Router>
      </BusinessContext.Provider>
    </>
  );
}
