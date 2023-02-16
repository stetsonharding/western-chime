import React, { useContext } from "react";

//Components
import CartQuickView from "../CartQuickView";
import GrandTotal from "../GrandTotal";
import RedeemInfo from "../RedeemInfo";
import RedeemInput from "../RedeemInput";
import CheckoutForm from "./CheckoutForm";

//css
import "../../css/CheckoutOverview.css";

//Context
import { GrandTotalContext } from "../../Contexts/GrandTotalContext";

function CheckoutOverview({ userInfo, setUserInfo }) {
  const { grandTotal } = useContext(GrandTotalContext);

  return (
    <div className="checkout-container">
      <CheckoutForm userInfo={userInfo} setUserInfo={setUserInfo} />
      <CartQuickView
        title="Cart Overview "
        color="#7b3018"
        headingColor="white"
      >
        {grandTotal !== 0 && (
          <>
            <GrandTotal headingColor="white" totalColor="white" />
            <RedeemInfo />
            <RedeemInput />
          </>
        )}
      </CartQuickView>
    </div>
  );
}

export default CheckoutOverview;
