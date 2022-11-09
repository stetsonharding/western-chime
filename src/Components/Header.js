import React from "react";
//css
import "../css/Header.css";

import ShoppingCartBadge from "./ShoppingCartBadge";

function Header({ cartItems, setCartItems, setBeverages, beverages }) {
  return (
    <div className="header-container">
      <div className="header-slogan-container">
        <h1 className="header-title slogan">Western Chime</h1>
        <h3 className="header-subtitle slogan">The Saloon for cowboys.</h3>
      </div>
      <ShoppingCartBadge
        cartItems={cartItems}
        setCartItems={setCartItems}
        setBeverages={setBeverages}
        beverages={beverages}
      />
    </div>
  );
}

export default Header;
