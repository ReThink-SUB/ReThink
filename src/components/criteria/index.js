import React, {useEffect, useState} from 'react';
import { Dimensions } from 'react-native';
import { db } from "../../firebase";
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
// merge pls
export default function Container() {
  const [width, setWidth] = useState(windowWidth);
  const [industries, setIndustries] = useState([]);
  const [active, setActive] = useState(null);
  const [criteria, setCriteria] = useState({});

  useEffect(() => {
    let industryHolder = [];
    db.collection('criteria').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        industryHolder.push(<Industry data={doc.data()} value={doc.id} setActive={setActive} setCriteria={setCriteria}/>);
      });
      setIndustries(industryHolder);
    });
    Dimensions.addEventListener(
      "change", (window => {
      setWidth(window['window']['width']);
    }));
  }, []);

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
        <div className="description">
          <h1>{criteria.title}</h1>
          <p>{criteria.desc}</p>
        </div>
        <div className="filter-selections">
          {industries}
        </div>
        <div className="criteria-section">
          {active}
        </div>
      </Main>
    </CritContainer>
  ;
}

function Industry ({data, value, setActive, setCriteria}) {
  const [open, setOpen] = useState(false);
  let desc = data.industry_description;
  let criterias = data.criteria_boxes;

  useEffect(() => {
    const clickHandler = ({ target }) => {
      const container = document.getElementById(`${value}`);
      if ((container != null) && container.contains(target)) return;
      setOpen(false);
    }
    document.addEventListener("click", clickHandler);
    
    return () => document.removeEventListener("click", clickHandler);
  })

  const handleClick = () => {
    let newList = Object.entries(criterias).map(([key, value]) => {
      return <CriteriaCard title={value.title} desc={value.desc}/>;
    });
    setOpen(!open);
    if (!open == true) {
      setActive(newList);
      setCriteria({'title': value, 'desc': desc});
    } else {
      setActive(null);
      setCriteria({});
    }
  }

  return <button id={value} className={"filter-select" + (open === true ? " selected" : "")} onClick={handleClick}>{value}</button>;
}

function CriteriaCard ({title, desc}) {
  return (
    <div className="industry-card">
      <h2 className="industry-title">{title}</h2><br/>
      <p className='industry-criteria'>{desc}</p>
    </div>
  );
}