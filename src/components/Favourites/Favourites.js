import React, { useContext } from "react";
import RenderBeerList from "../RenderBeerList/RenderBeerList";
import { myContext } from "../context/context";
import "../HomePage/HomePage.scss";
import { Grid, Box } from "@mui/material";

const Favourites = () => {
  const { favouriteSetBeers } = useContext(myContext);
  const arrayOfBeers = Array.from(favouriteSetBeers);
  const beerList = favouriteSetBeers.size ? (
    <RenderBeerList beers={arrayOfBeers} />
  ) : (
    <p className="info">You have not added any beers to your Favourites yet!</p>
  );

  return (
    <Box sx={{ flexGrow: 1 }} className="homePageBox">
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        className="homePageContainer"
      >
        <div className="container">{beerList}</div>
      </Grid>
    </Box>
  );
};

export default Favourites;
