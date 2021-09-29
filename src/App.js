import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import RandomBeer from "./components/RandomBeer/RandomBeer";
import HomePage from "./components/HomePage/HomePage";
import Favourites from "./components/Favourites/Favourites";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  console.log("rerender");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/favourites" render={() => <Favourites />} />
          <Route exact path="/random" component={RandomBeer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
