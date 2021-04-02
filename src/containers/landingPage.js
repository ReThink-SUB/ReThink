import React from "react";
import { LandingPage } from "../components";
import * as ROUTES from "../constants/routes";

export function LandingPageContainer() {
  return (
    <>
      <LandingPage>
        <LandingPage.LeftSect>
          <LandingPage.Navbar>
            <LandingPage.Links>
              <LandingPage.Link to={ROUTES.HOME}>home</LandingPage.Link>
              <LandingPage.Link to={ROUTES.SIGNUP}>
                find businesses
              </LandingPage.Link>
              <LandingPage.Link to={ROUTES.SIGNUP}>about us</LandingPage.Link>
              <LandingPage.Link to={ROUTES.SIGNUP}>criteria</LandingPage.Link>
              <LandingPage.Link to={ROUTES.SIGNUP}>
                meet the team
              </LandingPage.Link>
            </LandingPage.Links>
          </LandingPage.Navbar>
          <LandingPage.Title>SUB</LandingPage.Title>
          <LandingPage.SubTitle>
            Shop and dine at climate concious businesses
          </LandingPage.SubTitle>
          <LandingPage.Description>
            Find local and online businesses rethinking traditional consumerism
            and shifting towards sustainable business practices{" "}
          </LandingPage.Description>
          <LandingPage.Button>Find Businesses</LandingPage.Button>
        </LandingPage.LeftSect>
        <LandingPage.RightSect>
          <LandingPage.CardOne
            src="BallardMarket.jpg"
            label="Ballard Market"
            type="Clothing Store $$$"
          />
          <LandingPage.CardTwo
            src="Corner42.png"
            label="Corner 42"
            type="Grocery Store $$"
          />
          <LandingPage.CardThree
            src="IndianMarket.png"
            label="Indian Market"
            type="Grocery Store $$"
          />
          <LandingPage.Ellipse />
          <LandingPage.SmallEllipse />
        </LandingPage.RightSect>
      </LandingPage>
    </>
  );
}
