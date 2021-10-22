import React, { useEffect, useState } from "react";
import {
  CardBody,
  CardTitle,
  Container,
  Card,
  CardSubtitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import "./styles/businesses.css";
import "whatwg-fetch";
import { db, storage } from "../../firebase";
import { Redirect } from "react-router-dom";

function Businesses() {
  let filterHeaders = ["Category", "Price", "Eco Badge", "Zip Code"]; //"Featured" commented out for now
  let filterOptions = [
    [
      "Home Goods",
      "Restaurants",
      "Cafes",
      "Grocery Stores",
      "Personal Care",
      "Beauty",
    ],
    ["$", "$$", "$$$", "$$$$", "$$$$$"],
    [
      "Sustainable Ingredients",
      "Resource Management",
      "Waste Management",
      "Beyond the Business",
    ],
    ["Greater Seattle Area", "Portland", "Remote"],
  ];
  let filters = [];
  let iterator = 0;
  for (let i of filterHeaders) {
    filters.push(<FilterButton filter={i} options={filterOptions[iterator]} />);
    iterator++;
  }

  // TODO: figure out how to get images using id of business
  // rn, im trying to get the ids of each business and get the logos using those ids in the ref
  // and then when creating the cards in t he business card search list, im assuming the order of businesses will
  // be the same and to just get each logo by index i.e. 0, 1, 2..
  // issue rn is that the promise needs to be fulfilled which means that it needs to run first and then set logos
  // https://stackoverflow.com/questions/64708353/how-to-display-all-the-images-from-firebase-storage-in-react
  const [logos, setLogos] = useState([]);
  const [ids, setIDs] = useState([]);
  useEffect(() => {
    let idHolder = [];
    db.collection("businesses")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          idHolder.push(doc.id);
        });
        setIDs(idHolder);
      });

    fetchLogos(ids);

    console.log(ids);
    console.log(logos); // BUG: rn it's not loading bc it needs to fulfill promise
  }, []);

  const fetchLogos = async (ids) => {
    let urls = [];
    for (let id of ids) {
      await storage
        .ref("/img")
        .child(`/businesses/${id}/logo.png`)
        .getDownloadURL()
        .then((url) => {
          urls.push(url);
        });
    }
    console.log(urls);
    setLogos(urls);
  };

  // gets the query for the search feature of the business cards
  const [query, setQuery] = useState("");
  const handleCallback = (childData) => {
    setQuery(childData);
  };

  return (
    <div>
      <SearchBar parentCallback={handleCallback} />
      <div className="filters-container">{filters}</div>
      <BusinessCardSearchList logos={logos} query={query} />
      {/* <Next /> */}
    </div>
  );
}

export default Businesses;

// Takes in a business and creates a business card
function BusinessCard(props) {
  let business = props.business;
  const [redirectTo, setRedirectTo] = useState(undefined);
  const [imgURL, setURL] = useState("");
  useEffect(() => {
    var xxx = storage.ref("img/businesses/" + props.id + "/logo.png");
    xxx.getDownloadURL().then(function (url) {
      setURL(url);
      console.log(url);
    });
  }, []);

  const handleClick = () => {
    setRedirectTo(props.id);
  };

  if (redirectTo) {
    return <Redirect push to={"/details/" + redirectTo} />;
  }

  // BUG: rn it's undefined
  console.log(props.logosrc);

  return (
    <div className="card-container">
      <div className="business-background"></div>
      <img
        src="/images/CirclePattern.png"
        alt="Circle pattern"
        className="circle-pattern-img"
      />
      <Card className="business-card" onClick={handleClick}>
        <img
          src={imgURL}
          // src="/images/BallardMarket.png" //TODO: should come from firestore (props.logosrc) // need to style image to be a circle
          alt={business.name + " image"}
          className="business-card-img"
        />
        <CardBody className="business-card-body">
          <CardTitle tag="h2" className="business-card-title">
            {business.name}
          </CardTitle>
          <CardSubtitle tag="p" className="business-card-subtitle">
            {
              business.category +
                " " +
                "$$" +
                " " /*TODO: replace "$$" with business["price"]*/
            }
            <img src="/images/lightning.png" />{" "}
            {/*TODO: should come from json */}
            <img src="/images/fish.png" />
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}

// Creates a container of all the business cards
function BusinessCardSearchList(props) {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    // read data in from firestore
    // https://firebase.google.com/docs/firestore/query-data/get-data

    let businessesHolder = [];
    let counter = -1;
    db.collection("businesses")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          counter++;
          let data = doc.data();
          businessesHolder.push(
            <BusinessCard
              key={data}
              business={data}
              logosrc={props.logos[counter]}
              id={doc.id}
            />
          );
        });
        setBusinesses(businessesHolder);
      });
  }, []);

  // filters the business cards based on name
  // TODO: add search filter for bio - rn it breaks b/c some businesses don't have bios ->
  // -> just add `data.name.toLowerCase().includes(props.query.toLowerCase())` to the if statement
  let filteredBusinesses = [];
  for (let business of businesses) {
    let data = business.props.business;
    if (data.name.toLowerCase().includes(props.query.toLowerCase())) {
      filteredBusinesses.push(business);
    }
  }
  console.log(filteredBusinesses);

  return (
    <Container className="businesses-container">
      {/* <Col className="businesses-col"> */}
      {/* <Row className="businesses-row"> */}
      {filteredBusinesses}
      {/* </Row> */}
      {/* </Col> */}
    </Container>
  );
}

