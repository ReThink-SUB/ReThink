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
    CardText,
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem,
    Pagination,
    PaginationItem,
    PaginationLink
} from "reactstrap";
import "./styles/businesses.css";
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import { db } from "../../firebase";

function Businesses() {
    let filterHeaders = ["Category", "Price", "Eco Badge", "Zip Code"]; //"Featured" commented out for now
    let filterOptions = [
        ["Home Goods", "Restaurants", "Cafes", "Grocery Stores", "Personal Care", "Beauty"],
        ["$", "$$", "$$$", "$$$$", "$$$$$"],
        ["Sustainable Ingredients", "Resource Management", "Waste Management", "Beyond the Business"],
        ["Greater Seattle Area", "Portland", "Remote"]
    ]; 
    let filters = [];
    let iterator = 0;
    for (let i of filterHeaders) {
        filters.push(<FilterButton filter={i} options={filterOptions[iterator]}/>)
        iterator++;
    }

    return (
        <div>
            <SearchBar />
            <div className="filters-container">
                {filters}
            </div>
            <BusinessCardSearchList />
            {/* <Next /> */}
        </div>
    )
}

export default Businesses;

// Takes in a business and creates a business card
function BusinessCard(props) {
    let business = props.business;
    return(
        <div className="card-container">
            <div className="business-background"></div>
            <img src="/images/CirclePattern.png" alt="Circle pattern" className="circle-pattern-img"/>
            <Link to="/details" className="business-card">
                <Card className="business-card">
                    <CardImg
                        // src={business["img"]}
                        src="/images/BallardMarket.png" //TODO: should come from firestore
                        alt={business["name"] + " image"}
                        className="business-card-img"
                    />
                    <CardBody className="business-card-body">
                        <CardTitle tag="h2" className="business-card-title">{business["name"]}</CardTitle>
                        <CardSubtitle tag="p" className="business-card-subtitle">
                            {business["category"] + " " + "$$" + " " /*TODO: replace "$$" with business["price"]*/}
                            <img src="/images/lightning.png"/> {/*TODO: should come from json */}
                            <img src="/images/fish.png"/>
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </Link>
        </div>
    )
}

// Creates a container of all the business cards
function BusinessCardSearchList() {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        // read data in from firestore
        // https://firebase.google.com/docs/firestore/query-data/get-data

        let businessesHolder = [];
        db.collection('businesses').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                businessesHolder.push(<BusinessCard key={doc.data()} business={doc.data()} />);
            });
            setBusinesses(businessesHolder);
        });
      }, []);

    return(
        <Container className="businesses-container">
            {/* <Col className="businesses-col"> */}
                {/* <Row className="businesses-row"> */}
                    {businesses}
                {/* </Row> */}
            {/* </Col> */}
        </Container>
    )
}

// TODO: add filtering
// https://medium.com/@reneecruz/search-bar-in-react-js-in-six-simple-steps-4849118b2134
function SearchBar(props) {
    return (
        <div className="search-bar-container">
            <div className="search-bar-header">
                <h6>Businesses in</h6>
                <h1>Seattle</h1>
            </div>
            <div className="search-bar-and-btn">
                <input className="search-bar" type="text" value={props.inputValue} onChange={props.businessFilterOnChange} placeholder="Search..."/>
                <button className="search-bar-btn">Go</button>
            </div>
        </div>
    );
}

// https://reactstrap.github.io/components/dropdowns/
function FilterButton(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    let filterOptions = [];
    for (let i of props.options) {
        filterOptions.push(<DropdownItem>{i}</DropdownItem>)
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                <span className="dropdown-toggle-text">
                    {props.filter}
                </span>
            </DropdownToggle>
            <DropdownMenu>
                {filterOptions}
            </DropdownMenu>
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