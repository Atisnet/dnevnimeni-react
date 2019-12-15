import React from "react";
import Grid from "@material-ui/core/Grid";
import RestaurantGrid from '../../components/restaurant-grid/restaurant-grid'
import Services from "../../components/services/services";
import Divider from "@material-ui/core/Divider";

const HomePage = () => {
  return (
    <div>
      <Services />
      <h3 style={{ textAlign: "center" }}>Restaurants we found in your area</h3>
      <Divider />
      <br />
      <RestaurantGrid />
    </div>
  );
};

export default HomePage;
