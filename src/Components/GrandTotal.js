import React from "react";

function GrandTotal({ grandTotal, formatPrice, ...props }) {
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        paddingLeft: "10px",
      }}
    >
      <strong>
        <span
          style={{
            color: props.headingColor,
            fontSize: "28px",
            width: "100%",
            letterSpacing: "2px",
          }}
        >
          Grand Total:{" "}
        </span>
        <span
          style={{
            color: props.totalColor,
            width: "100%",
            letterSpacing: "2px",
          }}
        >
          {formatPrice(grandTotal)}
        </span>
      </strong>
    </div>
  );
}

export default GrandTotal;
