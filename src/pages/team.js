import React from "react";
import { TeamContainer, NavbarContainer } from "../containers";

export default function Team(props) {
  return (
    <>
      <NavbarContainer />
      <TeamContainer profiles={props.profiles} />
    </>
  );
}
