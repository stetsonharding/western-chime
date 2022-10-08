import React from "react";
//images
import ShoppingCart from "../Assets/ShoppingCart.png";
//css
import "../css/Header.css";

function Header({ cartItems }) {
  return (
    <div className="header-container">
      <div className="header-slogan-container">
        <h1 className="header-title slogan">Western Chime</h1>
        <h3 className="header-subtitle slogan">The Saloon for cowboys.</h3>
      </div>
      <div className="shopping-cart">
        {cartItems.length > 0 && (
          <div className="cart-size">
            <p>{cartItems.length}</p>
          </div>
        )}
        <img src={ShoppingCart} height="50" width="50" alt="Shopping Cart" />
      </div>
    </div>
  );
}

export default Header;
