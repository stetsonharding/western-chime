import React from "react";
import GrandTotal from "./GrandTotal";

function SubtotalAndTaxes({ formatPrice, taxes, grandTotal, subTotal }) {
  return (
    <div className="pricing-container">
      <strong>Subtotal: {formatPrice(subTotal)}</strong>
      <strong>Taxes: {formatPrice(taxes)}</strong>
      <GrandTotal grandTotal={grandTotal} formatPrice={formatPrice} />
    </div>
  );
}

export default SubtotalAndTaxes;
