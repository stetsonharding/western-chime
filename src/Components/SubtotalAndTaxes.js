import React, { useContext } from "react";
import GrandTotal from "./GrandTotal";
//Context
import { GrandTotalContext } from "../Contexts/GrandTotalContext";
function SubtotalAndTaxes({ taxes, subTotal, totalColor, headingColor }) {
  const { formatPrice } = useContext(GrandTotalContext);

  return (
    <div className="pricing-container">
      <strong>Subtotal: {formatPrice(subTotal)}</strong>
      <strong>Taxes: {formatPrice(taxes)}</strong>
      <GrandTotal totalColor={totalColor} headingColor={headingColor} />
    </div>
  );
}

export default SubtotalAndTaxes;
