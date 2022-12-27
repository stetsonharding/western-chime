import React from "react";

function UpdateQuantityBtn({ beverage, viewItemQuantity }) {
  let updatedItem = {
    height: "45px",
    width: "50%",
    fontSize: "19px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    color: "rgb(250, 250, 251)",
    fontWeight: "bold",
    fontStyle: "italic",
  };

  return (
    <div style={updatedItem} onClick={(e) => viewItemQuantity(beverage.id, e)}>
      <p style={{ padding: "0", margin: "0" }}>
        Update <span>({beverage.qty})</span>
      </p>
    </div>
  );
}

export default UpdateQuantityBtn;
