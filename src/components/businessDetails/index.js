import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { db, storage } from "../../firebase";
import "./styles/businessDetails.css";
import { useParams } from "react-router-dom";

// TODO: to pull data, use the url params to get the name and use that name for pulling the data
export default function Details(props) {
  // create weekday map and map abbreviations to full name
  let weekdayMap = new Map();
  let weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let weekdayFull = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  for (let i = 0; i < weekday.length; i++) {
    weekdayMap.set(weekday[i], weekdayFull[i]);
  }

  // sorter for hours
  const sorter = {
    "sun": 0,
    "mon": 1,
    "tue": 2,
    "wed": 3,
    "thu": 4,
    "fri": 5,
    "sat": 6
  }

  // get the current day for today's hours
  let date = new Date();
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

      // order the hours properly
      let h = details.hours;
      let tmp = [];
      Object.keys(h).forEach(function(key) {
        let value = h[key];
        let index = sorter[key.toLowerCase()];
        tmp[index] = {
          key: key,
          value: value
        };
      });

      let orderedData = {};
      tmp.forEach(function(obj) {
        orderedData[obj.key] = obj.value;
      });
      setHours(orderedData);
    }
  }

  // map days to hours
  let hourReturn = Object.keys(hours).map((day) => {
    return <p>{weekdayMap.get(day) + ": " + hours[day]}</p>;
  });

  console.log(hours)

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
          <p>
            <strong>Today's Hours: </strong>
            {hours[currentDay]}
          </p>
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
          {hourReturn}
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
