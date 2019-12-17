import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./sign-in.css";
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
  btnGroup: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10
  },
  socialSignInGroup: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },
  btnSignin: {
    width: "80%",
    '&:hover' : {
      backgroundColor: "#000",
      color: "#fff"
    }
  },
  btnSigninFacebook: {
    width: "40%",
    marginLeft: 5,
    backgroundColor: "#3C5898",
    color: "#fff",
    '&:hover' : {
      backgroundColor: "#000"
    }
  },
  btnSigninGoogle: {
    width: "40%",
    marginRight: 5,
    backgroundColor: "#EA4335",
    color: "#fff",
    '&:hover' : {
      backgroundColor: "#000"
    }
  },
}));

const SignIn = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Typography variant="h5" component="h5">I already have an account</Typography>
        <br />
        <Typography>Sign In with your email and password</Typography>
        <form noValidate autoComplete="off" className={classes.form}>
          <TextField id="email" label="Email" />
          <TextField id="password" type="password" label="Password" />
          <div className={classes.btnGroup}>
            <Button variant="outlined" fullWidth className={classes.btnSignin}>
              Sign In
            </Button>
            <div className={classes.socialSignInGroup}>
              <Button variant="outlined" className={classes.btnSigninGoogle}>
                Sign In with Google
              </Button>
              <Button variant="outlined" className={classes.btnSigninFacebook}>
                Sign In Facebook
              </Button>
            </div>
          </div>
        </form>
      </Grid>
    </div>
  );
};

export default SignIn;
