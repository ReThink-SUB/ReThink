import React, { useEffect, useState, useRef } from "react";
import { Dimensions } from "react-native";
import { AboutUs } from "../components";
import "../components/aboutUs/styles/style.scss";
import { db, storage } from "../firebase";

const windowWidth = Dimensions.get("window").width;

export function AboutUsContainer() {
  async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "AvailablePositions.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const [profiles, setProfiles] = useState([]);
  const [width, setWidth] = useState(windowWidth);

  useEffect(() => {
    // read data in from firestore
    // https://firebase.google.com/docs/firestore/query-data/get-data
    let profilesHolder = [];
    let backColor = "#D4E9D6";
    let color = "#ffffff";
    let counter = 3;
    db.collection("team")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.data());
          if (
            doc.data().isAlum.includes("n") ||
            doc.data().isAlum.includes("N")
          ) {
            profilesHolder.push(
              <ProfileCard
                key={doc.data().profile_img}
                data={doc.data()}
                back_color={backColor}
                color={color}
              />
            );

            // switch for the first one
            if (counter === 3) {
              backColor = "#ffffff";
              color = "#BBBBBD";
              counter = 0;
            }

            // every two, switch colors
            if (counter === 2 && backColor === "#D4E9D6") {
              backColor = "#ffffff";
              color = "#BBBBBD";
              counter = 0;
            } else if (counter === 2 && backColor === "#ffffff") {
              backColor = "#D4E9D6";
              color = "#ffffff";
              counter = 0;
            }
            counter++;
          }
        });
        setProfiles(profilesHolder);
      });

    Dimensions.addEventListener("change", (window) => {
      setWidth(window["window"]["width"]);
    });
  }, []);

  const setAboutSection = (dimm) => {
    let mobile = (
      <AboutUs.AboutSec className="about-section">
        <AboutUs.Text className="about-text">
          <AboutUs.Title id="about" className="about-us">
            About Us
          </AboutUs.Title>
          <AboutUs.Heading>Who we are</AboutUs.Heading>
          <AboutUs.Description className="about-desc">
            ReThink is a University of Washington Michael G. Foster School of
            Business Registered Student Organization. We are a team of students
            advocating for sustainable consumer behavior.
          </AboutUs.Description>
          <AboutUs.Description>
            Through business outreach and thorough research, we determine what
            local companies follow guidelines that certify them as
            “sustainable”. Following an eco-friendly lifestyle can be
            challenging, which is why our organization aims to connect consumers
            to sustainable businesses in the Seattle area.
            <br />
            <br />
            Interested in joining our team? We are looking for UW students to
            help in either marketing, research, development, or design. Minimum
            commitment of two quarters with about 6 hours of work per week
            including a weekly ReThink meeting and a weekly team meeting.
          </AboutUs.Description>
          <AboutUs.Heading>Who we support</AboutUs.Heading>
          <AboutUs.Description>
            We feature businesses that incorporate sustainability in their
            everyday operations. From the ingredients on their menus, to the
            materials in their products, these businesses have a multitude of
            avenues to introduce sustainability within their company. If you
            know of a business that is sustainable and is not currently
            featured, send us an <a href="mailto:join@rethinkuw.org">email</a>{" "}
            at join@rethinkuw.org.
          </AboutUs.Description>
        </AboutUs.Text>
        <AboutUs.Images className="about-images">
          <AboutUs.IceCream className="ice-cream" src="IceCream" />
          <AboutUs.Water className="water" src="Water" />
          <AboutUs.Circles className="circle-1" />
        </AboutUs.Images>
      </AboutUs.AboutSec>
    );

    let desktop = (
      <AboutUs.AboutSec className="about-section">
        <AboutUs.Images className="about-images">
          <AboutUs.IceCream className="ice-cream" src="IceCream" />
          <AboutUs.Water className="water" src="Water" />
          <AboutUs.ToothBrush className="toothbrush" src="ToothBrush" />
          <AboutUs.Circles className="circle-1" top="15%" left="50%" />
          <AboutUs.Circles className="circle-2" top="60%" left="1%" />
          <AboutUs.Circles className="circle-3" top="70%" left="55%" />
        </AboutUs.Images>
        <AboutUs.Text className="about-text first">
          <AboutUs.Title id="about" className="about-us">
            About Us
          </AboutUs.Title>
          <AboutUs.Heading>Who we are</AboutUs.Heading>
          <AboutUs.Description className="about-desc">
            ReThink is a University of Washington Michael G. Foster School of
            Business Registered Student Organization. We are a team of students
            advocating for sustainable consumer behavior.
          </AboutUs.Description>
          <AboutUs.Description>
            Through business outreach and thorough research, we determine what
            local companies follow guidelines that certify them as
            “sustainable”. Following an eco-friendly lifestyle can be
            challenging, which is why our organization aims to connect consumers
            to sustainable businesses in the Seattle area.
            <br />
            <br />
            Interested in joining our team? We are looking for UW students to
            help in either marketing, research, development, or design. Minimum
            commitment of two quarters with about 6 hours of work per week
            including a weekly ReThink meeting and a weekly team meeting.
          </AboutUs.Description>
          <AboutUs.Heading>Who we support</AboutUs.Heading>
          <AboutUs.Description>
            We feature businesses that incorporate sustainability in their
            everyday operations. From the ingredients on their menus, to the
            materials in their products, these businesses have a multitude of
            avenues to introduce sustainability within their company. If you
            know of a business that is sustainable and is not currently
            featured, send us an email at join@rethinkuw.org.
          </AboutUs.Description>
        </AboutUs.Text>
      </AboutUs.AboutSec>
    );
    if (dimm < 800) {
      return mobile;
    } else {
      return desktop;
    }
  };

  return (
    <AboutUs className="about-container">
      <AboutUs.Side className="about-sidebar">
        <AboutUs.Links className="about-links">
          <AboutUs.Link myID="/about/#about">About Us</AboutUs.Link>
          <AboutUs.Link myID="/about/#team">Meet the Team</AboutUs.Link>
          <AboutUs.Link myID="/about/#involved">Get Involved</AboutUs.Link>
        </AboutUs.Links>
      </AboutUs.Side>
      <AboutUs.Main className="about-main">
        {setAboutSection(width)}
        <AboutUs.SubSec className="about-subSec">
          <AboutUs.Text>
            <AboutUs.Title>
              <span id="team">Meet the team</span>
            </AboutUs.Title>
            <AboutUs.SecDescription>
              We have rolling applications to join our team. Keep an eye out on
              our social media if you're interested.
            </AboutUs.SecDescription>
          </AboutUs.Text>
          <AboutUs.Cards className="team-cards">{profiles}</AboutUs.Cards>
        </AboutUs.SubSec>
        <AboutUs.InvolvedSec id="involved" className="about-involved">
          <AboutUs.Text>
            <AboutUs.Title>Get Involved</AboutUs.Title>
            {/* <AboutUs.Heading className="small-heading" >
              How to get involved
            </AboutUs.Heading> */}
            <AboutUs.Title
              className="small-title"
              style={{ "font-size": "16px" }}
            >
              ReThink Team
            </AboutUs.Title>
            <AboutUs.Description>
              University of Washington students, <i>APPLY NOW</i> to join the
              ReThink Team.
            </AboutUs.Description>
            <AboutUs.Description>
              {width < 800 ? (
                <ul>
                  <b className="positions-available">Positions Available:</b>
                  <li>• Marketing</li>
                  <li>• Business Development</li>
                  <li>• Researchers</li>
                  <li>• Front End Developers</li>
                </ul>
              ) : (
                `Positions Available: Marketing, Business Development, Researchers, Front End Developers`
              )}
              <br />
              Reach out to{" "}
              <a href="mailto:join@rethinkuw.org" className="a-tag-clear">
                join@rethinkuw.org
              </a>{" "}
              with any questions!
            </AboutUs.Description>
          </AboutUs.Text>
          <AboutUs.Btn href="http://www.bit.ly/rethink-sub-app">
            Apply
          </AboutUs.Btn>
          {/* <AboutUs.DownloadBtn
            downloadImage={downloadImage}
            href="https://i.imgur.com/mhTBjpQ.png"
          >
            View Positions
          </AboutUs.DownloadBtn> */}
        </AboutUs.InvolvedSec>
        <AboutUs.OtherClubsSec className="other-sec">
          <AboutUs.Text>
            <AboutUs.Title
              className="small-title"
              style={{ "font-size": "16px" }}
            >
              Other Sustainability Clubs at the University of Washington
            </AboutUs.Title>
          </AboutUs.Text>
          <div className="about-cards">
            <div className="about-card">
              <div className="club-image">
                <img src={`/images/seed.png`} alt="club" />
              </div>
              <h3 className="club-name">SEED</h3>
              <p className="club-desc">
                Sustainability club for students living in residence halls.
              </p>
              {/* <AboutUs.LearnMore>Learn More</AboutUs.LearnMore> */}
            </div>
            <div className="about-card">
              <div className="club-image">
                <img src={`/images/Farm.png`} alt="club" />
              </div>
              <h3 className="club-name">UW Farm</h3>
              <p className="club-desc">
                Opportunities for hands-on agricultural learning at UW.
              </p>
              {/* <AboutUs.LearnMore>Learn More</AboutUs.LearnMore> */}
            </div>
            <div className="about-card">
              <div className="club-image">
                <img src={`/images/EcoReps.png`} alt="club" />
              </div>
              <h3 className="club-name">UW EcoReps</h3>
              <p className="club-desc">
                Sustainability club for students living in residence halls.
              </p>
              {/* <AboutUs.LearnMore>Learn More</AboutUs.LearnMore> */}
            </div>
            <div className="about-card">
              <div className="club-image">
                <img src={`/images/Solar.png`} alt="club" />
              </div>
              <h3 className="club-name">UW Solar</h3>
              <p className="club-desc">
                Students working to increase and promote solar power at UW.
              </p>
              {/* <AboutUs.LearnMore>Learn More</AboutUs.LearnMore> */}
            </div>
            {/* <div className="about-card">
              <div className="club-image">
                <img src={`/images/net impact.png`} alt="club" />
              </div>
              <h3 className="club-name">Net Impact</h3>
              <p className="club-desc">
                Foster RSO providing professional experiences to emerging
                leaders.
              </p>
              {/* <AboutUs.LearnMore>Learn More</AboutUs.LearnMore> */}
            {/* </div> */}
          </div>
        </AboutUs.OtherClubsSec>
        <AboutUs.LocalOrgsSec className="local-sec">
          <AboutUs.Text>
            <AboutUs.Heading>Other local organizations</AboutUs.Heading>
            <AboutUs.Description>
              These organizations are working hard to help the environment.
            </AboutUs.Description>
          </AboutUs.Text>
          <AboutUs.Organizations className="organizations">
            <AboutUs.Organization src="Sustainable">
              Sustainable Seattle
            </AboutUs.Organization>
            <AboutUs.Organization src="Interweave">
              INTERWEAVE
            </AboutUs.Organization>
            <AboutUs.Organization src="Earthshare">
              EarthShare Washington
            </AboutUs.Organization>
          </AboutUs.Organizations>
        </AboutUs.LocalOrgsSec>
      </AboutUs.Main>
    </AboutUs>
  );
}

function ProfileCard(props) {
  let data = props.data;
  return (
    <AboutUs.Card className="prof-card">
      <AboutUs.Frame
        className="frame"
        background={[props.back_color]}
        src={data.profile_img}
        person={data.name}
        position={data.position}
        color={props.color}
        pronouns={data.pronouns}
      ></AboutUs.Frame>
      <AboutUs.SecCircles />
      <AboutUs.TextArea
        className="textArea"
        linkedin={"http://www.linkedin.com/in/" + data.linkedin_url}
      >
        {data.bio}
      </AboutUs.TextArea>
    </AboutUs.Card>
  );
}
