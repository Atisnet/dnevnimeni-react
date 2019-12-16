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
import RestaurantMenuOutlinedIcon from "@material-ui/icons/RestaurantMenuOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import LocalBarOutlinedIcon from "@material-ui/icons/LocalBarOutlined";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import InvertColorsOutlinedIcon from "@material-ui/icons/InvertColorsOutlined";

import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MyLocationOutlinedIcon from "@material-ui/icons/MyLocationOutlined";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  form: {
    marginBottom: "20px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  locationInput: {
    padding: "2px 4px",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    width: 400
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
            <Typography className={classes.heading}>
              Choose delivery address
            </Typography>
            <br />
            <Paper component="form" className={classes.locationInput}>
              <IconButton className={classes.iconButton} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton
                color="primary"
                className={classes.iconButton}
                aria-label="directions"
              >
                <MyLocationOutlinedIcon />
              </IconButton>
            </Paper>
          </form>
          <span className="services-list">
            <Typography>Choose service</Typography>
            <ul>
              <li>
                <IconButton aria-label="add to favorites">
                  <RestaurantMenuOutlinedIcon />
                </IconButton>
                <span className="number-of-services">{"13"}</span>
                <br />
                <span>Restorani</span>
              </li>
              <li>
                <IconButton aria-label="add to favorites">
                  <MenuBookOutlinedIcon />
                </IconButton>
                <span className="number-of-services">{"24"}</span>
                <br />
                <span>Dnevni Meni</span>
              </li>
              <li>
                <IconButton aria-label="add to favorites">
                  <LocalBarOutlinedIcon />
                </IconButton>
                <span className="number-of-services">{"35"}</span>
                <br />
                <span>Barovi</span>
              </li>
              <li>
                <IconButton aria-label="add to favorites">
                  <ShoppingBasketOutlinedIcon />
                </IconButton>
                <span className="number-of-services">{"35"}</span>
                <br />
                <span>Ketering</span>
              </li>
              <li>
                <IconButton aria-label="add to favorites">
                  <InvertColorsOutlinedIcon />
                </IconButton>
                <span className="number-of-services">{"35"}</span>
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
