import { setLoading } from "./index";

const ADD_USER_ORDER = "ADD_USER_ORDER";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_USER_ORDER: {
            return [ ...state, action.payload ];
        }
        default: {
            return state;
        }
    }
};

export const checkout = (order) => {
    return async dispatch => {
        dispatch(setLoading(true));
        //make this a post
        //probably better to fetch from db instead of add to redux like this/????
        console.log(order)
        console.log(JSON.stringify(order));
        await fetch("http://localhost:3000/api/checkout", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        dispatch(addUserOrder(order));
    }
}

const addUserOrder = (order) => (
    {
        type: ADD_USER_ORDER,
        payload: order
    }
);
