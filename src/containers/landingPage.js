import React from "react";
import { LandingPage } from "../components";

export function LandingPageContainer() {
  return (
    <>
      <LandingPage>
        <LandingPage.LeftSect>
          <LandingPage.SubTitle>
            Sustainability made {" "}
            <em style={{ color: "black" }}>easy.</em>
          </LandingPage.SubTitle>
          <LandingPage.InnerSect>
            <LandingPage.Description>
            Discover eco-friendly businesses for your next shopping and dining experience.{" "}
            </LandingPage.Description>
            <LandingPage.MobileCard
              src="BallardMarket.jpg"
              label="Ballard Market"
              type="Grocery Store"
            />
          </LandingPage.InnerSect>
        </LandingPage.LeftSect>
        <LandingPage.RightSect>
          <LandingPage.RightCard
            src="BallardMarket.jpg"
            label="Ballard Market"
            type="Grocery Store"
          />
          <LandingPage.LeftCard
            src="IndianMarket.png"
            label="Indian Market"
            type="Grocery Store"
          />
        </LandingPage.RightSect>
      </LandingPage>
    </>
  );
}
