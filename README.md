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

```JavaScript
//Function to confirm quantity and add item to cart
  const confirmQuantity = (id) => {
    //setting all the previous items in the cart plus the newly added item to state
    setCartItems((prevItems) => [...prevItems, beverage]);
    //conditionally rendering 'update' button by setting cartUpdated to true or 'confirm' button if false
    setCartUpdated(true);
    //After 900s, leave quantity view by setting quantityConfirm to false and is addedToCart to true to display cart icon instead of the "+" symbol
    setTimeout(() => {
      setCartUpdated(false);
      let updatedBeverages = beverages.map((beverage) => {
        if (id === beverage.id) {
          return {
            ...beverage,
            isAddedToCart: true,
            quantityConfirm: !beverage.quantityConfirm,
          };
        }
        return beverage;
      });
      //set the updated beverages to state to display to user
      setBeverages(updatedBeverages);
    }, 900);
  };
```
#### Component that display the quantity view
<img src="https://user-images.githubusercontent.com/19699378/212939760-9f406e8a-216d-4929-b4c7-b07881f8f9a4.png" alt="alt text" width="200" height="300">

```JavaScript
//quantity view component. 
//This component is what displays the quantity counter as well as product information and confirm/update buttons
 return (
    <div className="quantity-view">
      <div className="quantity-information">
        <div id="quantity-back">
          <span onClick={() => leaveQuantityView(beverage.id, beverage)}>
            &lt;
          </span>
          <div>
            <img src={beverage.image_url} alt="" height="80" />
          </div>
        </div>
        <div className="quantity-product-details">
          <p id="name">{beverage.name}</p>

          <p className="ibu-abv">IBU: {beverage.ibu}%</p>

          <p className="ibu-abv">ABV: {beverage.abv}%</p>
        </div>
      </div>
      <div className="quantity-counter">
        <QuantityCounter
          beverage={beverage}
          beverages={beverages}
          setBeverages={setBeverages}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
      //conditionally rendering the 'update' button if cartUpdated is true or render the confirm button if it is false
      {cartUpdated !== true ? (
        <div className="quantity-confirm">
          {beverage.isAddedToCart ? (
            <UpdateItem
              beverage={beverage}
              quantity={quantity}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ) : (
            <button
              className="confirm-btn"
              onClick={() => confirmQuantity(beverage.id)}
            >
              Confirm ${beverage.srm * quantity}
            </button>
          )}
        </div>
      ) : (
        <UpdatedNotification notification="Item added to cart" />
      )}
    </div>
  );
}

```

#### Component to increase/decrese product quantity
<img src="https://user-images.githubusercontent.com/19699378/212940356-1a99dd17-f016-4bdd-9c46-7071b4eb0f04.png" alt="alt text" width="350" height="80">

```JavaScript

//Quantity Counter Component
//This is the Component that allows the user to increase or decrease items quantity
function QuantityCounter({ beverage, setQuantity, quantity }) {
  const incrementQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevState) => prevState - 1);
  };

  return (
    <div className="quantity-counter">
      <div className="decrement">
        <button
          className="quantity-btn"
          disabled={quantity <= 1 ? true : false}
          onClick={() => decrementQuantity()}
        >
          -
        </button>
      </div>
      <div>
        <h3 style={{}}>{quantity}</h3>
      </div>
      <div className="increment">
        <button
          className="quantity-btn"
          disabled={quantity === 10 ? true : false}
          onClick={() => incrementQuantity()}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityCounter;

```
### Getting orders grand total and remove items from cart
<img src="https://user-images.githubusercontent.com/19699378/212942140-4dfb4598-1057-4a31-8528-53cc2f9cd310.png" alt="alt text" width="320" height="420">

#### Cart Component
```JavaScript

import React from "react";

import CartItems from "./CartItems";

export default function CartQuickView({
  cartItems,
  setCartItems,
  setIsCartQuickviewShown,
  setBeverages,
  beverages,
  redeemTotal,
  ...props
}) {
  return (
    <>
      <div
        className={
          setIsCartQuickviewShown
            ? "cart-quickview"
            : " cart-quickview-checkout"
        }
        style={{ backgroundColor: props.color }}
      >
        <h2 id="quickview-title" style={{ color: props.headingColor }}>
          {props.title}
          <span id="quickview-cart-length">({cartItems.length})</span>
        </h2>
        <div className="cart-item-quickview-container">
          {cartItems.map((item, index) => (
            <CartItems
              key={item.id}
              item={item}
              index={index}
              setCartItems={setCartItems}
              cartItems={cartItems}
              setBeverages={setBeverages}
              beverages={beverages}
              cartItem={item.id}
            />
          ))}
        </div>

        {cartItems.length <= 0 && <p>Your cart is empty! Let's fix that.</p>}

        {props.children}
      </div>
    </>
  );
}

```
#### Cart Items Component
```JavaScript

import React from "react";

import TrashIcon from "../Assets/trash-icon.png";

import "../css/CartItems.css";

function CartItems({
  setCartItems,
  item,
  index,
  cartItems,
  setBeverages,
  beverages,
  cartItem,
}) {
  return (
    <div className="cart-items">
      <div className="beverage-image">
        <img src={item.image_url} alt="" width="20px" height="78" />
      </div>
      <div className="beverage-information-container">
        <p id="name" className="informationz">
          {item.name}
        </p>
        <p id="price" className="information">
          {item.qty} @ ${item.srm}.00 = ${item.qty * item.srm}
        </p>
      </div>
      <div className="deleteItem-container">
        <img
          id="delete-item"
          height="22"
          width="22"
          src={TrashIcon}
          alt="remove item icon"
          onClick={() => removeFromCart(index, cartItem)}
        />
      </div>
    </div>
  );
}

export default CartItems;


```
#### Functionality to calculate the overall cost of everything (subTotal, taxes, and grand total) in a user's cart.
```JavaScript
  const OrderCostCalculations = () => {
    let TAX_RATE = 0.1;
    let subTotalCalculation = 0;
    //loop through all items in cart, multiply price * qty and add that total to the current subtotalCalculation.
    cartItems.forEach((item) => {
      subTotalCalculation += item.srm * item.qty;
    });
    //Updating subTotal state
    setSubTotal(subTotalCalculation);

    //subtotal * taxe_rate to get the total ammount in taxes
    //update taxes state
    setTaxes(subTotal * TAX_RATE);

    //Updating grandTotal by adding subtotal and taxes together.
    setGrandTotal(subTotal + taxes);
  };
  
//Every time a cart item is added, removed, or changed, the OrderCostCalculations function has to be called in order to update the users grand total.
//Using React's useEffect hook is perfect for this situation.
 
   useEffect(() => {
    OrderCostCalculations();
  }, [subTotal, cartItems, taxes]);
```
### Function to remove an item from the users cart
```JavaScript
  const removeFromCart = (item) => {
    //Making a copy of cartItems array to not directly manipulate state.
    const cart = [...cartItems];
 
    //Getting all items from cart array accept the item that is passed in.
    const updatedItems = cart.filter((prevItem) => prevItem.id !== item.id);
   
    //Updating state for cart items
    setCartItems(updatedItems);
    
  };
```
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
  


