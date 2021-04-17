import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./styles/criteria.css";

export default function Container() {
  let one = [
              'Natural',
              'USDA Organic',
              'Fair Trade',
              'Certified Humane',
              'Food Alliance Certification',
              'Non-GMO',
              'Local',
              'Rainforest Alliance Certified',
              'Certified Animal Welfare Approved'
            ];
  let two = [
              'No GMO',
              'Provides vegetarian and vegan options',
              'No animal testing',
              'Implements ethical farming practices',
              'Sources ingredients from Pacific Northwest farms (Washington, Oregon, Idaho)',
              'Buy from regional farms',
              'Little to no perservatives on farm',
              'No pesticides',
              'Uses certified organic products',
              'Farm certifications: Certified Humane, Animal Welfare Approved, American Grass-fed, American Humane Certified, Global Animal Partnership 4, 5, and 5+'
            ];
  let three = [
                '50% of applicances are certified by Energy Star (refrigerators, microwaves, dishwasher, HVAC, etc)',
                'Uses LED lights',
                'Automatic lights',
                'Uses environmentally-friendly cleaning products',
                'Touchless sensor faucets',
                'Dual flush toilet system',
                'Building is RainWater certified',
                'Building reuses greywater for irrigation/plumbing',
                'Check box for using rented spaces --> we understand small businesses aren\'t able to do all of these'
              ];
  let four = [
              'Integrates compost and recycling bins',
              'Uses compostable and/or reusable supplies (ex. utensils, cups, napkins, trays, glasses, seat covers, etc.)',
              'Uses compostable and/or recyclable packaging',
              'Practices waste reduction in the office (supplies, paperless)',
              'Donates extra and leftover food and/or products',
              'Has pictures of what goes where for trash sorting',
              'Provides reusable dishes for inperson dining',
              'Donates or sells imperfect ingredients'
            ];
  let five = [
              'Posts accurate info on social media accounts and websites',
              'Educates staff about sustainability and sustainable business practices',
              'Charitable goods for community',
              'Transparency in practices',
              'Actively attempts to increase and support environmental justices and campaigns',
              'Overall supports community and is transparent with them'
            ];
  let six = [
              'Good working conditions',
              'Family-owned',
              'Minority-owned',
              'BIPOC-owned',
              'Woman-owned',
              'Disabled-owned'
            ];

  return (
    <div className="container">
      <div className="text-content">
        <h1>So how do we know businesses are <em>actually</em> being sustainable?</h1>
        <div className="criteria-txt">
          <h1>Criteria</h1>
          <p>We have conducted <em>research</em> on characteristics of businesses that maximize sustainbility. We have implemented a certification <em>system</em> to reward busineses for specific eco-friendly categories.</p>
        </div>
        <CriteriaCat title="Certifications" content={one}/>
        <CriteriaCat title="Sustainable Ingredients and Foods" content={two}/>
        <CriteriaCat title="Resource Management" content={three}/>
        <CriteriaCat title="Waste Management" content={four}/>
        <CriteriaCat title="Beyond the Business" content={five}/>
        <CriteriaCat title="Other Badges" content={six}/>
      </div>
      <div className="image">
        <img src={process.env.PUBLIC_URL + '/images/criteria_img.png'} />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '.4em',
  },
  summary: {
    backgroundColor: '#A9D0A9',
    borderRadius: '10px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightMedium,
    marginLeft: '.2em',
    color: '#535461',
  },
}));

export function CriteriaCat(props) {
  const classes = useStyles();
  let arr = props.content;

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
        >
          <Typography className={classes.heading}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {arr.map((point) => {
              return <Bullet text={point}/>
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function Bullet(props) {
  return <p><i className="fa fa-check-circle-o" aria-hidden="true"/>&nbsp;{props.text}</p>
}