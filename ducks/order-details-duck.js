const ADD_TO_ORDER = "ADD_TO_ORDER";
const REMOVE_FROM_ORDER = "REMOVE_FROM_ORDER";

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_ORDER: {
            const newOrder = action.payload;
            const orders = { ...state };
            const key = `${newOrder.name}-${
                Object.keys(newOrder.toppings).sort().map((topping) => (topping))
            }`;
            if (orders[key]) {
                orders[key].qty += newOrder.qty;
            } else {
                newOrder.key = key;
                orders[key] = newOrder;
            }
            return orders;
        }
        case REMOVE_FROM_ORDER: {
            const orders = {  ...state };
            delete orders[action.payload];
            console.log(orders);
            return orders;
        }
        default: {
            return state;
        }
    }
};

export const addToOrder = (menuItem) => {
    return (
        {
            type: ADD_TO_ORDER,
            payload: menuItem
        }
    );
};

export const removeFromOrder = (key) => {
    return (
        {
            type: REMOVE_FROM_ORDER,
            payload: key
        }
    );
};
