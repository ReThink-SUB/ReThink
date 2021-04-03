import React from "react";
import { TeamContainer } from "../containers";

export default function Team(props) {
  return (
    <>
      <TeamContainer profiles={props.profiles} />
    </>
  );
}
