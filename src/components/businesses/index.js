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

const dummy = {
    "card1": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card2": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card3": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card4": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card5": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card6": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card7": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card8": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card9": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card10": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card11": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card12": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card13": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card14": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card15": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card16": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card17": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card18": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card19": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    },
    "card20": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store",
        "price": "$$"
    }
}
export default function Businesses() {
    let filterHeaders = ["Category", "Price", "Eco Badge", "Featured", "Zip Code"];
    let filterOptions = ["Option1", "Option2", "Option3"]; //will be props most likely
    let filters = [];
    for (let i of filterHeaders) {
        filters.push(<FilterButton filter={i} options={filterOptions}/>)
    }
    return (
        <div>
            <SearchBar />
            <div className="filters-container">
                {filters}
            </div>
            <BusinessCardSearchList businesses={dummy} />
            <Next />
        </div>
    )
}

// Takes in a business and creates a business card
function BusinessCard(props) {
    let business = props.business;
    return(
        <div className="card-container">
            <div className="business-background"></div>
            <img src="/images/CirclePattern.png" alt="Circle pattern" className="circle-pattern-img"/>
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
            <Col className="businesses-col">
                <Row className="businesses-row">
                    {businesses}
                </Row>
            </Col>
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
                {props.filter}
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