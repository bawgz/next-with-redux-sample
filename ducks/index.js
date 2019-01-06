import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import menu, { fetchMenu } from './menu-duck';
import orderDetails, {
  addToOrder,
  removeFromOrder,
  changeQty,
} from './order-details-duck';
import activeOrders, { getActiveOrders } from './active-orders-duck';
import loading, { setLoading } from './loading-duck';
import userOrders, { checkout } from './user-orders-duck';
import address, { setAddress } from './address-duck';

export {
  fetchMenu,
  addToOrder,
  removeFromOrder,
  getActiveOrders,
  changeQty,
  setLoading,
  checkout,
  setAddress,
};

export const defaultInitialState = {
  menu: [],
  orderDetails: { items: {}, total: 0 },
  activeOrders: [],
  loading: false,
  userOrders: [],
};

export const reducer = combineReducers({
  menu,
  orderDetails,
  activeOrders,
  loading,
  userOrders,
  address,
});

export const initStore = (initialState = defaultInitialState) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
