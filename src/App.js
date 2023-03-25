import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/index";
import Products from "./components/products/index";
import Playstation from "./components/products/playstation";
import Xbox from "./components/products/xbox";
import Footer from "./components/footer/index";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/playstation" component={Playstation} />
        <Route path="/xbox" component={Xbox} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
