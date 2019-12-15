import React from "react";
import "./dish-page.css";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import DishExtras from "../../components/dish-extras/dish-extras";
import Button from '@material-ui/core/Button';

const DishPage = () => {
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
            Dish name
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            component="p"
            style={{ marginLeft: "20px" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, cumque
            ex? Corrupti pariatur ipsum repellendus officiis quod architecto
            quidem libero?
          </Typography>
          <br />
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            style={{ marginLeft: "20px" }}
          >
            100gr
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            style={{ marginLeft: "20px" }}
          >
            8BAM
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
      >
        <Grid item xs={12}>
          <DishExtras />
          
        </Grid>
        <Grid container spacing={0} justify="center" className="add-to-cart-container">
        <span>
          <span className="arrow">&#10094;</span>
          <span >{"1"}</span>
          <span className="arrow">&#10095;</span>
        </span>
      </Grid>
      <Grid container spacing={0} justify="center" className="add-to-cart-container">
      <Button variant="contained" className="add-to-cart-btn">Add to Cart</Button>
      </Grid>

        
      </Grid>
      
    </div>
  );
};

export default DishPage;
