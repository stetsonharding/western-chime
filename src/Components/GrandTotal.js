import React from "react";

function GrandTotal({ grandTotal, formatPrice }) {
  return (
    <>
      <strong>
        <span style={{ color: "#943c1f", fontSize: "28px" }}>Grand Total:</span>
        {formatPrice(grandTotal)}
      </strong>
    </>
  );
}

export default GrandTotal;
