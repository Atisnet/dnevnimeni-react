import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  user: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  bigAvatar: {
    width: 120,
    height: 120
  },
  userName: {
    marginTop: 10
  },
  formInput: {
    margin: 10
  },
  addButton: {
    marginTop: 9
  },
  myAddressInput: {
    width: "50%",
    margin: 10
  },
  saveSettings: {
    margin: 10,
    flexBasis: 100
  },
  form: {
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.user}>
        <Avatar
          alt="Remy Sharp"
          src="https://via.placeholder.com/150"
          className={classes.bigAvatar}
        />
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          className={classes.userName}
        />
      </div>
      <br />
      <Grid container>
        <form noValidate autoComplete="off" className={classes.form}>
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            className={classes.formInput}
          />
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            className={classes.formInput}
          />
          <br />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            className={classes.formInput}
            fullWidth
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            className={classes.formInput}
            fullWidth
          />
          <Typography style={{ margin: 10 }}>
            Your delivery addresses
          </Typography>
          <TextField
            id="delivery-address"
            label="Address1"
            variant="outlined"
            className={classes.myAddressInput}
          />
          <Fab color="primary" aria-label="add" className={classes.addButton}>
            <AddIcon />
          </Fab>
          <br />
          <Button className={classes.saveSettings} variant="contained">
            Save
          </Button>
        </form>
      </Grid>
    </div>
  );
};

export default Settings;
