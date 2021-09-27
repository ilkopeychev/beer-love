import React, { useContext } from "react";
import "./RenderBeerList.scss";
import { myContext } from "../context/context";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function RenderBeerList(props) {
  const { addFavourite, checkIfFavourite, removeFavourite, playBeerSound } =
    useContext(myContext);

  return props.beers.map((beer) => (
    <div className="card" key={beer.id}>
      <img
        className="img"
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
          onClick={() => addFavourite(beer.id)}
        ></AiOutlineStar>
      ) : (
        <AiFillStar
          className="fa-star"
          onClick={() => removeFavourite(beer.id)}
        />
      )}
    </div>
  ));
}

export default RenderBeerList;
