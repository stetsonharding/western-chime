import React from "react";

import { Link } from "react-router-dom";

import mainBackground from "../../Assets/card-background.jpg";

let container = {
  width: "66.2vw",
  backgroundColor: "blue",
  height: "60vh",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${mainBackground})`,
};

let messageContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

let message = {
  fontSize: "45px",
  letterSpacing: "1px",
};

let btn = {
  padding: "8px",
  color: "white",
  backgroundColor: "#7b3018",
  width: "20%",
  cursor: "pointer",

  btnhover: {
    border: "1px solid white",
  },
};

function OrderPlaced({ userInfo, setCartItems, setFavoritedBeverages }) {
  function clearAllData() {
    setCartItems([]);
    setFavoritedBeverages([]);
  }
  return (
    <div style={container}>
      <div style={messageContainer}>
        <h1 style={message}>
          Thank you for your order, {userInfo.firstName} {userInfo.lastName}!
        </h1>
        <Link to="/" onClick={() => clearAllData()}>
          <button style={btn}>Start Over</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderPlaced;
