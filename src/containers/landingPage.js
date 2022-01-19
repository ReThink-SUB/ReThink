import React from "react";
import { LandingPage } from "../components";

export function LandingPageContainer() {
  return (
    <>
      <LandingPage>
        <LandingPage.LeftSect>
          <LandingPage.SubTitle>
            Sustainable consumerism made{" "}
            <em style={{ color: "black" }}>easy.</em>
          </LandingPage.SubTitle>
          <LandingPage.InnerSect>
            <LandingPage.Description>
              Shop, eat, and dine at climate concious businesses in your area{" "}
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
