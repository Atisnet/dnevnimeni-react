import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./sign-up.css";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  btnSignUp: {
    width: "40%",
    marginTop: 10,
    '&:hover' : {
        backgroundColor: "#000",
        color: "#fff"
      }
  }
}));

const SignUp = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Typography variant="h5" component="h5">I do not have a account</Typography>
        <br />
        <Typography>Sign up with your email and password</Typography>
        <form noValidate autoComplete="off" className={classes.form}>
          <TextField id="displayName" label="Display Name" />
          <TextField id="email" label="Email" />
          <TextField id="password" type="password" label="Password" />
          <TextField
            id="confirmPassword"
            type="password"
            label="Confirm Password"
          />
          <Button variant="outlined" fullWidth className={classes.btnSignUp}>
            Sign Up
          </Button>
        </form>
      </Grid>
    </div>
  );
};

export default SignUp;
