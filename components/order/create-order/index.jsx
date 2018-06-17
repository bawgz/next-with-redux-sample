import React from 'react';
import PropTypes from 'prop-types';

import { menuPropTypes } from '../../../constants/prop-types';
import MenuItem from './menu-item';

const CreateOrder = ({ menu, handleAddToOrder }) => (
  <div>
    {
      menu.map(item => (
        <MenuItem
          key={item.id}
          name={item.name}
          description={item.description}
          image={item.image}
          price={item.price}
          handleAddToOrder={handleAddToOrder}
          toppings={item.toppings}
        />
      ))
    }
  </div>
);

CreateOrder.propTypes = {
  menu: menuPropTypes.isRequired,
  handleAddToOrder: PropTypes.func.isRequired,
};

export default CreateOrder;
