const SET_LOADING = 'SET_LOADING';

export default (state = false, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const setLoading = isLoading => (
  {
    type: SET_LOADING,
    payload: isLoading,
  }
);
