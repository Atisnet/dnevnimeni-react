import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import "./sign-in-and-sign-up.css";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const SignInAndSignUpPage = () => {
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item md={6}>
          <SignIn />
        </Grid>
        <Grid item md={6}>
          <SignUp />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignInAndSignUpPage;
