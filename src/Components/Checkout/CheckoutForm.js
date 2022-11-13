import React from "react";

import "../../css/CheckoutForm.css";

function CheckoutForm() {
  return (
    <div className="checkout-form-container">
      <h1 className="checkout-title">Billing Address</h1>
      <form className="Checkout-form">
        <input type="text" className="form-name" placeholder="First Name" />
        <input type="text" className="form-name" placeholder="Last Name" />
        <input
          type="email"
          className="form-email"
          placeholder="Example@email.com"
        />
        <input type="text" className="form-address" placeholder="Address" />
        <input
          type="text"
          className="form-address"
          placeholder="Address 2 (optional)"
        />
        <select type="option" className="form-country" placeholder="Country" />
        <select type="text" className="form-state" placeholder="State" />
        <input type="text" className="form-zip" placeholder="Zip" />
      </form>
      <div className="checkout-button-container">
        <button className="checkout-button">Submit Order</button>
      </div>
    </div>
  );
}

export default CheckoutForm;
