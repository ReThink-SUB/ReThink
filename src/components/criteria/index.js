import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./styles/criteria.css";

export default function Container() {
  return (
    <div className="container">
      <div className="text-content">
        <h1>So how do we know businesses are <em>actually</em> being sustainable?</h1>
        <div className="centered">
          <h1>Criteria</h1>
          <p>We have conducted <em>research</em> on characteristics of businesses that maximize sustainbility. We have implemented a certification <em>system</em> to reward busineses for specific eco-friendly categories.</p>
        </div>
        <CriteriaCat title="Sustainable Ingredients and Foods" content="hello"/>
        <CriteriaCat title="Resource Management" content="hello"/>
        <CriteriaCat title="Waste Management" content="hello"/>
        <CriteriaCat title="Beyond the Business" content="hello"/>
        <CriteriaCat title="Company Demographic" content="hello"/>
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
    backgroundColor: '#DCFFF5',
    borderRadius: '8px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    marginLeft: '1.2em',
  },
}));

export function CriteriaCat(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
        >
          <circle></circle>
          <Typography className={classes.heading}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}