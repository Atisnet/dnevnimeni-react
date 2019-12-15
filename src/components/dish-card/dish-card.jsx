import React from "react";
import "./dish-card.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  card: {
    maxWidth: 445,
    pointerEvents: "none"
  },
  cardMedia: {
    pointerEvents: "auto"
  }
});

const DishCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to="/restaurantpage/dishpage">
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image="https://via.placeholder.com/150"
            title="Contemplative Reptile"
            className={classes.cardMedia}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dish
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            necessitatibus expedita praesentium ipsa esse dolores cupiditate eos
            nostrum molestiae labore.
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            100gr
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            8 BAM
          </Typography>
          <Fab
            color="primary"
            size="small"
            aria-label="favorite"
            className="fav-btn-section"
          >
            <FavoriteIcon />
          </Fab>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DishCard;
