const SET_ADDRESS = 'SET_ADDRESS';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_ADDRESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const setAddress = address => ({
  type: SET_ADDRESS,
  payload: address,
});
