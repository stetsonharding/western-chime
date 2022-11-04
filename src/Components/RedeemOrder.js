import React from "react";

function RedeemOrder() {
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
        }}
      >
        <div>
          <span>Promo Code: </span>
          <span>
            <b>WESTERN4</b>
          </span>
        </div>
        <div>
          <p>$-5</p>
        </div>
      </div>
    </div>
  );
}

export default RedeemOrder;
