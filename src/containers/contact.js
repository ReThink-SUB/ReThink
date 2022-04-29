import React, { useContext } from "react";
import { Contact } from "../components";
import { db } from "../firebase";
import firebase from "firebase";
import { BusinessContext } from "../context/business";
import { Alert } from "@material-ui/lab";

export function ContactContainer() {
  const {
    name,
    setName,
    subject,
    setSubject,
    message,
    setMessage,
    email,
    setEmail,
    contactAlert,
    setContactAlert,
  } = useContext(BusinessContext);

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  const submitValues = () => {
    db.collection("contacted").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // allows the most recent image to be on top
      name: name,
      email: email,
      subject: subject,
      message: message,
    });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setContactAlert(true);
    scrollToTop();
  };

  return (
    <Contact>
      {contactAlert && (
        <Alert
          style={{ marginBottom: "15px" }}
          onClose={() => setContactAlert(false)}
        >
          Message Sent!
        </Alert>
      )}
      <Contact.Plant />
      <Contact.Slogan>
        Contact us! <br />
        <span>We'll be in touch soon</span>
      </Contact.Slogan>
      <Contact.Inputs>
        <Contact.Input
          setValue={setName}
          value={name}
          label="Your name"
          placeholder="Name"
        />
        <Contact.Input
          setValue={setEmail}
          value={email}
          label="Your email"
          placeholder="Email"
        />
        <Contact.Input
          setValue={setSubject}
          value={subject}
          label="Subject"
          placeholder="Subject"
        />
        <Contact.MessageInput
          setValue={setMessage}
          value={message}
          label="Message"
          placeholder="Message"
        />
      </Contact.Inputs>
      <Contact.Button onClick={() => submitValues()}>Submit</Contact.Button>
    </Contact>
  );
}
