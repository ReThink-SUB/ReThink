import React from "react";
import { AboutUs } from "../components";

export function BusinessesContainer() {
  return (
    <AboutUs>
      <AboutUs.Side>
        <AboutUs.Link>About Us</AboutUs.Link>
        <AboutUs.Link>Sub Team</AboutUs.Link>
        <AboutUs.Link>Get Involved</AboutUs.Link>
      </AboutUs.Side>
      <AboutUs.Main>
        <AboutUs.AboutSec>
          <AboutUs.Images>
            <AboutUs.Image src="IceCream" width="200px" top="0%" left="0%" />
            <AboutUs.Image src="Water" width="120px" top="30%" left="0%" />
            <AboutUs.Image src="ToothBrush" width="200px" top="60%" left="0%" />
            <AboutUs.Circles top="0%" left="10%" />
            <AboutUs.Circles top="30%" left="30%" />
            <AboutUs.Circles top="60%" left="50%" />
          </AboutUs.Images>
          <AboutUs.Text>
            <AboutUs.Title>About Us</AboutUs.Title>
            <AboutUs.Heading>Who we are</AboutUs.Heading>
            <AboutUs.Description>
              A community of passionate University of Washington Seattle
              students whose purpose is to transform the community by advocating
              for sustainable living at the local level.
            </AboutUs.Description>
            <AboutUs.Heading>What Businesses Should Be</AboutUs.Heading>
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
        </AboutUs.AboutSec>
        <AboutUs.SubSec>
          <AboutUs.Heading>SUB Team</AboutUs.Heading>
          <AboutUs.SecDescription>
            A ragtag team of UW students deciding to give a damn about the
            environment, in the most enjoyable way possible.
          </AboutUs.SecDescription>
          <AboutUs.Cards>
            <AboutUs.Card>
              <AboutUs.Frame></AboutUs.Frame>
            </AboutUs.Card>
          </AboutUs.Cards>
        </AboutUs.SubSec>
      </AboutUs.Main>
    </AboutUs>
  );
}
