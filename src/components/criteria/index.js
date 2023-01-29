import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { db } from "../../firebase";
import "./styles/criteria.scss";
import {
  CritContainer,
  Main,
  CriteriaSec,
  Text,
  HeadingQuestion,
  HeadingReply,
  Description,
  SubDescription,
} from "./styles/criteria";

const windowWidth = Dimensions.get("window").width;
// merge pls
export default function Container() {
  const [width, setWidth] = useState(windowWidth);
  const [industries, setIndustries] = useState([]);
  const [active, setActive] = useState(null);
  const [criteria, setCriteria] = useState({});
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    let industryHolder = [];
    db.collection("criteria")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          industryHolder.push(
            <Industry
              data={doc.data()}
              value={doc.data()["name"]}
              setActive={setActive}
              setCriteria={setCriteria}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          );
        });
        setIndustries(industryHolder);
        if (criteria.title == null) {
          let defaultIndustry = industryHolder[0].props.data;

          let newList = Object.entries(defaultIndustry.criteria_boxes).map(
            ([key, value]) => {
              return <CriteriaCard title={value.title} desc={value.desc} />;
            }
          );
          setActive(newList);
          setCriteria({
            title: defaultIndustry.name,
            desc: defaultIndustry.industry_description,
          });
          console.log(criteria);
          setActiveTab(defaultIndustry.name);
        }
      });
    Dimensions.addEventListener("change", (window) => {
      setWidth(window["window"]["width"]);
    });
  }, [activeTab]);

  return (
    <CritContainer className="about-container">
      <Main className="about-main">
        <CriteriaSec className="criteriaSec">
          <Text>
            <HeadingQuestion>
              How are businesses sustainable?{width < 800 ? <br /> : null}
            </HeadingQuestion>
            <HeadingReply>
              Glad you asked.{width < 800 ? <br /> : null}
            </HeadingReply>
            <Description>
              First, choose an industry. Then we'll show you the criteria. {width < 800 ? <br /> : null}
            </Description>
            {/* <SubDescription>
            We have conducted <em>research</em> on characteristics of businesses
            that maximize sustainbility. We have implemented a certification{" "}
            <em>system</em> to reward businesses for specific eco-friendly
            categories.
            </SubDescription> */}
          </Text>
        </CriteriaSec>
        <div className="line-border" />
        <div className="filter-selections">{industries}</div>
        <br />
        <div className="description">
          <h1>{criteria.title}</h1>
          <p>{criteria.desc}</p>
        </div>

        <div className="criteria-section">{active}</div>
      </Main>
    </CritContainer>
  );
}

function Industry({
  data,
  value,
  setActive,
  setCriteria,
  activeTab,
  setActiveTab,
}) {
  let desc = data.industry_description;
  let criterias = data.criteria_boxes;

  useEffect(() => {
    const clickHandler = ({ target }) => {
      const container = document.getElementById(`${value}`);
      if (container != null && container.contains(target)) return;
    };
    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  });

  const handleClick = () => {
    let newList = Object.entries(criterias).map(([key, value]) => {
      return <CriteriaCard title={value.title} desc={value.desc} />;
    });
    setActive(newList);
    setActiveTab(value);
    setCriteria({ title: value, desc: desc });
    console.log(value);
  };

  return (
    <button
      id={value}
      className={"filter-select" + (activeTab === value ? " selected" : "")}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

function CriteriaCard({ title, desc }) {
  return (
    <div className="industry-card">
      <h2 className="industry-title">{title}</h2>
      <br />
      <p
        dangerouslySetInnerHTML={{ __html: desc }}
        className="industry-criteria"
      />
    </div>
  );
}
