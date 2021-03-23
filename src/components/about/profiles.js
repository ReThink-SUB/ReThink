import React, { useEffect, useState } from 'react';

// Takes in a profile and creates a profile card
function ProfileCard(props) {
    let fname = props.firstname;
    let lname = props.lastname;
    let desc = props.description;
    return(
        <div></div>
    )
}

// Creates a container of all the profile cards
function ProfileList(props) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // TODO:
        // get card objects from firebase
        // set the cards in the state variable to render
    });

    return(
        <div>

        </div>
    )
}

export default ProfileList;