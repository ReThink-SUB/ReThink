import React from 'react';

// Takes in a business and creates a business card
function BusinessCard(props) {
    // TODO: set prop variables

}

export default BusinessCard;

// Creates a container of all the business cards
function BusinessCardSearchList(props) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // TODO:
        // get card objects from firebase
        // set the cards in the state variable to render
    });

    return(
        <Container>
            <Row style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>{cards}</Row>
        </Container>
    )
}

export default BusinessCardSearchList;