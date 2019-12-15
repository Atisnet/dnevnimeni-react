import React from 'react';
import './checkout-item.css';

const CheckoutItem = () => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={"https://via.placeholder.com/150"} alt="item" />
            </div>
            <span className="name">{"Product name"}</span>
            <span className="quantity">
                <div className="arrow">&#10094;</div>
                <span className="value">{"3"}</span>
                <div className="arrow">&#10095;</div>
            </span>
            <span className="price">{"13"}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckoutItem;