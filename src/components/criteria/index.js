import React, {useEffect, useState, useRef } from 'react';
import { Dimensions } from 'react-native';
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { db, storage } from "../../firebase";
import "./styles/criteria.scss";
import {
  CritContainer,
  Main,
  CriteriaSec,
  Text,
  Heading,
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
  const [industris, setIndustris] = useState([]);
  const [active, setActive] = useState(null);
  const [criteria, setCriteria] = useState({});

  useEffect(() => {
    let industryHolder = [];
    db.collection('criteria').get().then((querySnapshot) => {
      let i = 0;
      querySnapshot.forEach((doc) => {
        console.log(i);
        industryHolder.push(<Industri data={doc.data()} value={doc.id} setActive={setActive} setCriteria={setCriteria}/>);
        i++;
      });
      generateIndustris(industryHolder);
    });
    Dimensions.addEventListener(
      "change", (window => {
      setWidth(window['window']['width']);
    }));
  }, []);

  const generateIndustris = (industrys) => {
    setIndustris(industrys);
  }

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
        {/* <CriteriaSec className="desc-sec">
          <Text>
            <Heading>
              <span style={{color: "#67923D"}}>{criteria.title}</span>
            </Heading>
            <SubDescription>
            {criteria.desc}
            </SubDescription>
            <h1>{criteria.title}</h1>
            <p>{criteria.desc}</p>
          </Text>
        </CriteriaSec> */}
        <div className="description">
          <h1>{criteria.title}</h1>
          <p>{criteria.desc}</p>
        </div>
        <div className="filter-selections">
          {industris}
        </div>
        <div className="criteria-section">
          {active}
        </div>
        {/* <div className="filter-selections">
          {filters}
        </div>
        <div className="criteria-section">
          {criteriaList}
        </div> */}
      </Main>
    </CritContainer>
  ;
}

function Industri ({data, value, setActive, setCriteria}) {
  // let data = props.data;
  const [open, setOpen] = useState(false);
  let desc = data.industry_description;
  let criterias = data.criteria_boxes;
  // console.log(criterias, 'crit');

  useEffect(() => {
    const clickHandler = ({ target }) => {
      const container = document.getElementById(`${value}`);
      if (container.contains(target)) return;
      setOpen(false);
    }
    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  })

  const handleClick = () => {
    setOpen(!open);
    console.log(value, desc, 'desc');
    
    // let newList = criterias.map((crit) => {
    //   return <CritCard title={crit.title} desc={crit.desc}/>
    // });

    let newList = Object.entries(criterias).map(([key, value]) => {
      return <CritCard title={value.title} desc={value.desc}/>;
    });
    console.log(newList);
    setActive(newList);
    setCriteria({'title': value, 'desc': desc});
  }

  return <button id={value} className={"filter-select" + (open === true ? " selected" : "")} onClick={handleClick}>{value}</button>;
}

function CritCard ({title, desc}) {
  return (
    <div className="industry-card">
      <h2 className="industry-title">{title}</h2><br/>
      <p className='industry-criteria'>{desc}</p>
    </div>
  );
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

function Bullet(props) {
  return (
    <p>
      <i className="fa fa-check-circle-o" aria-hidden="true" />
      &nbsp;{props.text}
    </p>
  );
}



// Old criteria selection
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
