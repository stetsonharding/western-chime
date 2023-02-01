import React from "react";
import QuantityCounter from "../Components/QuantityCounter";

import "../css/EditCartItemModal.css";
function EditItemModal({
  setEditedCartItem,
  editedCartItem,
  beverages,
  setQuantity,
  quantity,
  setBeverages,
}) {
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
      </div>
    </div>
  );
}

export default EditItemModal;
