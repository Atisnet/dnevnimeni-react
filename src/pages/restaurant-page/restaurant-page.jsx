import React from "react";
import CategoryCard from "../../components/category-card/category-card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const RestaurantPage = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={4}>
                  {" "}
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image="https://via.placeholder.com/150"
            title="Contemplative Reptile"
          />
        </Grid>
        <Grid item md={8}>
          <Typography
            gutterBottom
            variant="h4"
            component="h4"
            style={{ marginTop: "20px", marginLeft: "20px" }}
          >
            Ime restorana
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            component="p"
            style={{ marginLeft: "20px" }}
          >
            Open: 00:00-00:00
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            component="p"
            style={{ marginLeft: "20px" }}
          >
            Min order: 9.0 BAM
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            component="p"
            style={{ marginLeft: "20px" }}
          >
            Delivery price: Free
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            component="p"
            style={{ marginLeft: "20px" }}
          >
            Phone: 066 123 456
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <br />
      <Grid container spacing={5}>
                <Grid item xs={12} md={4} spacing={3}><CategoryCard /></Grid>
                <Grid item xs={12} md={4} spacing={3}><CategoryCard /></Grid>
                <Grid item xs={12} md={4} spacing={3}><CategoryCard /></Grid>
                <Grid item xs={12} md={4} spacing={3}><CategoryCard /></Grid>
                <Grid item xs={12} md={4} spacing={3}><CategoryCard /></Grid>
                <Grid item xs={12} md={4} spacing={3}><CategoryCard /></Grid>
            </Grid>
    </div>
  );
};

export default RestaurantPage;
