import React from "react";
import "./checkout.css";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import Button from '@material-ui/core/Button';

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove </span>
        </div>
      </div>
      <CheckoutItem />
      <CheckoutItem />
      <CheckoutItem />
      <div className="total">
        <span className="total">TOTAL: {"13"}BAM</span>
      </div>
      <Button variant="contained" className="checkout-btn">Checkout</Button>
    </div>
  );
};

export default CheckoutPage;
