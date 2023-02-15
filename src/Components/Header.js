import React, { useState } from "react";
//css
import "../css/Header.css";

import ShoppingCartBadge from "./ShoppingCartBadge";

function Header({ setEditedCartItem }) {
  const [grandTotal, setGrandTotal] = useState(0);

  return (
    <div className="header-container">
      <div className="header-slogan-container">
        <h1 className="header-title slogan">Western Chime</h1>
        <h3 className="header-subtitle slogan">The Saloon for cowboys.</h3>
      </div>
      <ShoppingCartBadge
        grandTotal={grandTotal}
        setGrandTotal={setGrandTotal}
        setEditedCartItem={setEditedCartItem}
      />
    </div>
  );
}

export default Header;
