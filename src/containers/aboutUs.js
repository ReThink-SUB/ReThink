import React, {useEffect, useState, useRef } from 'react';
import { AboutUs } from "../components";
import "../components/aboutUs/styles/style.scss"
import { db, storage } from "../firebase";

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

  useEffect(() => {
      // read data in from firestore
      // https://firebase.google.com/docs/firestore/query-data/get-data

      let profilesHolder = [];
      let backColor = "#D4E9D6";
      let color = "#ffffff";
      let counter = 3;
      db.collection('team').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              profilesHolder.push(<Profile key={doc.data()} data={doc.data()} back_color={backColor} color={color} />);
              
              // switch for the first one
              // if (counter === 3) {
              //   backColor = "#ffffff";
              //   color = "#BBBBBD";
              //   counter = 0;
              // }

              // every two, switch colors
              // if (counter === 2 && backColor === "#D4E9D6") {
              //   backColor = "#ffffff";
              //   color = "#BBBBBD";
              //   counter = 0;
              // } else if (counter === 2 && backColor === "#ffffff") {
              //   backColor = "#D4E9D6";
              //   color = "#ffffff";
              //   counter = 0;
              // } 
              counter++;
          });
          setProfiles(profilesHolder);
      });
    }, []);

  return (
    <AboutUs className="about-container">
      <AboutUs.Side className="about-sidebar">
        <AboutUs.Links className="about-links">
          <AboutUs.Link myID="/about/#about">About Us</AboutUs.Link>
          <AboutUs.Link myID="/about/#team">Sub Team</AboutUs.Link>
          <AboutUs.Link myID="/about/#involved">Get Involved</AboutUs.Link>
        </AboutUs.Links>
      </AboutUs.Side>
      <AboutUs.Main className="about-main">
        <AboutUs.AboutSec className="about-section">
          <AboutUs.Text className="about-text">
            <AboutUs.Title id="about" className="about-us">About Us</AboutUs.Title>
            <AboutUs.Heading>Who we are</AboutUs.Heading>
            <AboutUs.Description className="about-desc">
              A community of passionate University of Washington Seattle
              students whose purpose is to transform the community by advocating
              for sustainable living at the local level.
            </AboutUs.Description>
            <AboutUs.Heading>What businesses should be</AboutUs.Heading>
            <AboutUs.Description>
              These businesses are industry leaders in incorporating
              sustainability in their products, services, or supply chain
              logistics. They are the gold standard of sustainability practices
              that people should shop at.
            </AboutUs.Description>
            <AboutUs.Description>
              From their menus, ingredients, establishment, materials, and whole
              host of others, they represent what it means to ReThink local
              economy, and have sustainability upheld in business.
            </AboutUs.Description>
          </AboutUs.Text>
          <AboutUs.Images className="about-images">
            <AboutUs.IceCream className="ice-cream" src="IceCream" />
            <AboutUs.Water className="water" src="Water" />
            <AboutUs.ToothBrush
              className="toothbrush"
              src="ToothBrush"
              width="200px"
              top="53%"
              left="18%"
            />
            <AboutUs.Circles className="circle-1" />
            <AboutUs.Circles className="circle-2" />
            <AboutUs.Circles className="circle-3" />
          </AboutUs.Images>
        </AboutUs.AboutSec>
        <AboutUs.SubSec className="about-subSec">
          <AboutUs.Title>
            <span id="team">SUB Team</span>
          </AboutUs.Title>
          <AboutUs.SecDescription>
            A ragtag team of UW students deciding to give a damn about the
            environment, in the most enjoyable way possible.
          </AboutUs.SecDescription>
          {/* <AboutUs.Cards className="about-cards"> */}
          <div className="team-cards">
            {profiles}
          </div>
          {/* </AboutUs.Cards> */}
        </AboutUs.SubSec>
        <AboutUs.InvolvedSec className="involved-sec">
          <div className="about-section">
            <h className="about-title">Get Involved</h>
            <h3 className="about-heading">How to get involed</h3>
            <h3 className="about-secTitle">SUB Team</h3>
            <p>Apply now to be part of the SUB Team!</p><br/>
            <b className="positions-available">Positions Available:</b>
            <ul>
              <li>• Marketing</li>
              <li>• Business Development</li>
              <li>• Researchers</li>
              <li>• Back End Developers</li>
              <li>• Front End Developers</li>
            </ul>
          </div>
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
          <div className="about-section">
            <h3 className="about-title">Other Clubs</h3>
            <p>Clubs at UW focused on environmental sustainability:</p>
            <div className="about-cards">
              <div className="about-card">
                <div className="club-image">
                  <img src={`/images/seed.png`} alt="club" />
                </div>
                <h3 className="club-name">SEED</h3>
                <p className="club-desc">Sustainability club for students living in residence halls.</p>
                <AboutUs.LearnMore>Learn More</AboutUs.LearnMore>
              </div>
              <div className="about-card">
                <div className="club-image">
                  <img src={`/images/Farm.png`} alt="club" />
                </div>
                <h3 className="club-name">UW Farm</h3>
                <p className="club-desc">Opportunities for hands-on agricultural learning at UW.</p>
                <AboutUs.LearnMore>Learn More</AboutUs.LearnMore>
              </div>
              <div className="about-card">
                <div className="club-image">
                  <img src={`/images/EcoReps.png`} alt="club" />
                </div>
                <h3 className="club-name">UW EcoReps</h3>
                <p className="club-desc">Sustainability club for students living in residence halls.</p>
                <AboutUs.LearnMore>Learn More</AboutUs.LearnMore>
              </div>
              <div className="about-card">
                <div className="club-image">
                  <img src={`/images/Solar.png`} alt="club" />
                </div>
                <h3 className="club-name">UW Solar</h3>
                <p className="club-desc">Students working to increase and promote solar power at UW.</p>
                <AboutUs.LearnMore>Learn More</AboutUs.LearnMore>
              </div>
            </div>
          </div>
        </AboutUs.OtherClubsSec>
        <AboutUs.LocalOrgsSec className="local-sec">
          <div className="about-section">
            <AboutUs.Heading>
              Some local organizations that we support
            </AboutUs.Heading>
            <AboutUs.Description>
              These organizations use their platform to educate the public on ways
              to protect the environment in order to live more sustainably.
            </AboutUs.Description>
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
          </div>
        </AboutUs.LocalOrgsSec>
        <AboutUs.Btn href="">
            Learn more
          </AboutUs.Btn>
      </AboutUs.Main>
    </AboutUs>
  );
}

