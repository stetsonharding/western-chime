import React, { useState, useEffect } from "react";

export const GetBeveragesContext = React.createContext();

export function GetBeveragesContextProvider({ children }) {
  //State to Store all data from API
  const [beverages, setBeverages] = useState([]);
  //State to handle errors from API
  const [errorMessage, setErrorMessage] = useState("");
  //State to keep track of user page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    GetApiBeverages(currentPage);
  }, [currentPage]);

  //Function to fetch data from API
  const GetApiBeverages = async (currentPage = 1) => {
    let URL = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=15`;

    try {
      const response = await fetch(URL);
      const data = await response.json();
      AddImage(data);
      const finalData = AllDataProperties(data);
      setBeverages(finalData);
    } catch (err) {
      setErrorMessage("Oh no! Someones fussin' with our invitory! Try Again!");
    }
  };

  //Function to add properties to all data to use for manipulating/conditional rendering
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

  //Function to add a default image to data
  const AddImage = (data) => {
    data.filter((item) =>
      item.image_url === null
        ? (item.image_url = "https://images.punkapi.com/v2/keg.png")
        : null
    );
  };

  return (
    <GetBeveragesContext.Provider
      value={{
        beverages,
        setBeverages,
        GetApiBeverages,
        errorMessage,
        AddImage,
        setErrorMessage,
        AllDataProperties,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </GetBeveragesContext.Provider>
  );
}
