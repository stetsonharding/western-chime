import React from "react";

import "../css/UpdateQuantityBtn.css";

function UpdateQuantityBtn({ beverage, viewItemQuantity }) {
  let updatedItem = {
    height: "30px",
    width: "90%",
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgb(250, 250, 251)",
    fontWeight: "bold",
    fontStyle: "italic",
    backgroundColor: "#7b3019",
    borderRadius: "3px",
    border: "1px solid black",

    "&:hover": {
      fontSize: "20px",
      cursor: "pointer",
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <button
        className="update-btnx"
        style={updatedItem}
        onClick={(e) => viewItemQuantity(beverage.id, e)}
      >
        Update <span> ({beverage.qty})</span>
      </button>
    </div>
  );
}

export default UpdateQuantityBtn;
