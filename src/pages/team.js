import React from "react";
import { TeamContainer, NavbarContainer } from "../containers";
import Footer from "../components/footer/index";

export default function Team(props) {
  return (
    <>
      <NavbarContainer />
      <TeamContainer profiles={props.profiles} />
      <Footer />
    </>
  );
}
