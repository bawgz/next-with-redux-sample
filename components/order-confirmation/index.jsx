import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { confirmedOrderPropTypes } from '../../constants/prop-types';
import MenuItem from '../order/create-order/menu-item';

const OrderConfirmation = ({ order }) => (
  <div>
    <Paper elevation={1}>
      <Typography variant="h3" component="h1">
        Order Confirmation
      </Typography>
      <Typography component="p">Order Number: {order.id}</Typography>
      {Object.keys(order.items).map(itemKey => {
        const item = order.items[itemKey];
        return (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            fillings={item.fillings}
          />
        );
      })}
    </Paper>
  </div>
);

OrderConfirmation.propTypes = {
  order: confirmedOrderPropTypes.isRequired,
};

export default OrderConfirmation;
