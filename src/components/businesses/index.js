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
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';

const dummy = {
    "card1": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market1",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card2": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market2",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card3": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market3",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card4": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market4",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card5": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market5",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card6": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market6",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card7": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market7",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card8": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market8",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card9": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market9",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card10": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market10",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card11": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market11",
        "category": "Clothing Store",
        "price": "$$"
    }
}

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

    // // fetch json
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("dummy.json")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setData(data);
    //         })
    // }, []);
    return (
        <div>
            <SearchBar />
            <div className="filters-container">
                {filters}
            </div>
            <BusinessCardSearchList businesses={dummy} />
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
                        src={business["img"]}
                        alt={business["title"] + " image"}
                        className="business-card-img"
                    />
                    <CardBody className="business-card-body">
                        <CardTitle tag="h2" className="business-card-title">{business["title"]}</CardTitle>
                        <CardSubtitle tag="p" className="business-card-subtitle">
                            {business["category"] + " " + business["price"] + " "}
                            <img src="/images/lightning.png"/> {/*//should come from json */}
                            <img src="/images/fish.png"/>
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </Link>
        </div>
    )
}

// TODO: make the green bar shrink and stretch with the cards
// Creates a container of all the business cards
function BusinessCardSearchList(props) {
    let data = props.businesses;
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        let businessesHolder = [];
        for (let b of Object.keys(data)) {
            businessesHolder.push(<BusinessCard key={b} business={data[b]} />);
        }
        setBusinesses(businessesHolder);
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