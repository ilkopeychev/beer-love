import React, { useEffect, useContext } from "react";
import { myContext } from "../context/context";

import "./RandomBeer.scss";
const RandomBeer = () => {
  const { randomBeer, fetchRandomBeer, playBeerSound } = useContext(myContext);

  useEffect(() => {
    fetchRandomBeer();
    console.log(randomBeer);
  }, [fetchRandomBeer]);

  return (
    <div className="random">
      {randomBeer.map((beer) => (
        <div key={beer.id} className="random-grid">
          <div className="random-grid-controls">
            <img src={beer.image_url} alt="#" onClick={playBeerSound} />
            <button onClick={fetchRandomBeer}> Generate Another Beer</button>
          </div>

          <div className="random-grid-instructions">
            <h4>{beer.name}</h4>
            <p>{beer.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomBeer;
