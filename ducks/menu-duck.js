import menuItems from "../constants/menu-items";

const GET_MENU = "GET_MENU";

export default (state = [], action = {}) => {
    switch (action.type) {
        case GET_MENU: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

export const getMenu = () => {
    return (
        {
            type: GET_MENU,
            payload: menuItems
        }
    );
};
