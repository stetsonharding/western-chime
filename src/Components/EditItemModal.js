import React from "react";

import "../css/EditCartItemModal.css";
function EditItemModal({ setEditedCartItem, editedCartItem }) {
  return (
    <div className="modal-background">
      <div className="modal-content modal-size">
        <div className="editModal-header">
          <button
            className="close-button"
            type="button"
            onClick={() => setEditedCartItem({})}
          >
            &#10006;
          </button>
          <h3 className="modal-title">Edit Order</h3>
        </div>
      </div>
    </div>
  );
}

export default EditItemModal;
