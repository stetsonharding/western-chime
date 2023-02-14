import React from "react";

import { Link } from "react-router-dom";

import "../../css/OrderPlaced.css";

import OrderPlacedCowboy from "../../Assets/order-placed-cowboy.png";

function OrderPlaced({ userInfo, setUserInfo }) {
  function clearAllData() {
    // setFavoritedBeverages([]);
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
  }
  return (
    <div className="order-placed-container">
      <div className="order-placed-message-container">
        <h1 className="order-placed-message">
          Thank you for your order,{userInfo.firstName} {userInfo.lastName}!
        </h1>
        <div className="order-placed-image">
          <img src={OrderPlacedCowboy} alt="Cowboy on a horse waving" />
        </div>
        <Link to="/" onClick={() => clearAllData()}>
          <button className="order-btn">Start Over</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderPlaced;
