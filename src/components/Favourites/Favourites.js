import React, { useContext } from "react";
import RenderBeerList from "../RenderBeerList/RenderBeerList";
import { myContext } from "../context/context";
import "../HomePage/HomePage.scss";

const Favourites = () => {
  const { favouriteSetBeers } = useContext(myContext);
  const arrayOfBeers = Array.from(favouriteSetBeers);
  const beerList = favouriteSetBeers.size ? (
    <RenderBeerList beers={arrayOfBeers} />
  ) : (
    <p className="info">You have not added any beers to your Favourites yet!</p>
  );

  return <div className="container">{beerList}</div>;
};

export default Favourites;
