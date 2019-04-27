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
import confirmedOrder, { checkout } from './confirmed-order-duck';
import address, { setAddress } from './address-duck';

// This is here so the order-confirmation page can be developed
// by going straight there.
const CONFIRMED_ORDER = {
  items: {
    'Empanadas-Chicharron': {
      name: 'Empanadas',
      pricePerItem: 20,
      image: '/static/empanadas.jpg',
      qty: 1,
      filling: 'Chicharron',
      price: 20,
      key: 'Empanadas-Chicharron',
    },
  },
  total: 20,
  name: 'Luke Boggs',
  address: {
    street: '3083 Signature Blvd Apt F',
    city: 'Ann Arbor',
    state: 'Michigan',
    zip: '48103',
  },
  chargeId: 'ch_1DxGKDCj8lOCSpL9QheoatZA',
  id: '0fed4700-224f-11e9-94d5-efdb549a683b',
  _id: '5c4dd9a1bb24e80c4c37ff17',
};

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
  confirmedOrder: CONFIRMED_ORDER,
};

export const reducer = combineReducers({
  menu,
  orderDetails,
  activeOrders,
  loading,
  confirmedOrder,
  address,
});

export const initStore = (initialState = defaultInitialState) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
