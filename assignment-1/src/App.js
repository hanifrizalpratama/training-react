import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import Pdp from "./pages/Pdp";
import Cart from "./pages/Cart";
import './main.css';

function App() {
  return (
    <>
      <Router>
        <>
          <ul className="navigation">
            <li> <Link to="/">Home</Link> </li>
            <li style={{float: 'right'}}> <Link to="/Cart">Cart</Link> </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/category">
              <Category />
            </Route>
            <Route path="/product">
              <Pdp />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
