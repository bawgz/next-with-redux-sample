import fetch from 'isomorphic-fetch';
import uuidv1 from 'uuid/v1';

import { setLoading } from './index';

const SET_CONFIRMED_ORDER = 'SET_CONFIRMED_ORDER';

export default (state = [], action) => {
  switch (action.type) {
    case SET_CONFIRMED_ORDER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const checkout = (orderParam, address, tokenId) => async dispatch => {
  dispatch(setLoading(true));
  // make this a post
  // probably better to fetch from db instead of add to redux like this/????
  const order = { ...orderParam, address };
  const chargeInfo = { tokenId, price: order.total };
  try {
    const charge = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chargeInfo),
    });
    if (charge.status !== 200) {
      throw new Error(charge.statusText);
    }
    const chargeJson = await charge.json();
    order.chargeId = chargeJson.id;
    order.id = uuidv1();
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
    const json = await response.json();
    return dispatch({
      type: SET_CONFIRMED_ORDER,
      payload: json,
    });
  } catch (err) {
    throw err;
  }
};
