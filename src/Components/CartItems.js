import React from "react";

import "../css/CartItems.css";

function CartItems({ setCartItems, item, index, cartItems }) {
  const removeFromCart = (index) => {
    const allItems = [...cartItems];
    allItems.splice(index, 1);
    setCartItems(allItems);
  };

  return (
    <div className="cart-items">
      <div className="beverage-image">
        <img src={item.image_url} alt="" width="20px" height="78" />
      </div>
      <div className="beverage-information-container">
        <p id="name" className="informationz">
          {item.name}
        </p>
        <p id="price" className="information">
          ${item.srm}
        </p>
      </div>
      <div className="input-container">
        <input
          id="delete-item"
          type="button"
          value="X"
          onClick={() => removeFromCart(index)}
        />
      </div>
    </div>
  );
}

export default CartItems;
