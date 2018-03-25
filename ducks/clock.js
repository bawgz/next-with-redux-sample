const TICK = "TICK";

const exampleInitialState = {
    lastUpdate: 0,
    light: false
}

export default (state = exampleInitialState, action) => {
    switch (action.type) {
      case TICK:
        return { lastUpdate: action.ts, light: !!action.light };
      default: return state
    }
}

export const serverRenderClock = (isServer) => dispatch => {
    return dispatch({ type: TICK, light: !isServer, ts: Date.now() })
}

export const startClock = () => dispatch => {
    return setInterval(() => dispatch({ type: TICK, light: true, ts: Date.now() }), 1000)
}
