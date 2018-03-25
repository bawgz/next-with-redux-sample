import React from "react";
import PropTypes from "prop-types";

import MenuItem from "./menu-item";

const CreateOrder = ({ menu, handleAddToOrder, toppings }) => (
    <div>
        {
            menu.map((item) => (
                <MenuItem
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    handleAddToOrder={handleAddToOrder}
                    toppings={toppings}
                />
            ))
        }
    </div>
);

CreateOrder.propTypes = {
    menu: PropTypes.array,
    handleAddToOrder: PropTypes.func
};

export default CreateOrder;
