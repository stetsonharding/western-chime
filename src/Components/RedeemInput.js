import React, { useState } from "react";

import "../css/RedeemInput.css";

function RedeemInput({ setGrandTotal }) {
  const [userRedeemCode, setUserRedeemCode] = useState("");
  const [redeemCodeError, setRedeemCodeError] = useState("");

  function UseRedeemCode(usersRedeemCode) {
    if (usersRedeemCode === "WESTERN5") {
      setGrandTotal((prevTotal) => prevTotal - 5);
      setRedeemCodeError("");
    } else {
      setRedeemCodeError("Sorry that redeem code does not exist. Try another?");
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
          onClick={() => UseRedeemCode(userRedeemCode)}
        ></input>
      </form>
      <p>{redeemCodeError !== "" && redeemCodeError}</p>
    </div>
  );
}

export default RedeemInput;
