import { useState, useEffect } from "react";
import "./App.css";

//Components
import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";

function App() {
  const [beverages, setBeverages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

      //Make sure all beverages have a image.
      AddImage(data);
      //setting beverage data to state
      setBeverages(data);
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
  const onSearchSubmit = async (query) => {
    if (query !== "") {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?beer_name=${query}`
      );
      const data = await response.json();
      //Make sure all beverages have a image.
      AddImage(data);

      setBeverages(data);
      console.log(data);
    } else {
      GetApiBeverages();
    }
  };

  return (
    <div className="App">
      <Header />
      <CardContainer
        beverages={beverages}
        errorMessage={errorMessage}
        NextPage={NextPage}
        PreviousPage={PreviousPage}
        currentPage={currentPage}
        onSearchSubmit={onSearchSubmit}
      />
    </div>
  );
}

export default App;
