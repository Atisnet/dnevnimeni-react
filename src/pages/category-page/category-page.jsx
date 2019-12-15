import React from 'react';
import Grid from '@material-ui/core/Grid';
import DishCard from '../../components/dish-card/dish-card'

const CategoryPage = () => {
    return (
        <div>
            <Grid container spacing={5}>
                <Grid item xs={12} md={4} spacing={3}><DishCard /></Grid>
                <Grid item xs={12} md={4} spacing={3}><DishCard /></Grid>
                <Grid item xs={12} md={4} spacing={3}><DishCard /></Grid>
                <Grid item xs={12} md={4} spacing={3}><DishCard /></Grid>
                <Grid item xs={12} md={4} spacing={3}><DishCard /></Grid>
                <Grid item xs={12} md={4} spacing={3}><DishCard /></Grid>
            </Grid>
        </div>
    );
}

export default CategoryPage;