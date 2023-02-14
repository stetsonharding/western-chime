import React from "react";
import GrandTotal from "./GrandTotal";

function SubtotalAndTaxes({
  //formatPrice,
  taxes,
  grandTotal,
  subTotal,
  totalColor,
  headingColor,
}) {
  function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <div className="pricing-container">
      <strong>Subtotal: {formatPrice(subTotal)}</strong>
      <strong>Taxes: {formatPrice(taxes)}</strong>
      <GrandTotal
        grandTotal={grandTotal}
        formatPrice={formatPrice}
        totalColor={totalColor}
        headingColor={headingColor}
      />
    </div>
  );
}

export default SubtotalAndTaxes;
