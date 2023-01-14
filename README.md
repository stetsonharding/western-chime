# Western Chime
---
# *Overview*
#### Western Chime - The mock-up e-commerce website in this project retrieves the Punk API. With this project, I wanted to use React.js to add a lot of the features present on a typical e-commerce website. These features include retrieving the data, displaying a modal with additional information about the item selected, searching for items, saving favorites for later use, adding/removing items from the user's cart, changing and updating the quantity of items selected, using pagination to improve user friendliness and performance load times, updating the user's price, taxes, and grand total based on items in the user's cart, and a checkout page with a form to enter promotional codes.
---
# *Technologies*
- ## React.js
 1. Functional Components using Hooks (useState, useEffect, useDebounce, useRef).
 2. React Router v6 for site navigation across pages
 3. Component Conditional Rendering
 4. Component reuse and modifications using props.childen
 5. Demonstration of passing props from parent to child components
 - ## lodash/Memoization
 1. Help limit the number of API calls by saving already searched query results in storage
 - ## CSS/Flexbox/Grid
 1. Clean reusable styling
 2. Fully responsive to all screen sizes
 - ## Punk API
 1. Fetch data to get all products
 2. Fetch data to search for spacific products
 3. Handle all edge cases and errors
 ---
 # *Functionalities*
 
 - ### Find out more details about a certain product
Any of the product cards can be clicked to enable a modal dialog to appear. This modal will provide further details about a particular product, such as a description, ABV and IBU percentages, price, and an opportunity to add the item to the user's shopping cart.


  <img width="530" height="275" src="https://user-images.githubusercontent.com/19699378/212483945-52367b58-1c0b-4c0e-8548-4946795f4fab.png">


```JavaScript
function LearnMoreModal({
  setLearnMoreModalData,
  learnMoreModalData,
  setCartItems,
  cartItems,
  setBeverages,
  beverages,
}) {

  //Add item to cart function
  const AddItemToCart = (id) => {
  //Adding item to users shopping cart.
    setCartItems((prevItems) => [...prevItems, learnMoreModalData]);
  //Checking to see if a beverage id is equal to the id passed into the function.
  /*if true, change the value of the isAddedToCart property so that the product card now displays a shopping cart icon 
 rather than a plus sign. */
    let updatedBeverages = beverages.map((beverage) => {
      if (id === beverage.id) {
        return {
          ...beverage,
          isAddedToCart: true,
        };
      }
      return beverage;
    });
    setBeverages(updatedBeverages);
  };

  //Function to check if item is already in cart
  //Used for conditional rendering "add to cart' button and disabling 'add to cart' button
  const ItemAlreadyAddedToCart = () => {
    return cartItems.find((item) => item.name === learnMoreModalData.name);
  };

  //Check if item is in cart upon rendering.
  useEffect(() => {
    ItemAlreadyAddedToCart();
  });

  return (
    <div className="modal-background">
      <div className="modal-content">
        <div className="information-container">
          <h2 className="title">{learnMoreModalData.name}</h2>
          <div className="beverage-data-container">
            <div className="data">
              <div className="beverage-details">
                <span>Beverage</span>
              </div>
              <div className="beverage-details">
                <span>ABV: {learnMoreModalData.abv}</span>
              </div>
              <div className="beverage-details">
                <span>IBU: {learnMoreModalData.ibu}</span>
              </div>
            </div>
            <div className="description-container">
              <div className="description">
                <p>{learnMoreModalData.description}</p>
              </div>
            </div>
          </div>
          <div className="cart-button-container">
            <button
              id="modal-button"
              onClick={() => AddItemToCart(learnMoreModalData.id)}
              disabled={ItemAlreadyAddedToCart() !== undefined ? true : false}
            >
              {ItemAlreadyAddedToCart() !== undefined
                ? "Item in Cart"
                : `Add to cart $${learnMoreModalData.srm}`}
            </button>
            <button
              id="modal-button"
              onClick={() => {
                setLearnMoreModalData(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
        <div className="beverage-image-container">
          <img
            src={learnMoreModalData.image_url}
            alt="Beverage"
            width="100px"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
}
export default LearnMoreModal;
```
 - ### Selecting quantity, adding product to cart, updating quantity
The user will be sent to a quantity view when they click the "+" sign on a product card. The user chooses how many units of this item they want from the quantity display. When the confirm button is pressed, the item is added to the user's shopping cart and the "+" symbol is replaced with a "shopping cart icon." This notifies the user that their item has been added to their shopping cart. A user can change the number of units of a item by clicking the 'update' button and selecting a new quantity.
 
 [Untitled_ Jan 14, 2023 9_19 AM.webm](https://user-images.githubusercontent.com/19699378/212486623-7fec70db-8f22-4201-bbb5-4d22fb0faaf9.webm)


 ---
 # *New Discoveries*
 - ### limiting the number of API calls
 #### useDebounce
I wanted to figure out how to restrict how many API requests are made when a user is looking for products. I learned about the *useDebounce* React hook after doing some research on how to limit the number of API calls (https://usehooks-ts.com/react-hook/use-debounce). We can specify a time when a specific function will be called using this hook. Previously, My API was being called every time a user entered a number or character in the search input. The useDebounce hook has made it so that my API is now called 1 second after the user has finished tying. This improves performance, and would save a company money making less API calls. The code is given below:

``` JavaScript
import React, { useState, useEffect } from "react";

import  {useDebounce}  from 'use-debounce';

import "../css/SearchInput.css";

function SearchInput({ onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  
  //Getting users searchQuery 1 second after typing.
  const [debouncedValue] = useDebounce(searchQuery, 1000)

  // If the debounceValue has changed, fetch the API by calling onSearchSubmit passing the users new search term.
  useEffect(() => {
   onSearchSubmit(searchQuery)
  }, [debouncedValue]);

  return (
    <>
      <input
        type="search"
        className="search-input"
        placeholder="Howdy, What cha lookin' for?"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
      />
    </>
  );
}

export default SearchInput;
```
#### Lodash_Memoize
I implemented *lodash's _Memoize* method to better restrict the API requests. With Memoize, you may effectively cache a function's output for the same parameters. Let's imagine someone searched for the product "Buzz," and the results were cached. Now, if a user searches for Buzz once again, the cache will be used rather than the API to get the result. Below is my function to search for a users product that uses Memoize.

```JavaScript
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
  ```
  


