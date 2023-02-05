import React, { useEffect } from "react";
import QuantityCounter from "../Components/QuantityCounter";

import "../css/EditCartItemModal.css";

function EditItemModal({
  setEditedCartItem,
  editedCartItem,
  beverages,
  setQuantity,
  quantity,
  setBeverages,
  cartItems,
  setCartItems,
}) {
  useEffect(() => {
    setQuantity(editedCartItem.qty);
  }, [editedCartItem, setQuantity]);

  //update the quantity of a cart item when 'edit' button is clicked.
  const updateItem = (editedItem) => {
    const usersCart = [...cartItems];
    editedItem.qty = quantity;
    editedItem.quantityConfirm = false;

    setCartItems([
      ...usersCart.filter((item) => item.id !== editedItem.id),
      editedItem,
    ]);

    //updated beverages based on cart items.
    //if a cart item is changed to quantity of 4, beverages need to show that
    // *Need to find a better solution*
    let updated = beverages.map((item) => {
      if (item.id === editedItem.id) {
        return {
          ...item,
          qty: quantity,
        };
      }
      return item;
    });
    setBeverages(updated);
    setTimeout(() => {
      setEditedCartItem({});
    }, 400);
  };

  return (
    <div className="modal-background">
      <div className="edit-cartItem-modal">
        <div className="edit-cartItem-header">
          <button
            onClick={() => setEditedCartItem({})}
            type="button"
            aria-label="edit"
            className="edit-cartItem-closeBtn"
          >
            X
          </button>
        </div>
        <h2 className="edit-cartItem-title">{editedCartItem.name}</h2>
        <div className="edit-cartItem-information">
          <img
            src={editedCartItem.image_url}
            alt="Beverage"
            width="50px"
            height="220px"
          />
          <h3>
            {editedCartItem.qty} @ ${editedCartItem.srm.toFixed(2)}
          </h3>
        </div>
        {/* QuantityCOunter here*/}
        <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
        <button
          className="confirm-edit-btn"
          onClick={() => updateItem(editedCartItem)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default EditItemModal;
