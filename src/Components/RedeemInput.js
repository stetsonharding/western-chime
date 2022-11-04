import React, { useState } from "react";

import "../css/RedeemInput.css";

function RedeemInput() {
  const [redeemCode, setRedeemCode] = useState("");
  return (
    <div className="redeem-input-container">
      <form>
        <input
          className="redeem-input"
          type="text"
          placeholder="Redeem Code"
          value={redeemCode}
          onChange={(e) => setRedeemCode(e.target.value)}
        />
        <input
          className="redeem-input redeem-btn"
          type="button"
          value="Redeem"
        ></input>
      </form>
    </div>
  );
}

export default RedeemInput;
