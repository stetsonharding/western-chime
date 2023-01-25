import React from "react";

function EditItemModal({ setEditedCartItem, editedCartItem }) {
  return (
    <div className="modal-background">
      <div
        style={{ width: "500px", height: "500px" }}
        className="modal-content"
      >
        {editedCartItem.name}
        <button
          onClick={() => {
            setEditedCartItem({});
          }}
        >
          close
        </button>
      </div>
    </div>
  );
}

export default EditItemModal;
