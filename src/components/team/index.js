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
  CardText
} from "reactstrap";
import "./styles/team.css";

export default function Team(props) {
  return <ProfileList profiles={props.profiles} />;
}

// Takes in a profile and creates a profile card
function ProfileCard(props) {
  return (
    <Col style={{ flex: 1 }}>
      <Card style={{ borderColor: "white" }}>
        <div className="card-img-container">
          <div className="img-container">
            <CardImg
              src={`/images/profile_pics/${props.profile.profile_img}`}
              alt={props.profile.name + " profile picture"}
            />
          </div>
          <CardTitle tag="h3">{props.profile.name + " " + props.profile.pronouns}</CardTitle>
          <CardSubtitle tag="p">{props.profile.position}</CardSubtitle>
          {/* <div className="dots-container">
            <svg className="dots" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="55" height="40" fill="none" viewBox="0 0 55 40">
              <path fill="url(#pattern0)" d="M0 0H54.506V39.638H0z"></path>
              <defs>
                <pattern id="pattern0" width="1" height="1" patternContentUnits="objectBoundingBox">
                  <use transform="matrix(.00774 0 0 .01064 -2.216 0)" xlinkHref="#image0"></use>
                </pattern>
                <image id="image0" width="702" height="94" xlinkHref="data:image/png;base64,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1RG8ao24zSs2qiN41Rpx++q9Vrt0HFumIuSV4rrhxWvc+JZayGnE0eorNqojeNUacZtXbFRH8Ko14jav2KiOuHqv1b4sXKut0JZXDpEXr+PG149NU1d8y9zJVU8cbT7GRnUEr1ojbvOKjeoIXrVG3L56r9VuDxFbpiLkleK64cXrdePr9oKjxZLnMndy1RNHm4+xUR3Bq9aI27xiozqCV60Rt/8Jr0tu7Lz52f+IGc+LkFfOjRcv8zH3Qy1evKJVw7oaCZ2O8zr1iF7xioROx1fzKv8LuO2u/73k6kgdU95T3nua1nqv5JWz5MXLfFy+kbN+Lbcq6z4vXktWWOehJUqvMbxeLZa0VvV6GIbbzOa3xJb3LEn0khh55fR48coJ5KLVF6+cQC5affHKCeSi1RevdwKHnXTXP9VXdVvt8vFgiX13gA/qkFcOlhevnEAuWn3xygnkotUXr5xALlp98WoKlC82l1/1lVtalPu5lUdpH/o+4IcgzSQanfJqoMx08ZrBaQzxaqDMdPGawWkM8WqgzHTxmsFpDPFqoMx08ZrBaQzxaqDoIkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ+FwCm274er8fvm27ftju+j+HR9cPpa+M/VfZyisnz4tXTiAXrb545QRy0eqLV04gF62+eB0E7obhy7bbP97v+pe5R4kpsTm286PllbPjxSsnkItWX7xyArlo9cUrJ5CLVl+8jgIPw3B7v+uf5za8b8aey3uOB/ighrxysLx45QRy0eqLV04gF62+eOUEctHqi9dRoPwFlNz0jleEn8t7jwdauSGvHCgvXubj/KdVb/9458UrWjWsq5HQ6TivU4/oFa9I6HR8Na9t1z+9OSGMG9vwebvb352mtd4reeUsL/Lq9o+5f2159FXmpe7DtaFeU6wTqQ3mS/k62fIZlou8aD5+1rrnZT4G0+Ciuldfufr67F6HL3gH3+mtT2CtdjlGUHPpYXnlyHjxGuem+ZjbZPLiNbV6WFenZNr9vNouU728pmTa/at5bbr99/GEee5zOUY7zfN75ZWz48VrnL/mY3YjZ/0aa2fJs/pSX1OrrfPQlEy7n1fbZap3Na/Nvv+1ZLGbiynHmEr03H555eR48RrnqPmY3JhYv1IfY6ov9TW12joPTcm0+3m1XaZ6V/Padvu/4wnz3Odyn9+pRM/tl1dOjhevcf6aj7mNCS9eU6uHdXVKpt3Pq+0y1ctrSqbdv5rXKgfq9n/baZ7fK6+cHS9ex42v+Zi6glnmTq564mjzMTaqI3jVGnGbV2xUR/CqNeL21Xutduk4tkxFyCvFdcOL17jxLbWQ04ij1VdsVEfwqjXiNq/YqI7gVWvEbV6xUR1x9V6rfVm4VluhLa8cIi9ex42vH5umrviWuZOrnjjafIyN6ghetUbc5hUb1RG8ao24ffVeq90eIrZMRcgrxXXDi9frxtftBUeLJc9l7uSqJ442H2OjOoJXrRG3ecVGdQSvWiNu/xNel9zYefOz/xEznhchr5wbL17mY+6HWrx4RauGdTUSOh3ndeoRveIVCZ2Or+ZV/hdw213/e8nVkTqmvKe89zSt9V7JK2fJi5f5uHwjZ/1ablXWfV68lqywzkNLlF5jeL1aLGmt6vUwDLeZzW+JLe9ZkuglMfLK6fHilRPIRasvXjmBXLT64pUTyEWrL17vBA476a5/qq/qttrl48ES++4AH9QhrxwsL145gVy0+uKVE8hFqy9eOYFctPri1RQoX2wuv+ort7Qo93Mrj9I+9H3AD0GaSTQ65dVAmeniNYPTGOLVQJnp4jWD0xji1UCZ6eI1g9MY4tVAmeniNYPTGLomr/8BA1eB5fZC6/0AAAAASUVORK5CYII="></image>
              </defs>
            </svg>
          </div> */}
        </div>
        <CardBody>
          <CardText>{props.profile.bio}</CardText>
          <svg className="email-logo" width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6429 0H1.35714C0.997206 0 0.652012 0.158035 0.397498 0.43934C0.142984 0.720644 0 1.10218 0 1.5V13.5C0 13.8978 0.142984 14.2794 0.397498 14.5607C0.652012 14.842 0.997206 15 1.35714 15H17.6429C18.0028 15 18.348 14.842 18.6025 14.5607C18.857 14.2794 19 13.8978 19 13.5V1.5C19 1.10218 18.857 0.720644 18.6025 0.43934C18.348 0.158035 18.0028 0 17.6429 0ZM16.15 1.5L9.5 6.585L2.85 1.5H16.15ZM1.35714 13.5V2.1825L9.11321 8.115C9.2268 8.2021 9.36175 8.24877 9.5 8.24877C9.63825 8.24877 9.7732 8.2021 9.88679 8.115L17.6429 2.1825V13.5H1.35714Z" fill="#6A6565"/>
          </svg>
          <svg className="linkedin-logo" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5566 0.1875H1.44336C0.75 0.1875 0.1875 0.75 0.1875 1.44336V14.5566C0.1875 15.25 0.75 15.8125 1.44336 15.8125H14.5566C15.25 15.8125 15.8125 15.25 15.8125 14.5566V1.44336C15.8125 0.75 15.25 0.1875 14.5566 0.1875ZM14.5566 14.5625C5.81055 14.5605 1.4375 14.5586 1.4375 14.5566C1.43945 5.81055 1.44141 1.4375 1.44336 1.4375C10.1895 1.43945 14.5625 1.44141 14.5625 1.44336C14.5605 10.1895 14.5586 14.5625 14.5566 14.5625ZM2.50391 6.04492H4.82227V13.502H2.50391V6.04492ZM3.66406 5.02539C4.4043 5.02539 5.00781 4.42383 5.00781 3.68164C5.00781 3.50518 4.97306 3.33044 4.90553 3.16741C4.838 3.00438 4.73902 2.85624 4.61424 2.73147C4.48946 2.60669 4.34132 2.50771 4.17829 2.44018C4.01526 2.37265 3.84053 2.33789 3.66406 2.33789C3.4876 2.33789 3.31286 2.37265 3.14983 2.44018C2.9868 2.50771 2.83867 2.60669 2.71389 2.73147C2.58911 2.85624 2.49013 3.00438 2.4226 3.16741C2.35507 3.33044 2.32031 3.50518 2.32031 3.68164C2.31836 4.42383 2.91992 5.02539 3.66406 5.02539ZM8.5918 9.8125C8.5918 8.83984 8.77734 7.89844 9.98242 7.89844C11.1699 7.89844 11.1875 9.00977 11.1875 9.875V13.502H13.5039V9.41211C13.5039 7.4043 13.0703 5.85938 10.7246 5.85938C9.59766 5.85938 8.8418 6.47852 8.53125 7.06445H8.5V6.04492H6.27539V13.502H8.5918V9.8125Z" fill="#6A6565"/>
          </svg>
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
    <Container className="cards-container">
      <Row style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {cards}
      </Row>
    </Container>
  );
}
