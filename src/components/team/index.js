import React, { useEffect, useState } from "react";
import {
  CardBody,
  CardTitle,
  Container,
  Col,
  Card,
  Row,
  CardImg,
  CardSubtitle,
} from "reactstrap";

export default function Team(props) {
  console.log(props.profiles);
  return <ProfileList profiles={props.profiles} />;
}

// Takes in a profile and creates a profile card
function ProfileCard(props) {
  return (
    <Col style={{ flex: 1 }}>
      <Card>
        <CardImg
          top
          width="100%"
          src={"../../public/images/profile_pics/" + props.profile.profile_img}
          alt={props.profile.name + " profile picture"}
        />
        <CardBody>
          <CardTitle tag="h2">{props.profile.name}</CardTitle>
          <CardSubtitle tag="p">{props.profile.position}</CardSubtitle>
          {/* <CardText>{props.profile.bio}</CardText> */}
        </CardBody>
      </Card>
    </Col>
  );
}

// Creates a container of all the profile cards
function ProfileList(props) {
  let profiles = props.profiles;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let cardsHolder = [];
    for (let member of Object.keys(profiles)) {
      cardsHolder.push(<ProfileCard key={member} profile={profiles[member]} />);
    }
    setCards(cardsHolder);
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Row style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {cards}
      </Row>
    </Container>
  );
}