function Profile(props) {
  let data = props.data;
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  }

  return (
    <div onMouseEnter={flip} onMouseLeave={flip} className={"flip-card-container" + (flipped ? " flipped" : "")}>
      <Front 
        background={[props.back_color]}
        src={data.profile_img}
        person={data.name}
        position={data.position}
        color={props.color}/>
      <div className="sec-circles">
        <img src="/images/CirclePattern.png" alt="SecCircles" />
      </div>
      <Back background={[props.back_color]} 
        linkedin={"http://www.linkedin.com/in/" + data.linkedin_url}
        bio={data.bio}/>
    </div>
  );
}

function Front({
  color,
  background,
  src,
  person,
  position,
  children,
  ...restProps
}) {
  let data = restProps.datas;

  const [imgURL, setURL] = useState([]);

  useEffect(() => {
    var ref = storage.ref(`img/profiles/${src}.jpg`);
    ref.getDownloadURL().then(function (url) {
      setURL(url);
    })
  });

  return (
    <div className="front" style={{backgroundColor: background}}>
      <div className="image-container">
        <img className="card-image" src={imgURL}></img>
      </div>
      <h2 className="name">{person}</h2>
      <p className="position" style={{color: color}}>{position}</p>
    </div>
  );
}

function Back(props) {
  let data = props.data;
  return (
    <div className="back" style={{backgroundColor: props.background}}>
        <p className="bio">{props.bio}</p>
    </div>
  );
}

function ProfileCard(props) {
  let data = props.data;
  return (
    <AboutUs.Card className="flip-card">
      <AboutUs.Frame
        background={[props.back_color]}
        src={data.profile_img}
        person={data.name}
        position={data.position}
        color={props.color}
      ></AboutUs.Frame>
      <AboutUs.SecCircles />
      <AboutUs.TextArea linkedin={"http://www.linkedin.com/in/" + data.linkedin_url}>
        {data.bio}
      </AboutUs.TextArea>
    </AboutUs.Card>
  );
}