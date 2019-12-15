import React from "react";
import "./cart-icon.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const CartIcon = () => {
  let itemCount = 1;
  return (
    <div className="cart-icon">
      <ShoppingCartIcon />
      {itemCount > 0 ? (
      <span className="item-count">{itemCount}</span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default CartIcon;
