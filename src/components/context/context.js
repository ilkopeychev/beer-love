import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

import useSound from "use-sound";
import beerSound from "../../sound/openBeer.mp3";

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [beers, setBeers] = useState([]);

  const [randomBeer, setRandomBeer] = useState([]);

  const [playBeerSound] = useSound(beerSound);

  const [favouriteBeers, setFavouriteBeers] = useState(
    localStorage.getItem("Favourites")
      ? JSON.parse(localStorage.getItem("Favourites"))
      : []
  );

  const fetchHomeBeers = useCallback((searchTerm) => {
    axios
      .get(`https://api.punkapi.com/v2/beers`, {
        params: { beer_name: searchTerm },
      })
      .then((res) => {
        console.log(res.data);
        setBeers(res.data);
      });
  }, []);

  const fetchRandomBeer = useCallback(() => {
    axios.get(`https://api.punkapi.com/v2/beers/random`).then((res) => {
      console.log("res DATA", res.data[0]);
      setRandomBeer(res.data);
    });
  }, []);

  const addFavourite = async (id) => {
    const beer = beers.find((item) => item.id === id);

    let favourites;

    beer.isFavourite = true;

    favourites = [...favouriteBeers, beer];

    setFavouriteBeers(favourites);

    localStorage.setItem("Favourites", JSON.stringify(favourites));
  };

  const removeFavourite = async (id) => {
    if (favouriteBeers?.lenght > 0) {
      const beer = favouriteBeers.find((item) => item.id === id);
      let favourites;

      beer.isFavourite = false;

      favourites = favouriteBeers.filter(
        (favourite) => favourite.id !== beer.id
      );
      beer.isFavourite = false;
      await setFavouriteBeers(favourites);
      localStorage.setItem("Favourites", JSON.stringify(favourites));
    }
  };

  const checkIfFavourite = (id) => {
    console.log("FAVOURITE", favouriteBeers);
    const isFavourite = favouriteBeers.find((favourite) => favourite.id === id);
    if (isFavourite) return true;
    return false;
  };

  return (
    <myContext.Provider
      value={{
        fetchHomeBeers,
        beers,
        fetchRandomBeer,
        randomBeer,
        addFavourite,
        favouriteBeers,
        checkIfFavourite,
        removeFavourite,
        playBeerSound,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
