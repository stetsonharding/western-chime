import { useState, useEffect } from "react";
import "./App.css";

//Components
import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";

function App() {
  const [beverages, setBeverages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const GetApiBeverages = async () => {
      let URL = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=10`;

      try {
        const response = await fetch(URL);
        const data = await response.json();

        //If there is no beverage image, set image as "keg-only".
        data.filter((item) =>
          item.image_url === null
            ? (item.image_url = "https://images.punkapi.com/v2/keg.png")
            : null
        );

        setBeverages(data);
      } catch (err) {
        setErrorMessage(
          "Oh no! Someones fussin' with our invitory! Try Again!"
        );
      }
    };

    GetApiBeverages();
  }, [currentPage]);

  const PreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const NextPage = () => {
    setCurrentPage(currentPage + 1);
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
      />
    </div>
  );
}

export default App;
