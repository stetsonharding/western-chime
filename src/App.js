import { useState, useEffect } from "react";
import "./App.css";

import _ from "lodash";

//Components
import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";
import LearnMoreModal from "./Components/LearnMoreModal";
import OrderPlaced from "./Components/Checkout/OrderPlaced";

import { Route, Routes } from "react-router-dom";
import CheckoutOverview from "./Components/Checkout/CheckoutOverview";

function App() {
  const [beverages, setBeverages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [favoritedBeverages, setFavoritedBeverages] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [learnMoreModalData, setLearnMoreModalData] = useState();
  const [grandTotal, setGrandTotal] = useState(0);

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

  function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  //If there is no beverage image, set image as "keg-only".
  const AddImage = (data) => {
    data.filter((item) =>
      item.image_url === null
        ? (item.image_url = "https://images.punkapi.com/v2/keg.png")
        : null
    );
  };

  const GetApiBeverages = async () => {
    let URL = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=15`;

    try {
      const response = await fetch(URL);
      const data = await response.json();

      AddImage(data);
      //Adding isFavorited and isAddedToCart property's to each beverage and setting final result to state.
      let finalData = data.map((obj) => ({
        ...obj,
        isFavorited: false,
        isAddedToCart: false,
      }));
      setBeverages(finalData);
    } catch (err) {
      setErrorMessage("Oh no! Someones fussin' with our invitory! Try Again!");
    }
  };
  useEffect(() => {
    GetApiBeverages();
  }, [currentPage]);

  // Pagination for next and prev pages
  const PreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const NextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  //Searching for beverages based on users search query.
  const onSearchSubmit = _.memoize(async (query) => {
    if (query !== "") {
      try {
        const response = await fetch(
          `https://api.punkapi.com/v2/beers?beer_name=${query}`
        );
        const data = await response.json();

        if (data.length === 0) {
          setErrorMessage(
            `Shucks! We can't seem to find ${query}. Try Lookin' for another?`
          );
          setBeverages([]);
        } else {
          AddImage(data);
          setBeverages(data);
          setErrorMessage("");
        }
      } catch (err) {
        setErrorMessage(`There seems to be an error!`);
        setBeverages([]);
      }
    } else {
      GetApiBeverages();
      setErrorMessage("");
    }
  });

  const addItemToCart = (id, itemAddedToCart, e) => {
    const updatedBeverages = beverages.map((beverage) => {
      if (beverage.id === id) {
        return {
          ...beverage,
          isAddedToCart: !beverage.isAddedToCart,
        };
      }
      return beverage;
    });
    //Add item to cart
    setCartItems((prevItems) => [...prevItems, itemAddedToCart]);
    setBeverages(updatedBeverages);
    e.stopPropagation();
  };

  return (
    <div className="App">
      <LearnMoreModal
        setLearnMoreModalData={setLearnMoreModalData}
        learnMoreModalData={learnMoreModalData}
        addItemToCart={addItemToCart}
      />

      <Header
        cartItems={cartItems}
        setCartItems={setCartItems}
        setBeverages={setBeverages}
        beverages={beverages}
        grandTotal={grandTotal}
        setGrandTotal={setGrandTotal}
        formatPrice={formatPrice}
      />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <CardContainer
              beverages={beverages}
              errorMessage={errorMessage}
              NextPage={NextPage}
              PreviousPage={PreviousPage}
              currentPage={currentPage}
              onSearchSubmit={onSearchSubmit}
              setBeverages={setBeverages}
              setFavoritedBeverages={setFavoritedBeverages}
              favoritedBeverages={favoritedBeverages}
              setCartItems={setCartItems}
              setLearnMoreModalData={setLearnMoreModalData}
              cartItems={cartItems}
              addItemToCart={addItemToCart}
            />
          }
        ></Route>

        <Route
          path="/Checkout"
          element={
            <CheckoutOverview
              cartItems={cartItems}
              setCartItems={setCartItems}
              formatPrice={formatPrice}
              grandTotal={grandTotal}
              setGrandTotal={setGrandTotal}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          }
        ></Route>

        <Route
          path="/orderPlaced"
          element={
            <OrderPlaced
              userInfo={userInfo}
              setCartItems={setCartItems}
              setFavoritedBeverages={setFavoritedBeverages}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
