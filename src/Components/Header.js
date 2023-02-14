import React from "react";
//css
import "../css/Header.css";

import ShoppingCartBadge from "./ShoppingCartBadge";

function Header({
  //cartItems,
  // setCartItems,
  //setBeverages,
  //beverages,
  grandTotal,
  setGrandTotal,
  formatPrice,
  setEditedCartItem,
}) {
  return (
    <div className="header-container">
      <div className="header-slogan-container">
        <h1 className="header-title slogan">Western Chime</h1>
        <h3 className="header-subtitle slogan">The Saloon for cowboys.</h3>
      </div>
      <ShoppingCartBadge
        //cartItems={cartItems}
        // setCartItems={setCartItems}
        //setBeverages={setBeverages}
        // beverages={beverages}
        grandTotal={grandTotal}
        setGrandTotal={setGrandTotal}
        formatPrice={formatPrice}
        setEditedCartItem={setEditedCartItem}
      />
    </div>
  );
}

export default Header;
