import React from "react";
import { LandingPage } from "../components";
// import * as ROUTES from "../constants/routes";

export function LandingPageContainer() {
  return (
    <>
      <LandingPage>
        <LandingPage.LeftSect>
          {/* <LandingPage.Navbar>
            <LandingPage.Links>
              <LandingPage.Link to={ROUTES.LANDING}>home</LandingPage.Link>
              <LandingPage.Link to={ROUTES.BUSINESSES}>
                find businesses
              </LandingPage.Link>
              <LandingPage.Link to={ROUTES.SIGNUP}>about us</LandingPage.Link>
              <LandingPage.Link to={ROUTES.CRITERIA}>criteria</LandingPage.Link>
              <LandingPage.Link to={ROUTES.TEAM}>
                meet the team
              </LandingPage.Link>
              <LandingPage.Link to={ROUTES.CONTACT}>contact</LandingPage.Link>
              <LandingPage.Link to={ROUTES.SIGNUP}>sign up</LandingPage.Link>
            </LandingPage.Links>
          </LandingPage.Navbar> */}
          {/* <LandingPage.Title>SUB</LandingPage.Title> */}
          <LandingPage.SubTitle>
            Sustainable consumerism made <em style={{color: "black"}}>easy</em>
          </LandingPage.SubTitle>
          <LandingPage.Description>
            Shop, eat, and dine at climate concious businesses in your area {" "}
          </LandingPage.Description>
          {/* <LandingPage.Button>Find Businesses</LandingPage.Button> */}
        </LandingPage.LeftSect>
        <LandingPage.RightSect>
          <LandingPage.CardOne
            src="BallardMarket.jpg"
            label="Ballard Market"
            type="Clothing Store $$$"
          />
          {/* <LandingPage.CardTwo
            src="Corner42.png"
            label="Corner 42"
            type="Grocery Store $$"
          /> */}
          <LandingPage.CardThree
            src="IndianMarket.png"
            label="Indian Market"
            type="Grocery Store $$"
          />
          {/* <LandingPage.Ellipse />
          <LandingPage.SmallEllipse /> */}
          <LandingPage.CirclePattern1 />
          <LandingPage.CirclePattern2 />
        </LandingPage.RightSect>
      </LandingPage>
    </>
  );
}
