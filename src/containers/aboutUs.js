import React from "react";
import { AboutUs } from "../components";

export function AboutUsContainer() {
  return (
    <AboutUs>
      <AboutUs.Side>
        <AboutUs.Links>
          <AboutUs.Link myID="/about/#about">About Us</AboutUs.Link>
          <AboutUs.Link myID="/about/#team">Sub Team</AboutUs.Link>
          <AboutUs.Link myID="/about/#involved">Get Involved</AboutUs.Link>
        </AboutUs.Links>
      </AboutUs.Side>
      <AboutUs.Main>
        <AboutUs.AboutSec>
          <AboutUs.Images>
            <AboutUs.IceCream
              src="IceCream"
              width="200px"
              top="2%"
              left="10%"
            />
            <AboutUs.Water src="Water" width="120px" top="23%" left="41%" />
            <AboutUs.ToothBrush
              src="ToothBrush"
              width="200px"
              top="53%"
              left="18%"
            />
            <AboutUs.Circles top="15%" left="40%" />
            <AboutUs.Circles top="46%" left="5%" />
            <AboutUs.Circles top="55%" left="47%" />
          </AboutUs.Images>
          <AboutUs.Text>
            <AboutUs.Title id="about">About Us</AboutUs.Title>
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
          <AboutUs.Title>
            <span id="team">SUB Team</span>
          </AboutUs.Title>
          <AboutUs.SecDescription>
            A ragtag team of UW students deciding to give a damn about the
            environment, in the most enjoyable way possible.
          </AboutUs.SecDescription>
          <AboutUs.Cards>
            <AboutUs.Card>
              <AboutUs.Frame
                background="#D4E9D6"
                src="yuyu_madigan"
                person="YuYu Madigan"
                position="President"
                color="#ffffff"
              ></AboutUs.Frame>
              <AboutUs.SecCircles />
              <AboutUs.TextArea linkedin="http://www.linkedin.com/in/fymadiagn">
                YuYu is a fourth-year undergraduate student majoring in
                economics with a minor in informatics, data science, and
                entrepreneurship. YuYu is one of the student-leads. The SUB
                Initiative was born from ReThink UW to create a sustainable but
                cross-disciplinary project that would engage their three central
                values: business, sustainability, and technology. <br /> <br />
                Her responsibilities involve team-management, goal-setting, and
                communicating with stakeholders. One way she incorporates
                sustainability in her everyday life is by reducing the use of
                single-waste plastics.
              </AboutUs.TextArea>
            </AboutUs.Card>
            <AboutUs.Card>
              <AboutUs.Frame
                background="#ffffff"
                src="aditi_joshi"
                person="Aditi Joshi"
                position="Developer"
                color="#BBBBBD"
              ></AboutUs.Frame>
              <AboutUs.SecCircles />
              <AboutUs.TextArea linkedin="https://www.linkedin.com/in/aditi-joshi-019405190/">
                Aditi Joshi is a second-year undergraduate majoring in computer
                science and minoring in environmental studies. For Aditi, the
                SUB initiative is an opportunity to work on big-scale projects
                while exploring how technology can instigate positive ecological
                outcomes. <br /> <br />
                Her primary responsibility is to work with the development team
                to create backend pipelines to display all of the business
                information on the website. Additionally, she also works on the
                landing page. To help mitigate environmental damage, she has
                switched to using soap bars instead of the bottled ones that
                produce unnecessary waste.
              </AboutUs.TextArea>
            </AboutUs.Card>
            <AboutUs.Card>
              <AboutUs.Frame
                background="#ffffff"
                src="leary_lebanlic"
                person="Leary Lebanlic"
                position="UI/UX Designer"
                color="#BBBBBD"
              ></AboutUs.Frame>
              <AboutUs.SecCircles />
              <AboutUs.TextArea linkedin="https://www.linkedin.com/in/learylabanlic/">
                Leary is a third-year undergraduate student majoring in
                community, environment and planning while minoring in
                architectural design, informatics, and entrepreneurship. Leary
                joined the SUB Initiative to try his hand at designing a
                web-app. <br /> <br />
                His role is to help design and create wireframes for both the
                mobile application and website to align with the team’s vision.
                Leary aims to become more energy efficient through unplugging
                unnecessary electrical appliances, especially when they are
                unused.
              </AboutUs.TextArea>
            </AboutUs.Card>
            <AboutUs.Card>
              <AboutUs.Frame
                background="#D4E9D6"
                src="devon_chapman"
                person="Devon Chapman"
                position="Researcher"
                color="#ffffff"
              ></AboutUs.Frame>
              <AboutUs.SecCircles />
              <AboutUs.TextArea linkedin="http://www.linkedin.com/in/devontchapman">
                Devon is a fourth-year undergraduate student majoring in
                political science with a minor in environmental studies. Devon
                is on the research team and is highly passionate about the
                intersectionality of business and sustainability. <br /> <br />
                She helps to define “sustainable” and collaborates with others
                to maximize business outreach. Devon helps the environment by
                composting, being a vegetarian, and reusing water bottles.
              </AboutUs.TextArea>
            </AboutUs.Card>
            <AboutUs.Card>
              <AboutUs.Frame
                background="#D4E9D6"
                src="grace_chun"
                person="Grace Chun"
                position="Researcher"
                color="#ffffff"
              ></AboutUs.Frame>
              <AboutUs.SecCircles />
              <AboutUs.TextArea linkedin="https://www.linkedin.com/in/ghchun/">
                Grace is a fourth-year undergraduate student majoring in
                international studies with a minor in informatics and
                entrepreneurship. In hopes of diving deeper into
                sustainability-related topics, she joined the SUB Initiative.
                <br /> <br />
                Grace is part of the research team that conducts surveys and
                interviews to understand stakeholders better to define what it
                means to be a “sustainable business.” When she is out and about,
                she always uses containers and boxes to reduce waste.
              </AboutUs.TextArea>
            </AboutUs.Card>
            <AboutUs.Card>
              <AboutUs.Frame
                background="#ffffff"
                src="kailin_spencer"
                person="Kailin Spencer"
                position="Researcher"
                color="#BBBBBD"
              ></AboutUs.Frame>
              <AboutUs.SecCircles />
              <AboutUs.TextArea linkedin="https://www.linkedin.com/in/kailinspencer/">
                Kailin is a second-year undergraduate student majoring in
                business and minoring in environmental studies. Kailin became
                part of the SUB Initiative to create a world where people can
                live in harmony with nature. <br /> <br />
                As part of the research team, she helped develop the
                sustainability criteria to verify that the small businesses in
                the Seattle area are genuinely green. One way that she is
                incorporating the green lifestyle is by adopting a meatless
                diet.
              </AboutUs.TextArea>
            </AboutUs.Card>
            <AboutUs.Card>
              <AboutUs.Frame
                background="#ffffff"
                src="julius_cecilia"
                person="Julius Cecilia"
                position="Developer"
                color="#BBBBBD"
              ></AboutUs.Frame>
              <AboutUs.SecCircles />
              <AboutUs.TextArea linkedin="https://www.linkedin.com/in/julius-cecilia/">
                Julius is a first-year undergraduate student who is planning to
                major in informatics. Because Julius wanted to contribute and
                learn from a community of developers with varying skill sets,
                the SUB initiative appealed to him. <br /> <br />
                His responsibility as a front-end developer is to optimize the
                website’s client-side by making an interactive user interface
                with JavaScript and React. On the side, he also helps to set up
                the Firebase backend services. To conserve energy, he is very
                conscious about how much water and energy he uses on a daily
                basis.
              </AboutUs.TextArea>
            </AboutUs.Card>
            <AboutUs.Card>
              <AboutUs.Frame
                background="#D4E9D6"
                src="paul_sereeyothin"
                person="Paul Sereeyothin"
                position="Marketing"
                color="#ffffff"
              ></AboutUs.Frame>
              <AboutUs.SecCircles />
              <AboutUs.TextArea linkedin="https://www.linkedin.com/in/paul-sereeyothin/">
                Paul is a fourth-year undergraduate student majoring in
                communications. He joined the SUB Initiative marketing team
                because he believes in technology and sustainability’s
                inevitable coupling as a future trend. He also saw this as an
                opportunity to increase his skills while working alongside
                others with diverse backgrounds. <br /> <br />
                His primary responsibility is to help with branding through
                copywriting, logo design, and leveraging social media to drive
                traffic to the team’s platforms. A small lifestyle change that
                he has implemented to become greener is to donate unused
                personal items to those living in Thailand’s countryside.
              </AboutUs.TextArea>
            </AboutUs.Card>
            <AboutUs.Card>
              <AboutUs.Frame
                background="#D4E9D6"
                src="brendan_tran"
                person="Brendan Tran"
                position="UI/UX Designer"
                color="#ffffff"
              ></AboutUs.Frame>
              <AboutUs.SecCircles />
              <AboutUs.TextArea linkedin="http://linkedin.com/in/brendanptran/">
                Brendan is a third-year undergraduate student majoring in
                informatics and exploring human-computer interaction. He was
                eager to join the SUB Initiation because he saw potential in
                diverse students’ collective efforts fighting toward a common
                cause. <br /> <br />
                Brendan has contributed significantly to the website design and
                ensures that users have a seamless experience with the
                interface. Outside of the SUB Initiative, he practices waste
                diversion to combat environmental degradation.
              </AboutUs.TextArea>
            </AboutUs.Card>
            <AboutUs.Card>
              <AboutUs.Frame
                background="#ffffff"
                src="kayla_lee"
                person="Kayla Lee"
                position="Developer"
                color="#BBBBBD"
              ></AboutUs.Frame>
              <AboutUs.SecCircles />
              <AboutUs.TextArea linkedin="https://www.linkedin.com/in/kaylalee44/">
                Kayla is a fourth-year undergraduate student majoring in
                informatics. Kayla joined the SUB Initiative to help encourage
                sustainability in business while refining her technical skills.
                <br /> <br />
                Her primary responsibility as a front-end developer is to help
                create the team’s website using React, JavaScript, and CSS among
                many other tools. A sustainable, daily habit that she has picked
                up is saving eggshells for her grandma’s garden.
              </AboutUs.TextArea>
            </AboutUs.Card>
          </AboutUs.Cards>
        </AboutUs.SubSec>
        <AboutUs.InvolvedSec>
          <AboutUs.Title id="involved">Get Involved</AboutUs.Title>
          <AboutUs.Heading>How to get involved</AboutUs.Heading>
          <AboutUs.SecTitle>SUB Team</AboutUs.SecTitle>
          <AboutUs.Description>
            Apply now to be part of the SUB Team!
          </AboutUs.Description>
          <AboutUs.Description>
            Positions Available: Marketing, Business Development, Researchers,
            Back End Developers, Front End Developers
          </AboutUs.Description>
          <AboutUs.Btn>Apply</AboutUs.Btn>
        </AboutUs.InvolvedSec>
        <AboutUs.OtherClubsSec>
          <AboutUs.SecTitle>Other Clubs</AboutUs.SecTitle>
          <AboutUs.Description>
            Clubs at UW focused on environmental sustainability:
          </AboutUs.Description>
          <AboutUs.ClubCards>
            <AboutUs.ClubCard>
              <AboutUs.ClubImage src="seed" />
              <AboutUs.ClubName>SEED</AboutUs.ClubName>
              <AboutUs.ClubDescription>
                Sustainability club for students living in residence halls.
              </AboutUs.ClubDescription>
              <AboutUs.LearnMore>Learn More</AboutUs.LearnMore>
            </AboutUs.ClubCard>
            <AboutUs.ClubCard>
              <AboutUs.ClubImage src="Farm" />
              <AboutUs.ClubName>UW Farm</AboutUs.ClubName>
              <AboutUs.ClubDescription>
                Opportunities for hands-on agricultural learning at UW.
              </AboutUs.ClubDescription>
              <AboutUs.LearnMore>Learn More</AboutUs.LearnMore>
            </AboutUs.ClubCard>
            <AboutUs.ClubCard>
              <AboutUs.ClubImage src="EcoReps" />
              <AboutUs.ClubName>UW EcoReps</AboutUs.ClubName>
              <AboutUs.ClubDescription>
                Connecting students with sustainability projects.
              </AboutUs.ClubDescription>
              <AboutUs.LearnMore>Learn More</AboutUs.LearnMore>
            </AboutUs.ClubCard>
            <AboutUs.ClubCard>
              <AboutUs.ClubImage src="Solar" />
              <AboutUs.ClubName>UW Solar</AboutUs.ClubName>
              <AboutUs.ClubDescription>
                Students working to increase and promote solar power at UW.
              </AboutUs.ClubDescription>
              <AboutUs.LearnMore>Learn More</AboutUs.LearnMore>
            </AboutUs.ClubCard>
          </AboutUs.ClubCards>
        </AboutUs.OtherClubsSec>
        <AboutUs.LocalOrgsSec>
          <AboutUs.Heading>
            Some local organizations that we support
          </AboutUs.Heading>
          <AboutUs.Description>
            These organizations use their platform to educate the public on ways
            to protect the environment in order to live more sustainably.
          </AboutUs.Description>
          <AboutUs.Organizations>
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
        <AboutUs.WeeklySec>
          <AboutUs.Heading>Check out our weekly features</AboutUs.Heading>
          <AboutUs.Description>
            Help preserve the environment by donating to these places!
          </AboutUs.Description>
        </AboutUs.WeeklySec>
      </AboutUs.Main>
    </AboutUs>
  );
}
