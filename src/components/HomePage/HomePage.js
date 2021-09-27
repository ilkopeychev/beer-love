import React, { useState, useEffect, useCallback, useContext } from "react";
import "./HomePage.scss";
import { myContext } from "../context/context";
import RenderBeerList from "../RenderBeerList/RenderBeerList";
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { fetchHomeBeers, beers } = useContext(myContext);

  useEffect(() => {
    fetchHomeBeers();
  }, []);

  const searchBeerHandler = useCallback(() => {
    fetchHomeBeers(searchTerm);
  }, [searchTerm, fetchHomeBeers]);

  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          placeholder="Search for beer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="button" onClick={searchBeerHandler}>
          Search Beer
        </button>
      </div>

      <div className="container">
        {beers?.length > 0 ? (
          <RenderBeerList beers={beers}></RenderBeerList>
        ) : (
          <h1>No beers found! Try another word ..</h1>
        )}
      </div>
    </div>
  );
};

export default HomePage;
