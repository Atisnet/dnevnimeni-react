import React from "react";
//import "./dish-extras.css";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

const DishExtras = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let size;
  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Size</Typography>
          <Typography className={classes.secondaryHeading}>
            Choose size of a dish
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend"></FormLabel>
            <RadioGroup
              aria-label="size"
              name="size"
              value={size}
              onChange={handleChange}
            >
              <FormControlLabel
                value="small"
                control={<Radio />}
                label="100gr - 8 BAM"
              />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="100gr - 10 BAM"
              />
              <FormControlLabel
                value="large"
                control={<Radio />}
                label="100gr - 12 BAM"
              />
            </RadioGroup>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Extras</Typography>
          <Typography className={classes.secondaryHeading}>
            Select if you want any of our extras
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox value="Ketchup" />}
                label="Ketchup"
              />
              <FormControlLabel
                control={<Checkbox value="Salad" />}
                label="Salad"
              />
              <FormControlLabel
                control={<Checkbox value="Cheese" />}
                label="Cheese"
              />
            </FormGroup>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            Special instructions
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Tell us if you have any specific desires about this dish.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl
            className={classes.root}
            noValidate
            autoComplete="off"
            fullWidth="true"
          >
            <TextField
              id="special-instructions"
              className={classes.root}
              fullWidth
            />
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>     
    </div>
  );
};

export default DishExtras;
