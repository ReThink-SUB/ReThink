import React from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./global-styles";
import { firebaseApp } from "./firebase";
import { FirebaseContext } from "./context/firebase";
import 'bootstrap/dist/css/bootstrap.css';

render(
  <>
    <FirebaseContext.Provider value={{ firebaseApp }}>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
