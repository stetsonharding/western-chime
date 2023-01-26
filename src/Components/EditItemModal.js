import React from "react";

import "../css/EditCartItemModal.css";
function EditItemModal({ setEditedCartItem, editedCartItem }) {
  return (
    <div className="modal-background">
      <div className="edit-item-modal">
        <div className="">
          <div
            className="edit-cart-item-header"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button
              onClick={() => setEditedCartItem({})}
              type="button"
              aria-label="edit"
            >
              X
            </button>
            {/* <h3>Update Cart</h3> */}
          </div>
          <h2 className="edit-item-title">{editedCartItem.name}</h2>

          <div className="edit-item-information">
            <img
              src={editedCartItem.image_url}
              alt="Beverage"
              width="40px"
              height="150px"
            />
            <h5>
              {editedCartItem.qty} @ ${editedCartItem.srm.toFixed(2)}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditItemModal;
