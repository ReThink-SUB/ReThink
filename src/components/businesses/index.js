import React, {useEffect, useState} from 'react';
import {
    CardBody,
    CardTitle,
    Container,
    Col,
    Card,
    Row,
    CardImg,
    CardSubtitle,
    CardText
} from "reactstrap";
import "./styles/businesses.css";

const dummy = {
    "card1": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store"
    },
    "card2": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store"
    },
    "card3": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store"
    },
    "card4": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store"
    },
    "card5": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store"
    }
}
export default function Businesses() {
    return (
        <div className="businesses-container">
            <div className="business-background"></div>
            <BusinessCardSearchList businesses={dummy} />
        </div>
    )
}

// Takes in a business and creates a business card
function BusinessCard(props) {
    let business = props.business;
    return(
        <Col style={{flex: 1}}>
            <Card>
                <CardImg
                    src={business["img"]}
                    alt={business["title"] + " image"}
                />
                <CardBody>
                    <CardTitle tag="h2">{business["title"]}</CardTitle>
                    <CardSubtitle tag="p">{business["category"]}</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    )
}

// Creates a container of all the business cards
function BusinessCardSearchList(props) {
    let data = props.businesses;
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        let businessesHolder = [];
        for (let b of Object.keys(data)) {
            businessesHolder.push(<BusinessCard key={b} business={data[b]} />);
        }
        setBusinesses(businessesHolder);
      }, []);

    return(
        <Container className="businesses-container">
            <Row style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {businesses}
            </Row>
      </Container>
    )
}

// export default function SearchBar(props) {
//     // TODO: add code
// }

// export default function FilterButtons(props) {
//     // TODO: add code
// }