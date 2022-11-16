import React from "react";

import { Link } from "react-router-dom";

import "../../css/OrderPlaced.css";

function OrderPlaced({ userInfo, setFavoritedBeverages, setUserInfo }) {
  function clearAllData() {
    setFavoritedBeverages([]);
    setUserInfo({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      addressTwo: "",
      country: "",
      state: "",
      zipcode: "",
    });
    //Clear user info
  }
  return (
    <div className="order-placed-container">
      <div className="order-placed-message-container">
        <h1 className="order-placed-message">
          Thank you for your order,{userInfo.firstName} {userInfo.lastName}!
        </h1>
        <div className="order-placed-image">
          <img src="" alt="" />
        </div>
        <Link to="/" onClick={() => clearAllData()}>
          <button className="order-btn">Start Over</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderPlaced;
