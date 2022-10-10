import React from "react";

import "../css/CartItems.css";
import Test from "../Assets/beertest.png";

function CartItems() {
  return (
    <div className="cart-items">
      <div className="beverage-image">
        <img src={Test} alt="" width="20px" height="78" />
      </div>
      <div className="beverage-information-container">
        <p id="name" className="information">
          Buzz
        </p>
        <p id="price" className="information">
          $9.00
        </p>
      </div>
      <div className="delete-beverage">
        <input id="delete-item" type="button" value="X" />
      </div>
    </div>
  );
}

export default CartItems;
