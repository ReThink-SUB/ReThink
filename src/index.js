import React from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { firebaseApp } from "./firebase";
import { FirebaseContext } from "./context/firebase";

render(
  <>
    <FirebaseContext.Provider value={{ firebaseApp }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
