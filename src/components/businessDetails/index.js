import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./styles/businessDetails.css";


// TODO: to pull data, use the url params to get the name and use that name for pulling the data
export default function Details(props) {
  let details = props; // details data from props
  console.log(props.data)
  let date = new Date();
  let currentDay = date.getDay(); // get the current day so we can get the correct hours

  let impactKeys = Array.from(props.cards.keys());
  let impact = props.cards;
  let cardNum = 0;
  let cards = impactKeys.map((key) => {
    cardNum++;
    return (
      <ImpactCard key={key} name={key} desc={impact.get(key)} num={cardNum} />
    );
  });
  return (
    <div className="content">
      <h1>{details.name}</h1>
      {/* <div className="d-flex flex-row align-items-center"> */}
      {/* <Breadcrumb>
          <BreadcrumbItem><a href="#">Food</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Dessert</a></BreadcrumbItem>
          <BreadcrumbItem active>Ice Cream</BreadcrumbItem>
        </Breadcrumb> */}
      {/* <p className="eco">Eco-rating:</p> */}
      {/* <img src={process.env.PUBLIC_URL + "/images/eco.png"} alt="rating"/> */}
      {/* </div> */}
      <div className="main-details">
        <img
          className="main-img"
          src="/images/frankie.png"
          alt="business image"
        />
        <div>
          <p>
            <strong>Today's Hours: </strong>
            {details.hours[currentDay]}
          </p>
          <p>
            <strong>Phone: </strong>
            {details.phone}
          </p>
          <p>
            <strong>Address: </strong>
            {details.address}
          </p>
          <br></br>
          {details.profile}
          <div className="social-buttons">
            <button className="mr-5">
              <strong>View on Google Maps</strong>{" "}
              <img
                className="ml-2"
                src="/images/gmaps.png"
              ></img>
            </button>
            <button>
              <img src="/images/insta.png"></img>
            </button>
            <button>
              <img src="/images/fb.png"></img>
            </button>
          </div>
          <p>
            <strong>Hours:</strong>
          </p>
          <p>
            Tuesday: {details.hours.tue} <br />
            Wednesday: {details.hours.wed} <br />
            Thursday: {details.hours.thu} <br />
            Friday: {details.hours.fri} <br />
            Saturday: {details.hours.sat} <br />
            Sunday: {details.hours.sun} <br />
            Monday: {details.hours.mon} <br />
          </p>
        </div>
      </div>
      <h2>
        Sustainability Impact <div className="bar"></div>
      </h2>
      <div className="sustainability-cards">{cards}</div>
    </div>
  );
}

function ImpactCard(props) {
  return (
    <div className="specific-card">
      <img
        src={process.env.PUBLIC_URL + "/images/CirclePattern.png"}
        alt="Circle pattern"
        className="circle-pattern-img"
      />
      <div className="specific-card-header">
        <p>
          <em>0{props.num}</em>
        </p>
        <p>
          <strong>{props.name}</strong>
        </p>
      </div>
      <p>{props.desc}</p>
      <a href="#">See the checklist</a>
    </div>
  );
}
