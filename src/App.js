import React from "react";
import './App.css'
import { Route, Switch, Redirect } from "react-router-dom";

import Feedback from "./pages/feedback/feedback";
import HomePage from "./pages/homepage/homepage";
import OrderHistory from "./pages/order-history/order-history";
import Settings from "./pages/settings/settings";
import RestaurantPage  from "./pages/restaurant-page/restaurant-page";
import CategoryPage from "./pages/category-page/category-page";
import DishPage from "./pages/dish-page/dish-page";
import SideMenu from './components/sidemenu/sidemenu';
import CheckoutPage from './pages/checkout/checkout';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

const App = () => {
  return (
    <div className="viewport">
      <SideMenu />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/order-history" exact component={OrderHistory} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/restaurantpage" exact component={RestaurantPage} />
        <Route path="/restaurantpage/categorypage" exact component={CategoryPage} />
        <Route path="/restaurantpage/dishpage" exact component={DishPage} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <Route path="/signin" exact component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
