import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import count from "./ducks/count";
import clock from "./ducks/clock";

const exampleInitialState = {
  clock: {
    lastUpdate: 0,
    light: false
  },
  count: 0
}

export const reducer = combineReducers({
  clock,
  count
});

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