// Search bar component for the business card list
// References:
// https://medium.com/@reneecruz/search-bar-in-react-js-in-six-simple-steps-4849118b2134
// https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
// https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/
// https://stackoverflow.com/questions/38443227/how-to-get-input-text-value-on-click-in-reactjs
function SearchBar(props) {
  const [query, setQuery] = useState("");

  // sends the query to the parent component and to the business cards list to be filtered
  const filterBusinesses = () => {
    console.log("searched ", query);
    props.parentCallback(query);
  };

  // keeps track of the search bar input value
  const handleChange = (e) => {
    // e.preventDefault();
    console.log("change ", e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-header">
        <h6>Businesses in</h6>
        <h1>Seattle</h1>
      </div>
      <div className="search-bar-and-btn">
        <input
          className="search-bar"
          type="text"
          onChange={handleChange}
          placeholder="Search..."
        />
        <button className="search-bar-btn" onClick={filterBusinesses}>
          Go
        </button>
      </div>
    </div>
  );
}

// TODO: add filtering for dropdowns - need filter information in firebase data in order to filter
// https://reactstrap.github.io/components/dropdowns/
function FilterButton(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  let filterOptions = [];
  for (let i of props.options) {
    filterOptions.push(<DropdownItem>{i}</DropdownItem>);
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        <span className="dropdown-toggle-text">{props.filter}</span>
      </DropdownToggle>
      <DropdownMenu>{filterOptions}</DropdownMenu>
    </Dropdown>
  );
}

// TODO: make pagination dynamic
// TODO: add fill for current page
// https://codepen.io/PiotrBerebecki/pen/pEYPbY
// https://stackoverflow.com/questions/40232847/how-to-implement-pagination-in-reactjs
// https://reactstrap.github.io/components/pagination/#
function Next() {
  return (
    <div className="businesses-pagination-container">
      <Pagination aria-label="Page navigation">
        {/* <PaginationItem className="business-page-item">
                    <PaginationLink first href="#" className="business-page-link" />
                </PaginationItem> */}
        <PaginationItem className="business-page-item">
          <PaginationLink previous href="#" className="business-page-link" />
        </PaginationItem>
        <PaginationItem className="business-page-item">
          <PaginationLink href="#" className="business-page-link">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="business-page-item">
          <PaginationLink href="#" className="business-page-link">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="business-page-item">
          <PaginationLink href="#" className="business-page-link">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="business-page-item">
          <PaginationLink href="#" className="business-page-link">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="business-page-item">
          <PaginationLink href="#" className="business-page-link">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="business-page-item">
          <PaginationLink next href="#" className="business-page-link" />
        </PaginationItem>
        {/* <PaginationItem className="business-page-item">
                    <PaginationLink last href="#" className="business-page-link" />
                </PaginationItem> */}
      </Pagination>
    </div>
  );
}
