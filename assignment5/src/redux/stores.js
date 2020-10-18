import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cart";

const reducers = combineReducers({
  cart: cartReducer,
});


const stores = createStore(
  reducers,
  undefined,
);

export default stores;