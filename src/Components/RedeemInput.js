import React, { useState } from "react";

import "../css/RedeemInput.css";

function RedeemInput({ setGrandTotal }) {
  const [userRedeemCode, setUserRedeemCode] = useState("");
  const [promoCodeError, setPromoCodeError] = useState("");
  const [promoUsed, setPromoUsed] = useState(false);

  //Checking if users input is the correct redeem code.
  function UseRedeemCode(usersRedeemCode) {
    if (usersRedeemCode === "WESTERN5") {
      setGrandTotal((prevTotal) => prevTotal - 5);
      setPromoCodeError("Discount added!");
      setPromoUsed(true);
    } else {
      setPromoCodeError("Incorrect promo code!");
    }
  }

  return (
    <div className="redeem-input-container">
      <form>
        <input
          className="redeem-input"
          type="text"
          placeholder="Redeem Code"
          value={userRedeemCode}
          onChange={(e) => setUserRedeemCode(e.target.value)}
        />
        <input
          className="redeem-input redeem-btn"
          type="button"
          value="Redeem"
          disabled={promoUsed ? true : false}
          onClick={() => UseRedeemCode(userRedeemCode)}
        ></input>
      </form>
      <div className="redeem-code-success">
        <span style={{ color: "red" }}>
          {" "}
          <i>{promoCodeError !== "" && promoCodeError}</i>
        </span>
      </div>
    </div>
  );
}

export default RedeemInput;
