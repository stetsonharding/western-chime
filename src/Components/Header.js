import React from "react";
// //images
// import ShoppingCart from "../Assets/ShoppingCart.png";
//css
import "../css/Header.css";

import { ShoppingCartBadge } from "./ShoppingCartBadge";

function Header({ cartItems, setCartItems }) {
  return (
    <div className="header-container">
      <div className="header-slogan-container">
        <h1 className="header-title slogan">Western Chime</h1>
        <h3 className="header-subtitle slogan">The Saloon for cowboys.</h3>
      </div>
      <ShoppingCartBadge cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default Header;
