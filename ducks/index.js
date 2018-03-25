import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import menu, { getMenu } from "./menu-duck";
import orderDetails, { addToOrder, removeFromOrder } from "./order-details-duck";
import activeOrders, { getActiveOrders } from "./active-orders-duck";

export { getMenu, addToOrder, removeFromOrder, getActiveOrders };


const defaultInitialState = {
  menu: [],
  orderDetails: {},
  activeOrders: []
}

export const reducer = combineReducers({
  menu,
  orderDetails,
  activeOrders
});

export const initStore = (initialState = defaultInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
