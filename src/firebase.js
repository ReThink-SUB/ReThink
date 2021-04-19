import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDUohN1vM_7p_UcaGR36lOzPMvRXKfCOLA",
  authDomain: "rethink-6251f.firebaseapp.com",
  projectId: "rethink-6251f",
  storageBucket: "rethink-6251f.appspot.com",
  messagingSenderId: "613605092192",
  appId: "1:613605092192:web:c7cebf580b7ca760b30c05",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebaseApp, db, auth, storage };
