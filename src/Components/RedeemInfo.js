import React from "react";

function RedeemOrder() {
  const REDEEMMESSAGE = "WESTERN5";
  return (
    <div
      className="redeem-info"
      style={{ backgroundColor: "white", margin: "0 5px", borderRadius: "4px" }}
    >
      <div
        className="promo-code"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          margin: "10px",
        }}
      >
        <div>
          <span>Promo Code: </span>
          <span>
            <b style={{ color: "red" }}>{REDEEMMESSAGE}</b>
          </span>
        </div>
        <div>
          <p>
            <b>$-5</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RedeemOrder;
