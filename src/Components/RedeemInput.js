import React, { useState, useContext } from "react";
import { GrandTotalContext } from "../Contexts/GrandTotalContext";

import "../css/RedeemInput.css";

function RedeemInput() {
  const [userRedeemCode, setUserRedeemCode] = useState("");
  const [promoCodeError, setPromoCodeError] = useState("");
  const [promoUsed, setPromoUsed] = useState(false);

  const { setGrandTotal } = useContext(GrandTotalContext);

  //Checking if users input is the correct PROMO code.
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
          placeholder="Promo Code"
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
        <span style={{ color: "#7b3018", fontWeight: "bold" }}>
          {" "}
          <i>{promoCodeError !== "" && promoCodeError}</i>
        </span>
      </div>
    </div>
  );
}

export default RedeemInput;
