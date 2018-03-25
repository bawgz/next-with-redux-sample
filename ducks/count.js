const ADD = "ADD";

export default (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state.count + 1;
        default: return state
    }
}

export const addCount = () => dispatch => {
    return dispatch({ type: ADD })
}