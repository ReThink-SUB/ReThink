import React, {useEffect, useState, useRef } from 'react';
import { Dimensions } from 'react-native';
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./styles/criteria.scss";
import {
  CritContainer,
  Main,
  CriteriaSec,
  Images,
  Text,
  Title,
  Heading,
  SecDescription,
  Description,
  SubDescription,
} from "./styles/criteria";

const windowWidth = Dimensions.get('window').width;

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
  let categories = {
    "Certifications": one,
    "Sustainable Ingredients and Foods": two,
    "Resource Management": three,
    "Waste Management": four,
    "Beyond the Business": five,
    "Other Badges": six
  };
  const [industries, setIndustries] = useState([]);
  const [width, setWidth] = useState(windowWidth);

  useEffect(() => {
    Dimensions.addEventListener(
      "change", (window => {
      setWidth(window['window']['width']);
    }));
  }, []);

  let filters = Object.entries(categories).map(([key, value]) => {
    return <Selection category={key} list={industries} setList={setIndustries}/>;
  });

  let criteriaList = industries.map((industry) => {
    return <CriteriaCard industry={industry} desc={categories[industry]}/>
  });

  return <CritContainer className="about-container">
      <Main className="about-main">
        <CriteriaSec className="criteriaSec">
          <Text>
            <Heading>
              How are businesses sustainable?{width < 800 ? <br/> : null }
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
        <div className='line-border'/>
        <div className="filter-selections">
          {filters}
        </div>
        <div className="criteria-section">
          {criteriaList}
        </div>
      </Main>
    </CritContainer>
  ;
}

function Selection ({category, list, setList}) {
  const [selected, setSelected] = useState(false);

  const changeList = () => {
    setSelected(prevSelect => !prevSelect);
    let newList = [...list];
    let i = 0;
    let itemInList = false;
    while (!itemInList && i < list.length) {
      itemInList = list[i] === category;
      i++;
    }
    if (!itemInList) {
      newList.unshift(category);
    }
    
    if (itemInList && selected) {
      newList = newList.filter((item) => item !== category);
    }
    setList(newList);
  }
  
  return <button className={"filter-select" + (selected ? " selected" : "")} onClick={changeList}>{category}</button>;
}



function CriteriaCard ({industry, desc}) {
  return (
    <div className="industry-card">
      <h2 className="industry-title">{industry}</h2><br/>
      <p>Criteria:</p>
      <div className='industry-criteria'>
        {desc.map((point) => {
          return <Bullet text={point} />;
        })}
      </div>
    </div>
  );
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
