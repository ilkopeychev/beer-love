import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

import useSound from "use-sound";
import beerSound from "../../sound/openBeer.mp3";

import { ethers } from "ethers";

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [beers, setBeers] = useState([]);

  const [randomBeer, setRandomBeer] = useState([]);

  const [playBeerSound] = useSound(beerSound);

  const [wallet, setWallet] = useState(() => {
    let walletStateFromStorrage;
    if (localStorage.getItem("StorageWallet")) {
      try {
        walletStateFromStorrage = JSON.parse(
          localStorage.getItem("StorageWallet")
        );
      } catch {
        walletStateFromStorrage = localStorage.getItem("StorageWallet");
      }
    }

    console.log("walletStateFromStorrage", walletStateFromStorrage);
    const newWalletStateFromStorrage = walletStateFromStorrage
      ? walletStateFromStorrage
      : "no wallet";
    return newWalletStateFromStorrage;
  });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [styleDisabled, setStyleDisabled] = useState(
    wallet === "no wallet" ? { pointerEvents: "none", opacity: "0.4" } : {}
  );

  const connectWallet = async () => {
    const res = await provider.send("eth_requestAccounts", []);
    const walletNameFromProvider = res[0];
    setWallet(walletNameFromProvider);
    setStyleDisabled({});
  };

  const [favouriteSetBeers, setFavouriteSetBeers] = useState(() => {
    const dateFromLocalStorage = JSON.parse(
      localStorage.getItem("FavouritesSet")
    );
    const newDataAsSet = new Set();
    const transformArrayToSet = dateFromLocalStorage
      ? dateFromLocalStorage.forEach((item) => newDataAsSet.add(item))
      : new Set();
    return newDataAsSet || transformArrayToSet;
  });

  const fetchHomeBeers = useCallback((searchTerm) => {
    axios
      .get(`https://api.punkapi.com/v2/beers`, {
        params: { beer_name: searchTerm },
      })
      .then((res) => {
        setBeers(res.data);
      });
  }, []);

  const fetchRandomBeer = useCallback(() => {
    axios.get(`https://api.punkapi.com/v2/beers/random`).then((res) => {
      setRandomBeer(res.data);
    });
  }, []);

  const addFavouriteSet = async (id) => {
    const newSet = new Set();
    const beer = beers.find((item) => item.id === id);
    let favourites = [];
    beer.isFavourite = true;

    favourites = Array.from(favouriteSetBeers);
    favourites.push(beer);

    favourites.forEach((item) => newSet.add(item));
    await setFavouriteSetBeers(newSet);

    localStorage.setItem("FavouritesSet", JSON.stringify([...newSet]));
  };

  const removeFavouriteSet = async (id) => {
    if (favouriteSetBeers?.size) {
      const newSet = new Set(favouriteSetBeers);
      newSet.forEach((item) => {
        if (item.id === id) {
          newSet.delete(item);
        }
      });

      await setFavouriteSetBeers(newSet);
      localStorage.setItem("FavouritesSet", JSON.stringify([...newSet]));
    }
  };

  const checkIfFavourite = (id) => {
    const favourites = Array.from(favouriteSetBeers);
    const beer = favourites.find((item) => item.id === id);

    let isFavourite;
    if (!Array.isArray(favouriteSetBeers)) {
      isFavourite = favouriteSetBeers.has(beer);
    } else {
      isFavourite = favouriteSetBeers.indexOf(beer) !== -1;
    }

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
        addFavouriteSet,
        checkIfFavourite,
        removeFavouriteSet,
        playBeerSound,
        favouriteSetBeers,
        connectWallet,
        wallet,
        styleDisabled,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
