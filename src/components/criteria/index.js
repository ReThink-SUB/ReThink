import React, {useEffect, useState, useRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./styles/criteria.scss";
import {
  Containerz,
  Side,
  Main,
  CriteriaSec,
  Images,
  Text,
  Title,
  Heading,
  SecDescription,
  Description,
  SubDescription,
  SubSec,
  Card,
  Cards,
  Circles,
  Frame,
  TextArea,
  InvolvedSec,
  SecTitle,
  Btn,
  OtherClubsSec,
  ClubCards,
  ClubCard,
  LocalOrgsSec,
  Organizations,
  Organization,
  WeeklySec,
  Arrow,
  FeatureArea,
  Feature,
  ImageSec,
  TextSec,
  Donate,
  LinkS,
  Image,
  ClubImage,
  ClubName,
  ClubDescription,
  LearnMore,
  Links,
  IceCream,
  Water,
  ToothBrush,
  SecCircles,
  DownloadBtn,
} from "./styles/criteria";

export default function Container() {
  let one = [
    "Natural",
    "USDA Organic",
    "Fair Trade",
    "Certified Humane",
    "Food Alliance Certification",
    "Non-GMO",
    "Local",
    "Rainforest Alliance Certified",
    "Certified Animal Welfare Approved",
  ];
  let two = [
    "No GMO",
    "Provides vegetarian and vegan options",
    "No animal testing",
    "Implements ethical farming practices",
    "Sources ingredients from Pacific Northwest farms (Washington, Oregon, Idaho)",
    "Buy from regional farms",
    "Little to no perservatives on farm",
    "No pesticides",
    "Uses certified organic products",
    "Farm certifications: Certified Humane, Animal Welfare Approved, American Grass-fed, American Humane Certified, Global Animal Partnership 4, 5, and 5+",
  ];
  let three = [
    "50% of applicances are certified by Energy Star (refrigerators, microwaves, dishwasher, HVAC, etc)",
    "Uses LED lights",
    "Automatic lights",
    "Uses environmentally-friendly cleaning products",
    "Touchless sensor faucets",
    "Dual flush toilet system",
    "Building is RainWater certified",
    "Building reuses greywater for irrigation/plumbing",
    "Check box for using rented spaces --> we understand small businesses aren't able to do all of these",
  ];
  let four = [
    "Integrates compost and recycling bins",
    "Uses compostable and/or reusable supplies (ex. utensils, cups, napkins, trays, glasses, seat covers, etc.)",
    "Uses compostable and/or recyclable packaging",
    "Practices waste reduction in the office (supplies, paperless)",
    "Donates extra and leftover food and/or products",
    "Has pictures of what goes where for trash sorting",
    "Provides reusable dishes for inperson dining",
    "Donates or sells imperfect ingredients",
  ];
  let five = [
    "Posts accurate info on social media accounts and websites",
    "Educates staff about sustainability and sustainable business practices",
    "Charitable goods for community",
    "Transparency in practices",
    "Actively attempts to increase and support environmental justices and campaigns",
    "Overall supports community and is transparent with them",
  ];
  let six = [
    "Good working conditions",
    "Family-owned",
    "Minority-owned",
    "BIPOC-owned",
    "Woman-owned",
    "Disabled-owned",
  ];

  let categories = [
    "Certifications",
    "Sustainable Ingredients and Foods",
    "Resource Management",
    "Waste Management",
    "Beyond the Business",
    "Other Badges"];

  const [industries, setIndustries] = useState([]);

  let filters = categories.map((category) => {
    return <Selection category={category} list={industries} setList={setIndustries}/>;
  });

  return (
    <>
    <Containerz className="about-container">
      <Main className="about-main">
        <CriteriaSec>
          <Text>
            <Heading>
              How do we know businesses are sustainable?<br/>
              <span style={{color: "#67923D"}}> Glad you asked.</span>
            </Heading>
            <Description>
              First, choose an industry. Then we'll show you the criteria.
            </Description>
            <SubDescription>
            We have conducted <em>research</em> on characteristics of businesses
            that maximize sustainbility. We have implemented a certification{" "}
            <em>system</em> to reward businesses for specific eco-friendly
            categories.
            </SubDescription>
          </Text>
          
        </CriteriaSec>
        <div className="filter-selections">
          {filters}
        </div>
      </Main>
    </Containerz>
    <div className="criteria-container">
      <div className="criteria-text-content">
        <div className="criteria-txt">
          <h1>
            Criteria <div className="criteria-bar"></div>
          </h1>
          <p>
            We have conducted <em>research</em> on characteristics of businesses
            that maximize sustainbility. We have implemented a certification{" "}
            <em>system</em> to reward businesses for specific eco-friendly
            categories.
          </p>
        </div>
        <CriteriaCat title="Certifications" content={one} />
        <CriteriaCat title="Sustainable Ingredients and Foods" content={two} />
        <CriteriaCat title="Resource Management" content={three} />
        <CriteriaCat title="Waste Management" content={four} />
        <CriteriaCat title="Beyond the Business" content={five} />
        <CriteriaCat title="Other Badges" content={six} />
      </div>
      <div className="criteria-image">
        <img src="/images/criteria_img.png" />
      </div>
    </div>
    </>
  );
}

function Selection ({category, list, setList}) {
  const [selected, setSelected] = useState(false);
  const [inList, setInList] = useState(false);

  const changeList = () => {
    setSelected(prevSelect => !prevSelect);
    console.log(selected, 'not changed?');
    console.log(list, 'origin list');
    let newList = [...list];
    let i = 0;
    let itemInList = false;
    while (!itemInList && i < list.length) {
      itemInList = list[i] === category;
      i++;
    }
    if (!itemInList) {
      newList.push(category);
      console.log(newList, ' added newList');
    }
    
    if (itemInList && selected) {
      newList = newList.filter((item) => item !== category);
      console.log(newList, ' removed newList');
    }
    setList(newList);
  }
  
  return <button className={"filter-select" + (selected ? " selected" : "")} onClick={changeList}>{category +' '+ selected}</button>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: ".4em",
    width: "40em",
  },
  summary: {
    backgroundColor: "#A9D0A9",
    borderRadius: "10px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightMedium,
    marginLeft: ".2em",
    color: "#535461",
  },
}));

export function CriteriaCat(props) {
  const classes = useStyles();
  let arr = props.content;

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
        >
          <Typography className={classes.heading}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {arr.map((point) => {
              return <Bullet text={point} />;
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function Bullet(props) {
  return (
    <p>
      <i className="fa fa-check-circle-o" aria-hidden="true" />
      &nbsp;{props.text}
    </p>
  );
}
