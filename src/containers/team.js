import React from "react";
import Team from "../components/team/index";
import "../components/team/styles/team.css";

export function TeamContainer(props) {
    return (
        <div>
            <h1 className="title">SUB Team</h1>
            <p className="title-desc">A ragtag team of UW students deciding to give a damn about the environment, in the most enjoyable way possible.</p>
            <Team profiles={props.profiles}/>
        </div>
    )
}