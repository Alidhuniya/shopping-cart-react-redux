import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/carts" exact component={Cart} />
          <Route exact path="/product/:id" component={SingleProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
