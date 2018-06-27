import fetch from 'isomorphic-fetch';

import { setLoading } from './index';

const ADD_USER_ORDER = 'ADD_USER_ORDER';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_USER_ORDER: {
      console.log(state);
      console.log(action.payload);
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
      console.log(order);
      dispatch({
        type: ADD_USER_ORDER,
        payload: order,
      });
    } else {
      console.log('issa error');
    }
  } catch (err) {
    throw err;
  }
};
