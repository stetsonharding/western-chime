import React from "react";
import GrandTotal from "./GrandTotal";

function SubtotalAndTaxes({
  formatPrice,
  taxes,
  grandTotal,
  subTotal,
  totalColor,
  headingColor,
}) {
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
