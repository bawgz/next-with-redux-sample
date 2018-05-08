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

export const checkout = (order, tokenId) => {
    return async dispatch => {
        dispatch(setLoading(true));
        //make this a post
        //probably better to fetch from db instead of add to redux like this/????
        console.log(order)
        console.log(JSON.stringify(order));
        const chargeInfo = { tokenId, price: order.total }
        try {
            const charge = await fetch("http://el-jarocho.herokuapp.com/api/checkout", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(chargeInfo)
            })
            console.log(charge);
            if (charge.status === 200) {
                order.charge = await charge.json();
                console.log(order);
                dispatch(addUserOrder(order));
            } else {
                console.log("issa error");
            }

        } catch (err) {
            console.log(err);
        }
    }
}

const addUserOrder = (order) => (
    {
        type: ADD_USER_ORDER,
        payload: order
    }
);
