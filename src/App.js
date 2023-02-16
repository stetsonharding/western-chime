import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//contexts
import { CartItemsContextProvider } from "./Contexts/CartItemsContext";
import { GrandTotalContextProvider } from "./Contexts/GrandTotalContext";
//Components
import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";
import LearnMoreModal from "./Components/LearnMoreModal";
import EditItemModal from "./Components/EditItemModal";
import OrderPlaced from "./Components/Checkout/OrderPlaced";
import CheckoutOverview from "./Components/Checkout/CheckoutOverview";
import Footer from "./Components/Footer";

function App() {
  const [learnMoreModalData, setLearnMoreModalData] = useState();
  const [editedCartItem, setEditedCartItem] = useState({});
  const [quantity, setQuantity] = useState();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    addressTwo: "",
    country: "",
    state: "",
    zipcode: "",
  });

  return (
    <GrandTotalContextProvider>
      <CartItemsContextProvider>
        <div className="App">
          {learnMoreModalData && (
            <LearnMoreModal
              setLearnMoreModalData={setLearnMoreModalData}
              learnMoreModalData={learnMoreModalData}
            />
          )}
          {editedCartItem.image_url && (
            <EditItemModal
              setEditedCartItem={setEditedCartItem}
              editedCartItem={editedCartItem}
              setQuantity={setQuantity}
              quantity={quantity}
            />
          )}
          <Header setEditedCartItem={setEditedCartItem} />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <CardContainer
                  setLearnMoreModalData={setLearnMoreModalData}
                  setQuantity={setQuantity}
                  quantity={quantity}
                />
              }
            ></Route>

            <Route
              path="/Checkout"
              element={
                <CheckoutOverview
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                />
              }
            ></Route>

            <Route
              path="/orderPlaced"
              element={
                <OrderPlaced userInfo={userInfo} setUserInfo={setUserInfo} />
              }
            ></Route>
          </Routes>
          <Footer />
        </div>
      </CartItemsContextProvider>
    </GrandTotalContextProvider>
  );
}

export default App;
