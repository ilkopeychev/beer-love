import React, { useContext } from "react";
import RenderBeerList from "../RenderBeerList/RenderBeerList";
import { myContext } from "../context/context";
import "../HomePage/HomePage.scss";

const Favourites = () => {
  const { favouriteBeers } = useContext(myContext);
  const beerList = favouriteBeers.length ? (
    <RenderBeerList beers={favouriteBeers} />
  ) : (
    <p className="info">You have not added any beers to your Favourites yet!</p>
  );

  return <div className="container">{beerList}</div>;
};

export default Favourites;
