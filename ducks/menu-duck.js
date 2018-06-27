import fetch from 'isomorphic-fetch';

const SET_MENU = 'SET_MENU';

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_MENU: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const fetchMenu = baseUrl => async dispatch => {
  const menu = await fetch(`${baseUrl}/api/menu`);
  const json = await menu.json();
  dispatch({
    type: SET_MENU,
    payload: json,
  });
};
