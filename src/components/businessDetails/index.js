import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import "./styles/styles.css";

export default function Details(props) {
  return (
    <div className="content">
      <h1>{props.name}</h1>
      <div className="d-flex flex-row align-items-center">
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Food</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Dessert</a></BreadcrumbItem>
          <BreadcrumbItem active>Ice Cream</BreadcrumbItem>
        </Breadcrumb>
        <p className="eco">Eco-rating:</p>
        <img src={process.env.PUBLIC_URL + "/images/eco.png"} alt="rating"/>
      </div>
      <div className="d-flex flex-row main-details">
        <img className="main-img" src={process.env.PUBLIC_URL + "/images/frankie.png"} alt="business image"/>
        <div>
          <p><strong>Today's Hours: </strong>{props.hours}</p>
          <p><strong>Phone: </strong>{props.phone}</p>
          <p><strong>Address: </strong>{props.address}</p>
          <br></br>
          {props.desc}
          <div className="buttons">
            <button className="mr-5"><strong>View on Google Maps</strong> <img className="ml-2" src={process.env.PUBLIC_URL + "/images/gmaps.png"}></img></button>
            <button><img src={process.env.PUBLIC_URL + "/images/insta.png"}></img></button>
            <button><img src={process.env.PUBLIC_URL + "/images/fb.png"}></img></button>
          </div>
        </div>
      </div>
      <h1>
        Sustainability Impact <div className="bar"></div>
      </h1>
    </div>
  );
}