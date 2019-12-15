import React from "react";
import Grid from "@material-ui/core/Grid";
import RestaurantCard from "../restaurant-card/restaurant-card";

const RestaurantGrid = () => {
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4} spacing={3}>
          <RestaurantCard />
        </Grid>
        <Grid item xs={12} md={4} spacing={3}>
          <RestaurantCard />
        </Grid>
        <Grid item xs={12} md={4} spacing={3}>
          <RestaurantCard />
        </Grid>
        <Grid item xs={12} md={4} spacing={3}>
          <RestaurantCard />
        </Grid>
        <Grid item xs={12} md={4} spacing={3}>
          <RestaurantCard />
        </Grid>
        <Grid item xs={12} md={4} spacing={3}>
          <RestaurantCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantGrid;
