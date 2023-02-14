import React, { useContext } from "react";

import TrashIcon from "../Assets/trash-icon.png";
import { GetBeveragesContext } from "../Contexts/GetBeveragesContext";
import { CartItemsContext } from "../Contexts/CartItemsContext";
import "../css/CartItems.css";

function CartItems({
  // setCartItems,
  item,
  // cartItems,
  //setBeverages,
  //beverages,
  setEditedCartItem,
}) {
  const { beverages, setBeverages } = useContext(GetBeveragesContext);
  const { cartItems, setCartItems } = useContext(CartItemsContext);

  const removeFromCart = (item) => {
    //Making a copy of cartItems array to not directly manipulate state.
    const cart = [...cartItems];
    //Getting all items from cart array accept the item that is passed in.
    const updatedItems = cart.filter((prevItem) => prevItem.id !== item.id);
    //Updating state for cart items
    setCartItems(updatedItems);
    //Calling this function to change "add to cart icon" back to "+" symbol.
    updateBeveragesCard(item.id);
  };

  //Changes card "add to cart" icon back to "+" if item is removed from shopping cart.
  const updateBeveragesCard = (id) => {
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

  function getEditedItem(item) {
    setEditedCartItem(item);
  }

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
          {item.qty} @ ${item.srm}.00 = ${item.qty * item.srm}
        </p>
      </div>
      <div className="deleteItem-container">
        <img
          id="delete-item"
          height="22"
          width="22"
          src={TrashIcon}
          alt="remove item icon"
          onClick={() => removeFromCart(item)}
        />
        <div className="edit-cart-item">
          <span onClick={() => getEditedItem(item)}>Edit</span>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
