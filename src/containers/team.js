import React from "react";
import Team from "../components/team/index";

export function TeamContainer(props) {
  return (
    <div>
      <h1>Meet the SUB Team</h1>
      <p>
        A ragtag team of UW students deciding to give a damn about the
        environment, in the most enjoyable way possible.
      </p>
      <Team profiles={props.profiles} />
    </div>
  );
}
