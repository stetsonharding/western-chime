import React from "react";
// //images
// import ShoppingCart from "../Assets/ShoppingCart.png";
//css
import "../css/Header.css";

import { ShoppingCartBadge } from "./ShoppingCartBadge";

function Header({ cartItems }) {
  console.log(cartItems);
  return (
    <div className="header-container">
      <div className="header-slogan-container">
        <h1 className="header-title slogan">Western Chime</h1>
        <h3 className="header-subtitle slogan">The Saloon for cowboys.</h3>
      </div>
      <ShoppingCartBadge cartItems={cartItems} />
    </div>
  );
}

export default Header;
