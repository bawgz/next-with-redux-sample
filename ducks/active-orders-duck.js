const GET_ACTIVE_ORDERS = "GET_ACTIVE_ORDERS";

export default (state = [], action = {}) => {
    switch (action.type) {
        case GET_ACTIVE_ORDERS: {
            const activeOrders = action.payload;
            return activeOrders;
        }
        default: {
            return state;
        }
    }
};

export const getActiveOrders = () => {
    const activeOrders = [{id: 1, item: "taco"}, {id: 2, item: "hamburger"}];
    return (
        {
            type: GET_ACTIVE_ORDERS,
            payload: activeOrders
        }
    );
};
