import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./styles/criteria.css";

const useStyles = makeStyles((theme) => ({
  summary: {
    backgroundColor: '#DCFFF5',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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