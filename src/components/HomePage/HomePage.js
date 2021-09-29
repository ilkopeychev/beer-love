import React, { useState, useEffect, useCallback, useContext } from "react";
import "./HomePage.scss";
import { myContext } from "../context/context";
import RenderBeerList from "../RenderBeerList/RenderBeerList";
import Footer from "../Footer/Footer";
import { Grid, Box } from "@mui/material";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { fetchHomeBeers, beers, wallet, connectWallet, styleDisabled } =
    useContext(myContext);

  // dissabled style for wallet
  // const styleDisabled =
  //   wallet === "no wallet" ? { pointerEvents: "none", opacity: "0.4" } : {};
  useEffect(() => {
    fetchHomeBeers();
  }, []);

  const enterClickHandler = (event) => {
    if (event.code === "Enter") {
      console.log("Enter key was pressed. Run your function.");
      event.preventDefault();
      console.log("searchTerm", searchTerm);
      searchTerm === "" ? fetchHomeBeers() : fetchHomeBeers(searchTerm);
    }
  };

  const searchBeerHandler = useCallback(() => {
    searchTerm === "" ? fetchHomeBeers() : fetchHomeBeers(searchTerm);
  }, [searchTerm, fetchHomeBeers]);

  return (
    <div className="home">
      <div className="home-search">
        <input
          style={styleDisabled}
          disabled={wallet === "no wallet"}
          type="text"
          placeholder="Search for beer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => enterClickHandler(e)}
        />
        <button
          className="button"
          onClick={searchBeerHandler}
          const
          style={styleDisabled}
        >
          Search Beer
        </button>
        {wallet === "no wallet" ? (
          <button className="button" onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : null}
      </div>
      <Box sx={{ flexGrow: 1 }} style={styleDisabled}>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="homePageContainer"
        >
          {beers?.length > 0 ? (
            <RenderBeerList beers={beers}></RenderBeerList>
          ) : (
            <h1>No beers found! Try another word ..</h1>
          )}
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
