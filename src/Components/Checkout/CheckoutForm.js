import React from "react";

import "../../css/CheckoutForm.css";

function CheckoutForm({ userInfo, setUserInfo }) {
  function handleChange(evt) {
    const value = evt.target.value;
    setUserInfo({
      ...userInfo,
      [evt.target.name]: value,
    });
  }

  console.log(userInfo);

  return (
    <div className="checkout-form-container">
      <h1 className="checkout-title">Billing Address</h1>
      <form className="checkout-form">
        <input
          type="text"
          name="firstName"
          className="form-name"
          value={userInfo.firstname}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={userInfo.lastName}
          className="form-name"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={userInfo.email}
          className="form-email"
          placeholder="Example@email.com"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          value={userInfo.address}
          className="form-address"
          placeholder="Address"
          onChange={handleChange}
        />
        <input
          type="text"
          name="addressTwo"
          value={userInfo.addressTwo}
          className="form-address"
          placeholder="Address 2 (optional)"
          onChange={handleChange}
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
