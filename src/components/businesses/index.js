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
    DropdownItem
} from "reactstrap";
import "./styles/businesses.css";

const dummy = {
    "card1": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store"
    },
    "card2": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store"
    },
    "card3": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store"
    },
    "card4": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store"
    },
    "card5": {
        "img": "/images/BallardMarket.png",
        "title": "Ballad Market",
        "category": "Clothing Store"
    }
    // "card6": {
    //     "img": "/images/BallardMarket.png",
    //     "title": "Ballad Market",
    //     "category": "Clothing Store"
    // }
}
export default function Businesses() {
    let filterHeaders = ["Category", "Price", "Eco Badge", "Featured", "Zip Code"];
    let filterOptions = ["Option1", "Option2", "Option3"];
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
        </div>
    )
}

// Takes in a business and creates a business card
function BusinessCard(props) {
    let business = props.business;
    return(
        <Col style={{flex: 1}}>
            <Card>
                <CardImg
                    src={business["img"]}
                    alt={business["title"] + " image"}
                />
                <CardBody>
                    <CardTitle tag="h2">{business["title"]}</CardTitle>
                    <CardSubtitle tag="p">{business["category"]}</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    )
}

// TODO: wrap the cards + green bar around to make new rows (grid)
// TODO: add the dots on the green bar
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
        <div className="businesses-div-container">
            <div className="business-background"></div>
            <Container className="businesses-container">
                <Row style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {businesses}
                </Row>
        </Container>
      </div>
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

// TODO: implement pagination where this shows up if the business page is full and there are more businesses
function Next() {
    return (
        <div>

        </div>
    );
}