import React from "react";

function GrandTotal({ grandTotal, formatPrice, ...props }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <strong>
        <span style={{ color: props.headingColor, fontSize: "28px" }}>
          Grand Total:{" "}
        </span>
        <span style={{ color: props.totalColor }}>
          {formatPrice(grandTotal)}
        </span>
      </strong>
    </div>
  );
}

export default GrandTotal;
