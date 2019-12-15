import React from "react";
import "./services.css";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import InvertColorsOutlinedIcon from '@material-ui/icons/InvertColorsOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  form: {
    marginBottom: "20px"
  }
}));

const Services = () => {
  const classes = useStyles();

  //temporarily, same as value in input down below
  const address = "Klosterska, 5D Brčko";

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          //expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="panel-details"
        >
          <Typography className={classes.heading}></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="panel-details">
          <form className={classes.form} noValidate autoComplete="off">
            <Typography></Typography>
            <TextField id="outlined-basic" variant="outlined" value={address} />
          </form>
          <span className="services-list">
            <Typography>Choose service</Typography>
            <ul>
              <li>
                <IconButton aria-label="add to favorites">
                  <RestaurantMenuOutlinedIcon />
                </IconButton><span className="number-of-services">{"13"}</span>
                <br />
                <span>Restorani</span>
              </li>
              <li>
                <IconButton aria-label="add to favorites">
                  <MenuBookOutlinedIcon />
                </IconButton><span className="number-of-services">{"24"}</span>
                <br />
                <span>Dnevni Meni</span>
              </li>
              <li>
                <IconButton aria-label="add to favorites">
                  <LocalBarOutlinedIcon />
                </IconButton><span className="number-of-services">{"35"}</span>
                <br />
                <span>Barovi</span>
              </li>
              <li>
                <IconButton aria-label="add to favorites">
                  <ShoppingBasketOutlinedIcon />
                </IconButton><span className="number-of-services">{"35"}</span>
                <br />
                <span>Ketering</span>
              </li>
              <li>
                <IconButton aria-label="add to favorites">
                  <InvertColorsOutlinedIcon />
                </IconButton><span className="number-of-services">{"35"}</span>
                <br />
                <span>Voda</span>
              </li>
            </ul>
          </span>
          <Button className="filter-services-btn" variant="outlined">
            Filter
          </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Services;
