import React, { useContext } from "react";
import "./RenderBeerList.scss";
import { myContext } from "../context/context";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Grid } from "@mui/material";

function RenderBeerList(props) {
  const {
    addFavouriteSet,
    checkIfFavourite,
    removeFavouriteSet,
    playBeerSound,
    wallet,
  } = useContext(myContext);

  if (wallet === "no wallet") {
    localStorage.setItem("StorageWallet", JSON.stringify("no wallet"));
  } else {
    localStorage.setItem("StorageWallet", wallet);
  }

  return props.beers.map((beer) => (
    <Grid
      className="beer-card"
      item
      spacing={3}
      xs={12}
      sm={12}
      md={4}
      key={beer.id}
    >
      <div className="beer-card-children">
        <img
          className="img"
          nb
          src={beer.image_url}
          alt="#"
          onClick={playBeerSound}
        />
        <div className="card__content">
          <h2 className="card__title">{beer.name}</h2>
          <p className="card__text">{beer.description}</p>
        </div>
        {!checkIfFavourite(beer.id) ? (
          <AiOutlineStar
            className="fa-star"
            onClick={() => addFavouriteSet(beer.id)}
          ></AiOutlineStar>
        ) : (
          <AiFillStar
            className="fa-star"
            onClick={() => removeFavouriteSet(beer.id)}
          />
        )}
      </div>
    </Grid>
    // </div>
  ));
}

export default RenderBeerList;
