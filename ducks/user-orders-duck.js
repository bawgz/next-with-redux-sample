import fetch from 'isomorphic-fetch';
import uuidv1 from 'uuid/v1';

import { setLoading } from './index';

const ADD_USER_ORDER = 'ADD_USER_ORDER';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_USER_ORDER: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export const checkout = (orderParam, tokenId) => async dispatch => {
  dispatch(setLoading(true));
  // make this a post
  // probably better to fetch from db instead of add to redux like this/????
  const order = { ...orderParam };
  console.log(order);
  console.log(JSON.stringify(order));
  const chargeInfo = { tokenId, price: order.total };
  try {
    const charge = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chargeInfo),
    });
    console.log(charge);
    if (charge.status === 200) {
      order.charge = await charge.json();
      order.id = uuidv1();
      console.log(order);
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });
      dispatch({
        type: ADD_USER_ORDER,
        payload: response,
      });
    }
  } catch (err) {
    throw err;
  }
};
