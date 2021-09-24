import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { db } from "../../firebase";
import "./styles/businessDetails.css";
import { useParams } from "react-router-dom";

// TODO: to pull data, use the url params to get the name and use that name for pulling the data
export default function Details(props) {
  let date = new Date();
  let weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let weekdayFull = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let currentDay = date.getDay(); // get the current day so we can get the correct hours
  currentDay = weekday[currentDay];

  let impactKeys = Array.from(props.cards.keys());
  let impact = props.cards;
  let cardNum = 0;
  let cards = impactKeys.map((key) => {
    cardNum++;
    return (
      <ImpactCard key={key} name={key} desc={impact.get(key)} num={cardNum} />
    );
  });

  // state to hold business details of current business being looked at
  const [businessDetails, setBusinessDetails] = useState([]);
  const [hours, setHours] = useState({});
  const urlParams = useParams();

  useEffect(() => {
    getBusinessDetails();
  }, []);

  // pull business data from firestore
  const getBusinessDetails = async () => {
    const details = (await db.collection('businesses').doc(urlParams.business).get()).data();
    if (!details) {
      console.log('No such business document!');
    } else {
      console.log('Business data:', details);
      setBusinessDetails(details);
      setHours(details.hours);
    }
  }

  let hourReturn = Object.keys(hours).map((i) => {
    return <p>{weekdayFull[i] + ": " + business.hours[i]}</p>;
  });

  console.log(businessDetails.hours)

  return (
    <div className="content">
      <h1>{businessDetails.name}</h1>
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
          {/* <p>
            <strong>Today's Hours: </strong>
            {businessDetails.hours[currentDay]}
          </p> */}
          <p>
            <strong>Phone: </strong>
            {businessDetails.phone}
          </p>
          <p>
            <strong>Address: </strong>
            {businessDetails.address}
          </p>
          <br></br>
          {businessDetails.profile}
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
          {/* <p>
            Tuesday: {businessDetails.hours.tue} <br />
            Wednesday: {businessDetails.hours.wed} <br />
            Thursday: {businessDetails.hours.thu} <br />
            Friday: {businessDetails.hours.fri} <br />
            Saturday: {businessDetails.hours.sat} <br />
            Sunday: {businessDetails.hours.sun} <br />
            Monday: {businessDetails.hours.mon} <br />
          </p> */}
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
