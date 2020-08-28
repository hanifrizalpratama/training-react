import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  cart: cartReducer,
  user: userReducer
});

const middlewares = applyMiddleware(thunk);

const stores = createStore(
  reducers,
  undefined,
  composeWithDevTools(middlewares)
);

export default stores;
