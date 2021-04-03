 import React from 'react';
 import TeamContainer from "../containers/team";

 export default function Team(props) {
     return (
         <>
            <TeamContainer profiles={props.profiles}/>
         </>
     )
 }