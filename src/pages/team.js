import React from "react";
import { TeamContainer, HeaderContainer } from "../containers";

export default function Team(props) {
  return (
    <>
      <HeaderContainer />
      <TeamContainer profiles={props.profiles} />
    </>
  );
}
