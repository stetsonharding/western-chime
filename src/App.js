import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import _ from "lodash";

//Components
import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";
import LearnMoreModal from "./Components/LearnMoreModal";
import EditItemModal from "./Components/EditItemModal";
import OrderPlaced from "./Components/Checkout/OrderPlaced";
import CheckoutOverview from "./Components/Checkout/CheckoutOverview";
import Footer from "./Components/Footer";

function App() {
  const [beverages, setBeverages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [favoritedBeverages, setFavoritedBeverages] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [learnMoreModalData, setLearnMoreModalData] = useState();
  const [grandTotal, setGrandTotal] = useState(0);
  const [editedCartItem, setEditedCartItem] = useState({});

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

  // Add properties (isFavorited, isAddedToCart, quantityConfirm, qty) to all items that are being fetched.
  function AllDataProperties(data) {
    let finalData = data.map((obj) => ({
      ...obj,
      isFavorited: false,
      isAddedToCart: false,
      quantityConfirm: false,
      qty: 1,
    }));

    return finalData;
  }

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
      //Calling AllDataProperties to add properties to data
      const finalData = AllDataProperties(data);
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

  //use the user's search term to find beverages.
  const onSearchSubmit = _.memoize(async (query) => {
    if (query !== "") {
      //handling edge cases and problems while fetching API
      try {
        const response = await fetch(
          `https://api.punkapi.com/v2/beers?beer_name=${query}`
        );
        const data = await response.json();

        //No results found for specified search query. Display error message.
        if (data.length === 0) {
          setErrorMessage(
            `Shucks! We can't seem to find ${query}. Try Lookin' for another?`
          );
          setBeverages([]);

          //API retrieval was successful.
        } else {
          //adding attributes (quantity, addedToCart) to data by calling AllDataProperties function.
          const finalData = AllDataProperties(data);
          //In case the product doesn't have a image in the results, add an image to product by calling AddImage.
          AddImage(finalData);
          //storing API results into state
          setBeverages(finalData);
          //setting an empty string as the error message
          setErrorMessage("");
        }
        //Error fetching API
      } catch (err) {
        setErrorMessage(`There seems to be an error!`);
        setBeverages([]);
      }
    } else {
      //Retrieves beverage API to display beverages once more if the user removes the search query from the input.
      GetApiBeverages();
      setErrorMessage("");
    }
  });

  const viewItemQuantity = (id, e) => {
    e.stopPropagation();
    const updatedBeverages = beverages.map((beverage) => {
      if (beverage.id === id) {
        return {
          ...beverage,
          quantityConfirm: !beverage.quantityConfirm,
        };
      }
      return beverage;
    });

    setBeverages(updatedBeverages);
  };

  return (
    <div className="App">
      {learnMoreModalData && (
        <LearnMoreModal
          setLearnMoreModalData={setLearnMoreModalData}
          learnMoreModalData={learnMoreModalData}
          setCartItems={setCartItems}
          cartItems={cartItems}
          setBeverages={setBeverages}
          beverages={beverages}
        />
      )}
      {editedCartItem.image_url && (
        <EditItemModal
          setEditedCartItem={setEditedCartItem}
          editedCartItem={editedCartItem}
        />
      )}
      <Header
        cartItems={cartItems}
        setCartItems={setCartItems}
        setBeverages={setBeverages}
        beverages={beverages}
        grandTotal={grandTotal}
        setGrandTotal={setGrandTotal}
        formatPrice={formatPrice}
        setEditedCartItem={setEditedCartItem}
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
              viewItemQuantity={viewItemQuantity}
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
              setFavoritedBeverages={setFavoritedBeverages}
              setUserInfo={setUserInfo}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
