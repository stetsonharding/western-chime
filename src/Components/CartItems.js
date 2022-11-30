import React from "react";

import "../css/CartItems.css";

function CartItems({
  setCartItems,
  item,
  index,
  cartItems,
  setBeverages,
  beverages,
  cartItem,
}) {
  const removeFromCart = (index, id) => {
    const allItems = [...cartItems];
    allItems.splice(index, 1);
    setCartItems(allItems);

    updateBeverages(id);
  };

  //Changes card "add to cart" icon back to "+" if item is removed from shopping cart.
  const updateBeverages = (id) => {
    let allBeverages = [...beverages];

    let updatedBeverages = allBeverages.map((items) => {
      if (items.id === id) {
        return {
          ...items,
          isAddedToCart: false,
        };
      }
      return items;
    });
    setBeverages(updatedBeverages);
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
          ${item.srm}.00
        </p>
      </div>
      <div className="input-container">
        <input
          id="delete-item"
          type="button"
          value="X"
          onClick={() => removeFromCart(index, cartItem)}
        />
      </div>
    </div>
  );
}

export default CartItems;
