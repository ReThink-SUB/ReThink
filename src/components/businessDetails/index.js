import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "./styles/businessDetails.css";

export default function Details(props) {
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
      <h1>{props.name}</h1>
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
          src={process.env.PUBLIC_URL + "/images/frankie.png"}
          alt="business image"
        />
        <div>
          <p>
            <strong>Today's Hours: </strong>
            {props.hours}
          </p>
          <p>
            <strong>Phone: </strong>
            {props.phone}
          </p>
          <p>
            <strong>Address: </strong>
            {props.address}
          </p>
          <br></br>
          {props.desc}
          <div className="social-buttons">
            <button className="mr-5">
              <strong>View on Google Maps</strong>{" "}
              <img
                className="ml-2"
                src={process.env.PUBLIC_URL + "/images/gmaps.png"}
              ></img>
            </button>
            <button>
              <img src={process.env.PUBLIC_URL + "/images/insta.png"}></img>
            </button>
            <button>
              <img src={process.env.PUBLIC_URL + "/images/fb.png"}></img>
            </button>
          </div>
          <p>
            <strong>Hours:</strong>
          </p>
          <p>
            Tuesday: 1–9PM <br />
            Wednesday: 1–9PM <br />
            Thursday: 1–9PM <br />
            Friday: 1–9PM <br />
            Saturday: 1–9PM <br />
            Sunday: 1–9PM <br />
            Monday: 1–9PM <br />
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
        src="/images/CirclePattern.png"
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
