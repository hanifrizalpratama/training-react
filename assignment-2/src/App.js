import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import Pdp from "./pages/Pdp";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import './main.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <>
            <ul className="navigation">
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/Profile">Profile</Link> </li>
              <li style={{float: 'right'}}> <Link to="/Cart">Cart</Link> </li>
              <li style={{float: 'right'}}> <Link to="/Register">Register</Link> </li>
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
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/Profile">
                <Profile />
              </Route>
            </Switch>
          </>
        </Router>
      </Provider>
    </>
  );
}

export default App;
