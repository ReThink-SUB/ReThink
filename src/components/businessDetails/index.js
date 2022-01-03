import { useEffect, useState, useRef } from "react";
// import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { db, storage } from "../../firebase";
import "./styles/businessDetails.css";
import { useParams } from "react-router-dom";

// TODO: to pull data, use the url params to get the name and use that name for pulling the data
export default function Details(props) {
  // create weekday map and map abbreviations to full name
  let weekdayMap = new Map();
  let weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let weekdayFull = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  for (let i = 0; i < weekday.length; i++) {
    weekdayMap.set(weekday[i], weekdayFull[i]);
  }

  // get the current day for today's hours
  let date = new Date();
  let currentDay = date.getDay(); // get the current day so we can get the correct hours
  currentDay = weekday[currentDay];

  // state to hold business details of current business being looked at
  const [businessDetails, setBusinessDetails] = useState([]);
  const [hours, setHours] = useState({});
  const urlParams = useParams();
  const [imgArr, setURL] = useState([]);

  useEffect(() => {
    // sorter for hours
    const sorter = {
      sun: 0,
      mon: 1,
      tue: 2,
      wed: 3,
      thu: 4,
      fri: 5,
      sat: 6,
    };

    // pull business data from firestore
    const getBusinessDetails = async () => {
      const details = (
        await db.collection("businesses").doc(urlParams.business).get()
      ).data();
      if (!details) {
        console.log("No such business document!");
      } else {
        console.log("Business data:", details);
        setBusinessDetails(details);

        // order the hours properly
        let h = details.hours;
        let tmp = [];
        Object.keys(h).forEach(function (key) {
          let value = h[key];
          let index = sorter[key.toLowerCase()];
          tmp[index] = {
            key: key,
            value: value,
          };
        });

        let orderedData = {};
        tmp.forEach(function (obj) {
          orderedData[obj.key] = obj.value;
        });
        setHours(orderedData);
      }
      return details;
    };

    getBusinessDetails();

    async function getImgURL() {
      for (let i = 1; i < 4; i++) {
        const imgRef = await storage.ref(
          "img/businesses/" + urlParams.business + "/" + i + ".png"
        );
        imgRef.getDownloadURL().then(function (url) {
          setURL((prev) => [...prev, url]);
        });

        const jpgRef = await storage.ref(
          "img/businesses/" + urlParams.business + "/" + i + ".png"
        );
        jpgRef.getDownloadURL().then(function (url) {
          setURL((prev) => [...prev, url]);
        });
      }
    }

    getImgURL();
  }, [urlParams.business]);

  let num = [1, 2, 3];
  let cards = num.map((key) => {
    return (
      <ImpactCard
        key={key}
        name={businessDetails["impact" + key + "_title"]}
        desc={businessDetails["impact" + key + "_text"]}
        num={key}
      />
    );
  });

  // map days to hours
  let hourReturn = Object.keys(hours).map((day) => {
    return <p key={day}>{weekdayMap.get(day) + ": " + hours[day]}</p>;
  });

  const ref = useRef([]);
  const [first, setFirst] = useState("details-img-modal hidden");
  const [second, setSecond] = useState("details-img-modal hidden");
  const [third, setThird] = useState("details-img-modal hidden");
  const [bg, setBg] = useState("details-img-modals hidden");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setBg("details-img-modals");
    }

    const checkIfClickedOutside = (e) => {
      if (
        open &&
        ref.current &&
        !ref.current[0].contains(e.target) &&
        !ref.current[1].contains(e.target) &&
        !ref.current[2].contains(e.target)
      ) {
        setOpen(false);
        console.log("hi");

        if (!first.includes("hidden")) {
          setFirst(first + " hidden");
        } else if (!second.includes("hidden")) {
          setSecond(second + " hidden");
        } else if (!third.includes("hidden")) {
          setThird(third + " hidden");
        }

        setBg(bg + " hidden");
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    console.log(first);
    console.log(second);
    console.log(third);
  }, [first, second, third, open, bg]);

  return (
    <div className="content">
      <h1>{businessDetails.name}</h1>
      {/* <Breadcrumb>
          <BreadcrumbItem><a href="#">Food</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Dessert</a></BreadcrumbItem>
          <BreadcrumbItem active>Ice Cream</BreadcrumbItem>
        </Breadcrumb> */}
      <div className="main-details">
        <span className="images">
          <img
            className="main-img"
            onClick={() => {
              setFirst("details-img-modal");
              setOpen(true);
            }}
            src={imgArr[0]}
            alt="business 1"
          />
          <img
            className="temp-img"
            onClick={() => {
              setSecond("details-img-modal");
              setOpen(true);
            }}
            src={imgArr[1]}
            alt="business 2"
          />
          <img
            className="temp-img"
            onClick={() => {
              setThird("details-img-modal");
              setOpen(true);
            }}
            src={imgArr[2]}
            alt="business 3"
          />
        </span>

        <div className={bg}>
          <img
            className={first}
            ref={(i) => {
              ref.current.push(i);
            }}
            src={imgArr[0]}
            alt="business 1"
          />
          <img
            className={second}
            ref={(i) => {
              ref.current.push(i);
            }}
            src={imgArr[1]}
            alt="business 2"
          />
          <img
            className={third}
            ref={(i) => {
              ref.current.push(i);
            }}
            src={imgArr[2]}
            alt="business 3"
          />
        </div>

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
                alt="google maps logo"
              ></img>
            </button>
            <button>
              <img src="/images/insta.png" alt="instagram logo"></img>
            </button>
            <button>
              <img src="/images/fb.png" alt="facebook logo"></img>
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
      <a href="/criteria">See the checklist</a>
    </div>
  );
}
