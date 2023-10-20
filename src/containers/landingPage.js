import React from "react";
import { LandingPage } from "../components";
import { ImageCarousel } from "../components/landingPage/index"

export function LandingPageContainer() {
  return (
    <>
      <LandingPage>
          <LandingPage.SubTitle>
            Sustainability made {" "}
            <em style={{ color: "black" }}>easy.</em>
          </LandingPage.SubTitle>
          <LandingPage.InnerSect>
            <LandingPage.Description>
            Discover eco-friendly businesses for your next shopping and dining experience.{" "}
            </LandingPage.Description>
          </LandingPage.InnerSect>
          <ImageCarousel />
      </LandingPage>
    </>
  );
}
