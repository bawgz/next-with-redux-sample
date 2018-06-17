import { defaultInitialState } from './index';

const ADD_TO_ORDER = 'ADD_TO_ORDER';
const REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER';
const CHANGE_QTY = 'CHANGE_QTY';

export default (state = defaultInitialState.orderDetails, action) => {
  switch (action.type) {
    case ADD_TO_ORDER: {
      const newOrder = action.payload;
      const orders = { ...state };
      const key = `${newOrder.name}-${
        Object.keys(newOrder.toppings).sort().map(topping => (topping))
      }`;
      const order = orders.items[key];
      newOrder.price = newOrder.pricePerItem * newOrder.qty;
      if (order) {
        order.qty += newOrder.qty;
        order.price += newOrder.price;
      } else {
        newOrder.key = key;
        orders.items[key] = newOrder;
      }
      orders.total += newOrder.price;
      return orders;
    }
    case REMOVE_FROM_ORDER: {
      const orders = { ...state };
      const removedOrder = action.payload;
      orders.total -= orders.items[removedOrder].price;
      delete orders.items[removedOrder];
      return orders;
    }
    case CHANGE_QTY: {
      const orders = { ...state };
      const { key, qty } = action.payload;
      const item = orders.items[key];
      const qtyDelta = qty - item.qty;
      const priceDelta = item.pricePerItem * qtyDelta;
      item.qty = qty;
      item.price += priceDelta;
      orders.total += priceDelta;
      return orders;
    }
    default: {
      return state;
    }
  }
};

export const addToOrder = menuItem => (
  {
    type: ADD_TO_ORDER,
    payload: menuItem,
  }
);

export const removeFromOrder = key => (
  {
    type: REMOVE_FROM_ORDER,
    payload: key,
  }
);

export const changeQty = changeDetails => (
  {
    type: CHANGE_QTY,
    payload: changeDetails,
  }
);
