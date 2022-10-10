import React from "react";

import "../css/CartItems.css";

function CartItems({ cartItem }) {
  return (
    <div className="cart-items">
      <div className="beverage-image">
        <img src={cartItem.image_url} alt="" width="20px" height="78" />
      </div>
      <div className="beverage-information-container">
        <p id="name" className="informationz">
          {cartItem.name}
        </p>
        <p id="price" className="information">
          ${cartItem.srm}
        </p>
      </div>
      <div className="delete-beverage">
        <input id="delete-item" type="button" value="X" />
      </div>
    </div>
  );
}

export default CartItems;
